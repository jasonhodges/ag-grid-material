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
    private value: string;
    @ViewChild('select', {read: MdSelect}) select: MdSelect;

    private items: [ string ] = [ "Toyota", "Ford", "Porche" ];

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.select.open();
    }

    isPopup(): boolean {
        return false;
    }

    isCancelBeforeStart(): boolean {
        return false;
    }

    isCancelAfterEnd(): boolean {
        return false;
    }

    focusIn(): void {
        //
    }

    focusOut(): void {
        // 
    }

    agInit(params: ICellEditorParams): void {
        this.value = params.value;
    }

    getValue(): string {
        return this.value;
    }

    transferValue(): void {
        console.log('test')
    }

}
