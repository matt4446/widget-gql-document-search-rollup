(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_W6qm__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "/7QA");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/7QA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "angular"
var external_angular_ = __webpack_require__("W6qm");
var external_angular_default = /*#__PURE__*/__webpack_require__.n(external_angular_);

// CONCATENATED MODULE: ./src/filters.ts
function gqlDocumentSearchRollupIconClass() {
    return function (input) {
        if (!input) {
            return input;
        }
        var extension = input.substring(input.lastIndexOf('.') + 1, input.length).toLowerCase();
        var iconClass = 'icomoon-';
        if (extension.indexOf('pdf') >= 0) {
            iconClass += 'file-pdf';
        }
        else if (extension.indexOf('doc') >= 0) {
            iconClass += 'file-word';
        }
        else if (extension.indexOf('xls') >= 0) {
            iconClass += 'file-excel';
        }
        else if (extension.indexOf('ppt') >= 0) {
            iconClass += 'file-presentation';
        }
        else if (extension.indexOf('zip') >= 0) {
            iconClass += 'file-zip';
        }
        else if (extension.indexOf('jpg') >= 0) {
            iconClass += 'image2';
        }
        else if (extension.indexOf('jpeg') >= 0) {
            iconClass += 'image2';
        }
        else if (extension.indexOf('gif') >= 0) {
            iconClass += 'image2';
        }
        else if (extension.indexOf('png') >= 0) {
            iconClass += 'image2';
        }
        else {
            iconClass += 'file-text2';
        }
        return iconClass;
    };
}

// CONCATENATED MODULE: ./src/index.ts


(function () {
    var components = external_angular_default.a.module("unily.components");
    var filters = external_angular_default.a.module('unily.filters');
    var directiveName = "gqlDocumentSearchRollup";
    filters.filter('gqlDocumentSearchRollupIconClass', [gqlDocumentSearchRollupIconClass]);
    components.directive(directiveName, [function () {
            return {
                bindToController: {
                    gql: "<",
                    searchFields: "<",
                    baseQuery: "<",
                    results: "<"
                },
                controllerAs: "$" + directiveName,
                controller: gqlDocumentSearchRollupController,
            };
        }]);
    var gqlDocumentSearchRollupController = /** @class */ (function () {
        function gqlDocumentSearchRollupController($http) {
            this.$http = $http;
            this.loading = false;
            this.routes = {
                search: "/api/v1/search"
            };
        }
        gqlDocumentSearchRollupController.prototype.$onInit = function () {
            this.searchFields || (this.searchFields = ["title"]);
            if (!this.gql) {
                console.error("GQL query missing");
            }
        };
        gqlDocumentSearchRollupController.prototype.getGqlRequestModel = function () {
            var _this = this;
            if (!this.searchFields) {
                throw "search fields are invalid";
            }
            if (!this.gql) {
                throw "gql query is missing";
            }
            var searchOn = !this.searchText ? [] : this.searchFields.map(function (x) {
                if (_this.searchText) {
                    return "+" + x + ":(" + _this.searchText.split(" ").map(function (e) { return e + "*"; }).join(" ") + ")";
                }
                return "";
            });
            if (this.baseQuery) {
                searchOn.unshift(this.baseQuery);
            }
            return {
                query: this.gql,
                variables: {
                    "documentQuery": searchOn.join(" ")
                }
            };
        };
        gqlDocumentSearchRollupController.prototype.search = function () {
            var _this = this;
            this.loading = true;
            var model = this.getGqlRequestModel();
            var map = function (response) {
                return (_this.results = response.data);
            };
            var addFields = function () {
                var _a;
                if (_this.results) {
                    var documents = (_a = _this.results.data.content) === null || _a === void 0 ? void 0 : _a.documents;
                    if (documents) {
                        documents.data.forEach(function (item) {
                            var _a;
                            if (item.properties.umbracoFile) {
                                var fileName = (_a = item.properties.umbracoFile) === null || _a === void 0 ? void 0 : _a.split("/");
                                item.properties.downloadUrl = "/documents/downloads/" + item.id + "/" + fileName[fileName.length - 1];
                                item.properties.previewUrl = "/documents/preview/" + item.id + "/" + fileName[fileName.length - 1];
                            }
                        });
                    }
                }
            };
            var complete = function () { _this.loading = false; };
            this.$http.post(this.routes.search, model).then(map).then(addFields).then(complete);
        };
        gqlDocumentSearchRollupController.$inject = ["$http"];
        return gqlDocumentSearchRollupController;
    }());
}());


/***/ }),

/***/ "W6qm":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_W6qm__;

/***/ })

/******/ });
});