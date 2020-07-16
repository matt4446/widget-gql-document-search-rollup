import { IGqlResult, IGqlRequestModel, ResultSection } from "../unily/gql/UnilyGQL";
import { IGqlDocumentModelProperties } from "../models";

export class gqlDocumentSearchRollupController implements angular.IController {
    static $inject = ["$http"]; 
    
    public searchText?: string;
    public loading = false; 
    public gql? :string; 
    public searchFields?: Array<string>;
    public baseQuery?: string; 
    public routes = {
        search: "/api/v1/search"
    };


    public results?: IGqlResult; 

    constructor(public $http:angular.IHttpService){

    }
    
    $onInit(){
        this.searchFields || (this.searchFields = ["title"]);

        if(!this.gql){
            console.error("GQL query missing");
        }
    }

    getGqlRequestModel(): IGqlRequestModel {
        if(!this.searchFields){ throw "search fields are invalid"; }
        if(!this.gql){ throw "gql query is missing"; }

        const searchOn = !this.searchText ? [] : this.searchFields.map(x => {
            if(this.searchText){
                return `+${x}:(${this.searchText.split(" ").map(e => `${e}*`).join(" ")})`; 
            }
            return "";
        });

        if (this.baseQuery){
            searchOn.unshift(this.baseQuery)
        }
        
        return {
            query : this.gql,
            variables : {
                "documentQuery" : searchOn.join(" ")
            }
        }
    }

    search(){
        this.loading = true;
        
        const model = this.getGqlRequestModel(); 
        const map = (response:angular.IHttpResponse<IGqlResult>) => { 
            return (this.results = response.data); 
        }
        const addFields = () => {
            if(this.results){
                const documents = this.results.data.content?.documents as ResultSection<IGqlDocumentModelProperties>; 
                if(documents){
                    documents.data.forEach((item) => {
                        if(item.properties.umbracoFile){
                            const fileName = item.properties.umbracoFile?.split("/"); 
                            item.properties.downloadUrl = `/documents/downloads/${item.id}/${fileName[fileName.length-1]}`;
                            item.properties.previewUrl = `/documents/preview/${item.id}/${fileName[fileName.length-1]}`;
                        }
                    });
                }
            }
        }
        const complete = () => { this.loading = false; }

        this.$http.post<IGqlResult>(this.routes.search, model).then(map).then(addFields).then(complete);
    }
}