export interface UnilyUserService {
    getUsers: (searchText: string) => angular.IPromise<unknown>
    getUserById: (userId: number|string) => angular.IPromise<unknown>
    getUsersByIds: (ids: Array<string>) => angular.IPromise<unknown>;
    getCurrentUser: () => angular.IPromise<unknown>
}