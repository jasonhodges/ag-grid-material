import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridMaterialSelectEditorComponent } from './ag-grid-material-select-editor.component';

describe('AgGridMaterialSelectEditorComponent', () => {
  let component: AgGridMaterialSelectEditorComponent;
  let fixture: ComponentFixture<AgGridMaterialSelectEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridMaterialSelectEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridMaterialSelectEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
