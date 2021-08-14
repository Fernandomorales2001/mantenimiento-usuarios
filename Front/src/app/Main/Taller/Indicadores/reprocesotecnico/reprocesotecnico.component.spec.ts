import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprocesotecnicoComponent } from './reprocesotecnico.component';

describe('ReprocesotecnicoComponent', () => {
  let component: ReprocesotecnicoComponent;
  let fixture: ComponentFixture<ReprocesotecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprocesotecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprocesotecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
