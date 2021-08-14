import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAppComponent } from './usuarios-app.component';

describe('UsuariosAppComponent', () => {
  let component: UsuariosAppComponent;
  let fixture: ComponentFixture<UsuariosAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
