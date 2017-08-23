import { Component } from '@angular/core';
import { GridOptions } from "ag-grid/main";
import { AgGridMaterialTextEditorComponent } from "./ag-grid-material-text-editor/ag-grid-material-text-editor.component";
import { AgGridMaterialSelectEditorComponent } from "./ag-grid-material-select-editor/ag-grid-material-select-editor.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    private gridOptions:GridOptions = <GridOptions>{};
    public rowData:any[];
    private columnDefs:any[];


    constructor() {
        this.columnDefs = [
            {headerName: "Make", field: "make", editable: true, cellEditorFramework: AgGridMaterialSelectEditorComponent },
            {headerName: "Model", field: "model", editable: true, cellEditorFramework: AgGridMaterialTextEditorComponent },
            {headerName: "Price", field: "price"}
        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]
    }
}
