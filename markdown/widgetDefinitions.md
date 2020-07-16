- [# NodeName: GQL - Documents Rollup (BASE)](#h1-idnodename-gql---documents-rollup-base-7nodename-gql---documents-rollup-baseh1)
- [Child Items Tab](#child-items-tab)
- [Configuration Properties Tab](#configuration-properties-tab)
- [Properties Tab](#properties-tab)
  - [Properties](#properties)
  - [Template](#template)
- [# Child Configurations](#h1-idchild-configurations-7child-configurationsh1)
- [# NodeName: Document Search - GQL](#h1-idnodename-document-search---gql-7nodename-document-search---gqlh1)
- [# NodeName: Document Search - GQL (Lazy)](#h1-idnodename-document-search---gql-lazy-7nodename-document-search---gql-lazyh1)

# NodeName: GQL - Documents Rollup (BASE)
---

## Child Items Tab

|Name|Sort|Last Edited|
|---|---|---|
|Document Search - GQL||2020-07-15T03:47:36.513Z|
|Document Search - GQL (Lazy)|1|2020-07-15T05:41:21.576Z|


## Configuration Properties Tab

|Property|Value|
|---|---|
|Category||
|Icon||
|Platform|Desktop|
|User Types||
|Min columns||
|Max columns||
|Restricted?||


## Properties Tab

|Property|Value|
|---|---|
|Alias|gqlDocumentRollup|
|Feature Dependencies||
|Max JSON Serialization Depth|1|


### Properties

|Name|Label|Data Type|Description|
|---|---|---|---|
|categories|Categories|Unily Category Picker W/O Permissions||
|locations|Locations|Unily Location Picker||
|gql|GQL|Unily Template Code Editor||
|viewModel|View Model|Unily Query Processor Script||
|viewAllUrl|View All URL|Textstring||
|buttonText|View All Button Text|Announcement Status Dropdown||


### Template

``` HTML
<div class="widgets stories-rollup" gql-document-search-rollup gql="gql" search-fields="viewModel.searchFieds" base-query="viewModel.baseQuery" results="viewModel.results">
  <div class="widgets__title" ng-if="title">
    <span class="widgets__icon">
            <span class="{{::icon}}"></span>
    </span>
    <h3 class="title">{{::title}}</h3>
  </div>
  <div class="widgets__sub-search">
    <div class="input-wrapper ng-isolate-scope">
      <input type="text" class="form-control ng-valid needsclick ng-not-empty ng-dirty ng-valid-parse ng-touched" ng-model="$gqlDocumentSearchRollup.searchText" ng-model-options='{ debounce: 1000 }' ng-change='$gqlDocumentSearchRollup.search()' placeholder="{{:: 'Social.Search' | term }} ...">
    </div>
  </div>
  <div ng-if="$gqlDocumentSearchRollup.results.data.content.documents.data">
    <p style="padding-top: 15px; padding-left: 15px; padding-bottom: 10px; border-bottom: 1px solid #D3D3D3">Showing {{$gqlDocumentSearchRollup.results.data.content.documents.data.length}} of {{ $gqlDocumentSearchRollup.results.data.content.documents.totalRows }} ...</p>
    <div class="widgets__body" ng-style="{ 'height' : (((numItems || 5) * 70) + 'px')}" custom-scroll-bar>
      <div ng-repeat="item in $gqlDocumentSearchRollup.results.data.content.documents.data">
        <a ng-href="{{::item.url}}" class="media">
          <div class="media-left media-middle">
            <span class="icon {{ item.properties.umbracoExtension | gqlDocumentSearchRollupIconClass }}"></span>
          </div>
          <div class="media-body media-middle">
            <h4 class="media-heading ellipsis" ellipsis=""><span>{{::item.properties.title}}</span></h4>
            <p class="media-desc">{{:: 'Placeholder.Modified' | term }}: {{::item.lastModifiedDate | date:'MMMM dd, yyyy' }}</p>
            <p class="media-desc"><span class="badge badge-secondary" ng-repeat="term in item.properties.categoryField">{{::term.openGraphSummary.title }}</span></p>
            <p class="media-desc"><span class="badge badge-primaryy" ng-repeat="term in item.properties.location">{{::term.openGraphSummary.title }}</span></p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div ng-if="!$gqlDocumentSearchRollup.loading && !$gqlDocumentSearchRollup.results.data.content.documents.data" class="widgets__body">
    <p class="no-results">{{::'Placeholder.NoFilterData' | term}}</p>
  </div>
  <div ng-if="$gqlDocumentSearchRollup.loading" class="widgets__body">
    <p class="no-results">{{::'Placeholder.Loading' | term}}</p>
  </div>
  <div ng-if="viewAllUrl" class="widgets__footer">
    <a class="btn widgets__footer__btn" ng-href="{{::viewAllUrl}}">{{:: buttonText || ('Button.ViewAll' | term) }}</a>
  </div>
</div>
```
# Child Configurations
---

# NodeName: Document Search - GQL
---

<h2>Widget Configuration</h2>

|Alias|
|---|
|documentSearchGql|


<h3>categories</h3>

``` JS
1375,1376,1379,1378,1384,1386,3580,3581,3543,1392,1385
```
<h3>gql</h3>

``` JS
query documents($documentQuery: String = "+documentTypePath:(UnilyDocument)") {
  content {
    documents: byQueryText(take: 10, skip: 0, queryText: $documentQuery) {
      totalRows
      data {
        id
        nodeName
        createDate
        lastModifiedDate
        nodeTypeAlias
        url
        openGraphSummary {
          category
          title
          type
        }
        properties {
          ... on UnilyDocument {
            categoryField {
              id
              openGraphSummary {
              	title
              }
            }
            location {
              id, 
              openGraphSummary{
              	title
            	}
            }
            title
            umbracoFile
            essentialFile
            umbracoExtension
            author {
              id
              displayName
              email
            }
          }
        }
      }
    }
  }
}

```
<h3>viewModel</h3>

``` JS
function(queryContextProvider, gqlService){
 /* 5.27+ */
 var searchFields = ["title", "author__SearchableValue", "umbracoFile", "umbracoExtension"]; 
 var queryParts = [
  "+documentTypePath:(UnilyDocument)"
 ]; 
 var widget = queryContextProvider.widget;
 var unenrichedWidget = queryContextProvider.unenrichedWidget;
 var model = {
  issues:[], 
  unenrichedWidget: unenrichedWidget,
  baseQuery: "",
  searchFields: searchFields,
  gql: widget.gql,
  // include first results. 
  results: null
 };
 
 try {
  // query document.category field with values from categories: 
  addTerms("categories", "categoryField"); 
  // query document.locations field with values from locations: 
  addTerms("locations", "location"); 
  
  model.baseQuery = queryParts.join(" ");
  model.results = query();
 
 }catch(er){
  model.issues.push(er);
 }
 

 
 return model; 
 
 function addTerms(widgetProperty, documentPropertyAlias, combine) {
  combine || (combine = " OR "); 
  // should be string values eg "1,23,444"
  var widgetValues = model.unenrichedWidget[widgetProperty];
  if(!widgetValues){
   model.issues.push("widgetProperty doesnt exist: " + widgetProperty);
   return; 
  }
  var ids = widgetValues.split(",");
  queryParts.push("+" + documentPropertyAlias + ":(" + ids.join(combine) + ")");
 }
 
 function query(){
  var result = JSON.parse(gqlService.search({
   query: widget.gql,
   variables: {
    "documentQuery": queryParts.join(" ")
   }
  }));
  
  return result
 }
}
```
<h3>viewAllUrl</h3>

``` JS

```
<h3>buttonText</h3>

``` JS

```
<h3>locations</h3>

``` JS

```
# NodeName: Document Search - GQL (Lazy)
---

<h2>Widget Configuration</h2>

|Alias|
|---|
|documentSearchGqlLazy|


<h3>categories</h3>

``` JS
1375,1376,1379,1378,1384,1386,3580,3581,3543,1392,1385
```
<h3>gql</h3>

``` JS
query documents($documentQuery: String = "+documentTypePath:(UnilyDocument)") {
  content {
    documents: byQueryText(take: 10, skip: 0, queryText: $documentQuery) {
      totalRows
      data {
        id
        nodeName
        createDate
        lastModifiedDate
        nodeTypeAlias
        url
        openGraphSummary {
          category
          title
          type
        }
        properties {
          ... on UnilyDocument {
            categoryField {
              id
              openGraphSummary {
              	title
              }
            }
            location {
              id, 
              openGraphSummary{
              	title
            	}
            }
            title
            umbracoFile
            essentialFile
            umbracoExtension
            author {
              id
              displayName
              email
            }
          }
        }
      }
    }
  }
}

```
<h3>viewModel</h3>

``` JS
function(lazyQueryContextProvider, gqlService){
 /* 5.27+ */
 var searchFields = ["title", "author__SearchableValue", "umbracoFile", "umbracoExtension"]; 
 var queryParts = [
  "+documentTypePath:(UnilyDocument)"
 ]; 
 //var lazyWidget = lazyQueryContextProvider.widget(); 
 var unenrichedWidget = lazyQueryContextProvider.unenrichedWidget(); 
 var model = {
  issues:[], 
  unenrichedWidget: unenrichedWidget,
  baseQuery: "",
  searchFields: searchFields,
  //gql: widget.gql,
  // include first results. 
  results: null
 };
 
 try {
  // query document.category field with values from categories: 
  addTerms("categories", "categoryField"); 
  // query document.locations field with values from locations: 
  addTerms("locations", "location"); 
  
  model.baseQuery = queryParts.join(" ");
  model.results = query();
 
 }catch(er){
  model.issues.push(er);
 }
 
 return model; 
 
 function addTerms(widgetProperty, documentPropertyAlias, combine) {
  combine || (combine = " OR "); 
  // should be string values eg "1,23,444"
  var widgetValues = model.unenrichedWidget[widgetProperty];
  if(!widgetValues){
   model.issues.push("widgetProperty doesnt exist: " + widgetProperty);
   return; 
  }
  var ids = widgetValues.split(",");
  queryParts.push("+" + documentPropertyAlias + ":(" + ids.join(combine) + ")");
 }
 
 function query(){
  var result = JSON.parse(gqlService.search({
   query: widget.gql,
   variables: {
    "documentQuery": queryParts.join(" ")
   }
  }));
  
  return result
 }
}
```
<h3>viewAllUrl</h3>

``` JS

```
<h3>buttonText</h3>

``` JS

```
<h3>locations</h3>

``` JS

```