import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// material components
import {MdIconModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdToolbarModule, MdCardModule, MdSelectModule} from '@angular/material';

import {AgGridModule} from "ag-grid-angular/main";
import { AgGridMaterialTextEditorComponent } from './ag-grid-material-text-editor/ag-grid-material-text-editor.component';
import { AgGridMaterialSelectEditorComponent } from './ag-grid-material-select-editor/ag-grid-material-select-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridMaterialTextEditorComponent,
    AgGridMaterialSelectEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdSelectModule,
    AgGridModule.withComponents([
        AgGridMaterialTextEditorComponent,
        AgGridMaterialSelectEditorComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
