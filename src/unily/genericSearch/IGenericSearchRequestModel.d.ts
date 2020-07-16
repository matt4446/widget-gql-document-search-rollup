import { WidgetProperties } from "./WidgetProperties";
import { GenericSearchContext } from "./GenericSearchContext";
import { QueryConfiguration } from "./QueryConfiguration";
export interface IGenericSearchRequestModel {
    query: QueryConfiguration;
    context?: GenericSearchContext;
    widgetProperties?: WidgetProperties;
}
