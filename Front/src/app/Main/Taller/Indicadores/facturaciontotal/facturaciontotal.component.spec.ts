import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaciontotalComponent } from './facturaciontotal.component';

describe('FacturaciontotalComponent', () => {
  let component: FacturaciontotalComponent;
  let fixture: ComponentFixture<FacturaciontotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaciontotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaciontotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
