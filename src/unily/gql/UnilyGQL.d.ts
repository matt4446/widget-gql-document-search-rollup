export interface IGqlRequestModel {
    variables: IGqlVariablesModel
    query: string
}

export interface IGqlVariablesModel {
    [key: string]: string | number | undefined;
    queryText?: string;
    take?: number;
    skip?: number;
}

export interface IGqlResult {
    data: Data;
}

export interface Data {
    comments?: Comments;
    content?: Content;
    users?: Users;
}

export interface Content {
    byLastModifiedDate?: ResultSection;
    byLastSocialCommentDate?: ResultSection;
    byLastSocialReactionDate?: ResultSection;
    byQueryText?: ResultSection;
    bySocialCommentCount?: ResultSection;
    bySocialReactionCount?: ResultSection;
    bySocialReactionScore?: ResultSection;
    byViewCount?: ResultSection;
    [key: string]: ResultSection;
}

export interface Comments {
    byDate? : ResultSection;
    [key: string]: ResultSection;
}

export interface Users {
    byQueryText: ResultSection; 
    byBadgeCount: ResultSection;
    byBadgePoints: ResultSection;
    [key: string]: ResultSection;
}

// export interface IGqlResultSection<T = unknown> {

// }

export interface Properties<TInner = unknown> {
    title: string;
}

export interface Site<T = unknown> {
    id: number;
    path: string;
    properties: KeyedCollection<T>;
}


export interface Properties2 {
    teamId: string;
}

export interface ResultSection<T = ContentBase> {
    totalRows: number;
    data: ContentBase<T>[];
}
export interface SiteBase<T = unknown> {
    properties: IGqlItemResultProperties,
}

export interface ContentBase<TInner = unknown> {
    activity?: IGqlContentActivity;
    createDate?: string;
    documentTypeId?: number;
    //properties: Properties<TInner>,
    documentTypeIdPath: string
    documentTypePath: string
    id: number
    key: string
    lastModifiedDate: string
    nodeName: string
    nodeTypeAlias: string
    parentId: number;
    path: string
    published: boolean
    publishedVersionGuid: string
    releaseDate: string;
    site: SiteBase;
    url: string;
    properties: KeyedCollection<TInner>; 
}

// export interface IGqlContentActivity {

// }

// export interface IGqlItemResultProperties<T = unknown> {

// }





/**
* Type for a collection of keys on the given model
*/
export type ValueKeys<T> = Array<keyof T>
/**
* Dictionary using keys from the model and the value TValue
*/
export type KeyedCollection<TObj, TValue> = {
    [key in keyof Partial<TObj>]: TValue
}

