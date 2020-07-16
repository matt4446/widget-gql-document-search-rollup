import { SortFields } from "./SortFields";
export interface QueryConfiguration {
    searchType: "Content" | "UnpublishedContent" | "Members" | "UnapprovedMembers"; //     Content = "Content",
    queryText: string;
    isAdvancedQuery?: boolean;
    PersonalisationQuery?: string;
    ApplyAudienceTargeting?: boolean;
    skip?: number;
    take?: number;
    takeTokenized?: string;
    sortFieldsTokenized?: string;
    targetLanguage?: string;
    sortFields?: SortFields[];
    /**
     * @deprecated use jsonResponseFields instead.
     */
    fieldFilter?: string[];
    /**
     * A list of fields to populate on the results. Use a comma-separated list a,b to select multiple fields. Use parentheses a,c(x,y) to specify a group of nested properties that will be included into response.
     * eg. id, title, author(id, displayName)
     */
    jsonResponseFields?: string;
    searchText?: string[];
    includeHitHighlights?: boolean;
}
