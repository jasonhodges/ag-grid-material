import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridMaterialTextEditorComponent } from './ag-grid-material-text-editor.component';

describe('AgGridMaterialTextEditorComponent', () => {
  let component: AgGridMaterialTextEditorComponent;
  let fixture: ComponentFixture<AgGridMaterialTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridMaterialTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridMaterialTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
