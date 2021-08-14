import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionhoraComponent } from './facturacionhora.component';

describe('FacturacionhoraComponent', () => {
  let component: FacturacionhoraComponent;
  let fixture: ComponentFixture<FacturacionhoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacionhoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacionhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
