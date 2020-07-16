export interface IUnilyProxyService {
    // proxyUrl: 'api/proxy';
    // azureUrl: 'api/proxy/azure';
    // integrationUrl: 'api/proxy/integration';
    // customUrl: 'api/proxy/integration';
    requestPayload: IUnilyProxyServiceRequestPayload;
    azureRequest(request: IUnilyProxyServiceRequestPayload):angular.IPromse<unknown, angular.IHttpResponse<unknown>>;
    integrationRequest(request:IUnilyProxyServiceRequestPayload, integrationName: string):angular.IPromse<unknown, angular.IHttpResponse<unknown>>;
    customRequest(request: IUnilyProxyServiceRequestPayload):angular.IPromse<unknown, angular.IHttpResponse<unknown>>;

    isUserLoggedIntoIntegration(integrationKey: string): angular.IPromise<boolean>;
    integrationLogin(integrationKey:string, localReturnUrl?:string): void;
    integrationLogOut(integrationKey:string, localReturnUrl?:string): void;
    integrationLogOutAndRevokeToken(integrationKey, localReturnUrl): void;
}




export interface IUnilyProxyServiceRequestPayload {
    new (url:string, verb?: "GET|POST|PUT|PATCH|DELETE",body?:string|unknown|null, headerParams?: Array<IUnilyProxyServiceRequestPayloadHeaderParams>)
    url: string;
    httpVerb: string;
    body: string | unknown | null;
    headers: Array<IUnilyProxyServiceRequestPayloadHeaderParams>;
    addHeader: (key:string, value: string) => void;
}

export interface IUnilyProxyServiceRequestPayloadHeaderParams {
    key: string, value: string
}