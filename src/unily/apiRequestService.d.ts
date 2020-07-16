export default interface IApiRequestService {
    head: (ur: string, alwaysResolve?: boolean) => angular.IPromise<unknown>;
    getCancellable: (url: string, params: {
        [key: string]: unknown;
    }) => angular.IPromise<unknown>;
    get: (url: string, params: {
        [key: string]: unknown;
    }, useCredentials: boolean, cache?: boolean) => angular.IPromise<unknown>;
    post: (url: string, data: unknown, useCredentials?: boolean) => angular.IPromise<unknown>;
    patch: (url: string, data: unknown, useCredentials?: boolean) => angular.IPromise<unknown>;
    postFormData: (url: string, model: unknown, files: unknown, useCredentials?: boolean) => angular.IPromise<unknown>;
    putFormData: (url: string, model: unknown, files: unknown, useCredentials?: boolean) => angular.IPromise<unknown>;
    put: (url: string, data: unknown, useCredentials?: boolean) => angular.IPromise<unknown>;
    delete: (url: string, config: unknown, useCredentials?: boolean) => angular.IPromise<unknown>;
}
