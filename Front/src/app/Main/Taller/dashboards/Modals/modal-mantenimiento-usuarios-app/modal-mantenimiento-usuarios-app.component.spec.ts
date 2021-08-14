import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMantenimientoUsuariosAppComponent } from './modal-mantenimiento-usuarios-app.component';

describe('ModalMantenimientoUsuariosAppComponent', () => {
  let component: ModalMantenimientoUsuariosAppComponent;
  let fixture: ComponentFixture<ModalMantenimientoUsuariosAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMantenimientoUsuariosAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMantenimientoUsuariosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
