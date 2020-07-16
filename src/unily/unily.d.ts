declare namespace Unily {
    interface Settings {
        defaultLanguage: string,
        isEngageInstallation: boolean;
    }
    interface CdnConfig {
        enabled: boolean; 
    }
    interface CmsConfig {
        editUrlPrefix : string,
        url: string
    }
    interface Site {
        id : number;
        cssClass: string;
        urlPath: string;
    }
    interface User {
        accountName: string;
        displayLanguage: string;
        emailAddress: string
        hasOffice365License: boolean
        isAdmin: boolean
        placeholderProfileImage: string;
        sessionId: string;
        /** should be a number but is for some reason a string */
        userId: string;
    }
    interface SharePointConfig {
        iframeAuthenticationUrl: string;
        officeGraphEnabled: string;
        rootSite: string;
        tenant: string;
    }
    interface CurrentItem {
        id: number;
        documentTypePath: string
        [key:string]:unknown; 
    }

    interface Events {
        OnOverlayDataStateUpdated: string;
        OnReturnFromOverlay: string;
        PageChange: string;
        PageUnloaded: string;
        PersonalAppsUpdatedFromAppsPage: string;
        PersonalAppsUpdatedFromHeader: string; 
        ShareCountChanged: string;
    }

    interface Analytics {
        EventTypes: {
            "pageImpression" : "PageImpression",
        },
        recordEvent(event:unknown): void;

    }
    // interface UnilyInterface extends Object {
    //     CmsConfig : CmsConfig,
    //     CdnConfig: CdnConfig,
    //     Settings: Settings
    // }    

    export const Settings : Settings;
    export const CmsConfig : CmsConfig
    export const CdnConfig : CdnConfig;
    export const User: User;
    export const Site: Site;
    export const RootSite: Site;
    export const SharePointConfig: SharePointConfig;
    export const CurrentItem: CurrentItem;
    export const Events: Events
    export const Analytics: Analytics;
}

export default Unily
