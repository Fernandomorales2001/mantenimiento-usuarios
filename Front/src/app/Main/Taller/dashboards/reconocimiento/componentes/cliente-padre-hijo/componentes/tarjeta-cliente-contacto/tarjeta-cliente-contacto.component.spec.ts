import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaClienteContactoComponent } from './tarjeta-cliente-contacto.component';

describe('TarjetaClienteContactoComponent', () => {
  let component: TarjetaClienteContactoComponent;
  let fixture: ComponentFixture<TarjetaClienteContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaClienteContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaClienteContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
