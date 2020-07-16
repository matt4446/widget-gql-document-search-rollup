import { ContentBase } from "./unily/gql/UnilyGQL";

export interface IGqlDocumentModelProperties {
    author?: ContentBase
    categoryField?: Array<ContentBase>
    essentialFile?: number;
    publishedVersionCount?: string
    templateFile?: number
    thumbnailImage?: string;
    title?: string;
    umbracoBytes?: string
    umbracoExtension?: string
    umbracoFile?: string
    versionCount?: string
}