export class TableHeader {
    label: string;
    sortField: string;
    sortedAsc: boolean;
    isSortActive: boolean;

    constructor(label: string,  sortField: string, sortedAsc: boolean, isSortActive: boolean) { 
        this.label = label;
        this.sortField = sortField;
        this.sortedAsc = sortedAsc;
        this.isSortActive = isSortActive;
    }
}