


export function gqlDocumentSearchRollupIconClass(): angular.IFilterFunction {
    return function (input: string): string {
        if (!input) {
            return input;
        }
        const extension = input.substring(input.lastIndexOf('.') + 1, input.length).toLowerCase();
        let iconClass = 'icomoon-';
        if (extension.indexOf('pdf') >= 0) { iconClass += 'file-pdf'; }
        else if (extension.indexOf('doc') >= 0) { iconClass += 'file-word'; }
        else if (extension.indexOf('xls') >= 0) { iconClass += 'file-excel'; }
        else if (extension.indexOf('ppt') >= 0) { iconClass += 'file-presentation'; }
        else if (extension.indexOf('zip') >= 0) { iconClass += 'file-zip'; }
        else if (extension.indexOf('jpg') >= 0) { iconClass += 'image2'; }
        else if (extension.indexOf('jpeg') >= 0) { iconClass += 'image2'; }
        else if (extension.indexOf('gif') >= 0) { iconClass += 'image2'; }
        else if (extension.indexOf('png') >= 0) { iconClass += 'image2'; }
        else { iconClass += 'file-text2'; }
        return iconClass;
    };
}