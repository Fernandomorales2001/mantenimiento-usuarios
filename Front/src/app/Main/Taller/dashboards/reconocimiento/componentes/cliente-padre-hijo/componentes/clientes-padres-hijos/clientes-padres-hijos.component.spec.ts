import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPadresHijosComponent } from './clientes-padres-hijos.component';

describe('ClientesPadresHijosComponent', () => {
  let component: ClientesPadresHijosComponent;
  let fixture: ComponentFixture<ClientesPadresHijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPadresHijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPadresHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
