export interface IUnilyMemberEntity extends IUnilyBaseEntity {
    manager? : IUnilyMemberEntity   
    displayName? : string;
    [key: string] : unknown | null | undefined; 
} 