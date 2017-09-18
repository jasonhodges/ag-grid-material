import { Component } from '@angular/core';
import { GridOptions } from "ag-grid/main";
import { AgGridMaterialTextEditorComponent } from "./ag-grid-material-text-editor/ag-grid-material-text-editor.component";
import { AgGridMaterialSelectEditorComponent } from "./ag-grid-material-select-editor/ag-grid-material-select-editor.component";
import { AgGridMaterialDatepickerEditorComponent } from "./ag-grid-material-datepicker-editor/ag-grid-material-datepicker-editor.component";
import { AgGridMaterialCheckboxCellComponent } from "./ag-grid-material-checkbox-cell/ag-grid-material-checkbox-cell.component";
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    private gridOptions:GridOptions = <GridOptions>{
        rowSelection: 'multiple',
        suppressRowClickSelection: true
    };
    public rowData:any[];
    private columnDefs:any[];


    constructor() {
        this.columnDefs = [
            {
                headerName: ' ',
                cellRendererFramework: AgGridMaterialCheckboxCellComponent,
                width: 80
            },
            {
                headerName: "Make", 
                field: "make", 
                editable: true, 
                cellEditorFramework: AgGridMaterialSelectEditorComponent ,
                cellEditorParams: {values: [ 'Toyota', 'Ford', 'Porsche' ]} 
            },
            {
                headerName: "Model", 
                field: "model", 
                editable: true, 
                cellEditorFramework: AgGridMaterialTextEditorComponent 
            },
            {   headerName: "Price", 
                field: "price"
            },
            {
                headerName: "Made on", 
                field: "madeOn", 
                editable: true, 
                cellEditorFramework: AgGridMaterialDatepickerEditorComponent,
                valueFormatter: (data) => moment(data.value).format('L')
            },
        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000, madeOn: new Date(2006, 10, 25)},
            {make: "Ford", model: "Mondeo", price: 32000,  madeOn: new Date(2016, 2, 13)},
            {make: "Porsche", model: "Boxter", price: 72000, madeOn: new Date(2010, 7, 10)}
        ]
    }
}
