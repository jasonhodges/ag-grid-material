import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridMaterialCheckboxCellComponent } from './ag-grid-material-checkbox-cell.component';

describe('AgGridMaterialCheckboxCellComponent', () => {
  let component: AgGridMaterialCheckboxCellComponent;
  let fixture: ComponentFixture<AgGridMaterialCheckboxCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridMaterialCheckboxCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridMaterialCheckboxCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
