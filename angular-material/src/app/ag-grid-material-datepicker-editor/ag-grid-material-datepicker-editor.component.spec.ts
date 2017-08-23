import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridMaterialDatepickerEditorComponent } from './ag-grid-material-datepicker-editor.component';

describe('AgGridMaterialDatepickerEditorComponent', () => {
  let component: AgGridMaterialDatepickerEditorComponent;
  let fixture: ComponentFixture<AgGridMaterialDatepickerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridMaterialDatepickerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridMaterialDatepickerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
