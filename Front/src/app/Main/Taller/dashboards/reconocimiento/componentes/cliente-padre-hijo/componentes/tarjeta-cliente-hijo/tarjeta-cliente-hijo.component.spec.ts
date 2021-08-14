import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaClienteHijoComponent } from './tarjeta-cliente-hijo.component';

describe('TarjetaClienteHijoComponent', () => {
  let component: TarjetaClienteHijoComponent;
  let fixture: ComponentFixture<TarjetaClienteHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaClienteHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaClienteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
