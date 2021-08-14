import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumplimientotareasComponent } from './cumplimientotareas.component';

describe('CumplimientotareasComponent', () => {
  let component: CumplimientotareasComponent;
  let fixture: ComponentFixture<CumplimientotareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumplimientotareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumplimientotareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
