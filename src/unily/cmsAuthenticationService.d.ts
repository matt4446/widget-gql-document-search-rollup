import apiRequestService from "./apiRequestService";
export default interface ICmsAuthenticationService extends apiRequestService {
    conditionalCmsRequest: (fn: () => angular.IPromise<unknown>) => angular.IPromise<unknown>;
    makeCmsRequest: (fn: () => angular.IPromise<unknown>) => angular.IPromise<unknown>;
}
