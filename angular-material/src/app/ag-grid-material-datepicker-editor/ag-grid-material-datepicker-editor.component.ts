import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAfterGuiAttachedParams, ICellEditorParams } from "ag-grid/main";
import { AgEditorComponent, } from "ag-grid-angular";
import { MdDatepicker, MdDatepickerToggle } from "@angular/material";

@Component({
  selector: 'app-ag-grid-material-datepicker-editor',
  template: `
    <md-input-container>
      <input mdInput [mdDatepicker]="picker" [(ngModel)]="value">
      <md-datepicker-toggle mdSuffix [for]="picker"></md-datepicker-toggle>
    </md-input-container>
    <md-datepicker #picker (selectedChanged)="onSelectChange(e)"></md-datepicker>
  `, 
  styles: [
      `
.mat-input-container {
    margin-top: -16px;
}

      `
  ]
})
export class AgGridMaterialDatepickerEditorComponent implements OnInit, AgEditorComponent {
    columnWidth: string;
    params: ICellEditorParams;
    private value: string;
    @ViewChild('picker', {read: MdDatepicker}) picker: MdDatepicker<Date>;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.picker.open();
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

    agInit(params: any): void {
        this.params = params;
        this.value = params.value;
    }

    getValue(): string {
        return this.value;
    }

    onSelectChange(e): void {
        setTimeout(function() {
            this.params.stopEditing()
        }.bind(this));
    }

}
