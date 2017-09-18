import "./styles.scss";
import {Grid} from "ag-grid";


// by default, material uses 8px as a base unit for its grid. The logic below overrides that
var gridSize = 4;
var rowHeight = gridSize * 6;
var headerHeight = gridSize * 7;

var rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
]

var columnDefs = [
    {headerName: "Make", field: "make", 
        checkboxSelection: true,
        headerCheckboxSelection: true
    },
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
] 


var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    rowSelection: 'multiple',

    headerHeight: headerHeight,
    floatingFiltersHeight: headerHeight,
    rowHeight: rowHeight
}

new Grid(document.querySelector('#myGrid'), gridOptions);
