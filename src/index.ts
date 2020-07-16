import angular from "angular";
import { gqlDocumentSearchRollupIconClass} from "./filters";
import { gqlDocumentSearchRollupController } from "./controllers/gqlDocumentSearhRollupController";

(function(){
    const components = angular.module("unily.components");
    const filters = angular.module('unily.filters');
    const directiveName = "gqlDocumentSearchRollup"; 

    components.directive(directiveName, [function(){
        return {
            bindToController: {
                gql: "<",
                searchFields: "<",
                baseQuery: "<",
                
                results: "<"
            },
            controllerAs: `$${directiveName}`,
            controller: gqlDocumentSearchRollupController,
        };
    }]);

    filters.filter('gqlDocumentSearchRollupIconClass', [gqlDocumentSearchRollupIconClass]);
}());