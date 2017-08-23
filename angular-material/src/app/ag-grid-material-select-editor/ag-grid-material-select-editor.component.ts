import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAfterGuiAttachedParams, ICellEditorParams } from "ag-grid/main";
import { AgEditorComponent, } from "ag-grid-angular";
import { MdSelect } from "@angular/material";

@Component({
  selector: 'app-ag-grid-material-select-editor',
  templateUrl: './ag-grid-material-select-editor.component.html',
  styleUrls: ['./ag-grid-material-select-editor.component.scss']
})
export class AgGridMaterialSelectEditorComponent implements OnInit, AgEditorComponent {
    columnWidth: string;
    values: [ string ];
    params: ICellEditorParams;
    private value: string;
    @ViewChild('select', {read: MdSelect}) select: MdSelect;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.select.open();
    }

    isPopup(): boolean {
        return true;
    }

    isCancelBeforeStart(): boolean {
        return false;
    }

    isCancelAfterEnd(): boolean {
        return false;
    }

    agInit(params: any): void {
        this.params = params;
        this.columnWidth = params.column.actualWidth + "px";
        this.values = params.values;
        this.value = params.value;
    }

    getValue(): string {
        return this.value;
    }

    onSelectChange(e): void {
        this.params.stopEditing();
    }

}
