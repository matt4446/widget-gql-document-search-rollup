import { IUnilyBaseEntity } from "../entities/IUnilyBaseEntity";
export interface UnilySearchResult<T = IUnilyBaseEntity> {
    totalRows: number;
    results: T[];
}
