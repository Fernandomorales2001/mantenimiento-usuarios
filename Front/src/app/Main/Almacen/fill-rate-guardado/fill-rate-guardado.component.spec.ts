import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillRateGuardadoComponent } from './fill-rate-guardado.component';

describe('FillRateGuardadoComponent', () => {
  let component: FillRateGuardadoComponent;
  let fixture: ComponentFixture<FillRateGuardadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillRateGuardadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillRateGuardadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
