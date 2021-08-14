import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsuariosAppComponent } from './modal-usuarios-app.component';

describe('ModalUsuariosAppComponent', () => {
  let component: ModalUsuariosAppComponent;
  let fixture: ComponentFixture<ModalUsuariosAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUsuariosAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsuariosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
