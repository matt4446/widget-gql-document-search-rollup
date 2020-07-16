export interface IUnilyContentModel extends IUnilyContentModelBase {
    title?: string;
    [key:string] : unknown
}
export interface IUnilyTermBase extends IUnilyContentModelBase {
    title?: string;
}
export interface IUnilyContentModelBase {
    id: number;
    path: string;
    nodeName: string;
    nodeTypeAlias: string;
}