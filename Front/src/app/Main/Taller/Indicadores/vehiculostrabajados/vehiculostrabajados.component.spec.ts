import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculostrabajadosComponent } from './vehiculostrabajados.component';

describe('VehiculostrabajadosComponent', () => {
  let component: VehiculostrabajadosComponent;
  let fixture: ComponentFixture<VehiculostrabajadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculostrabajadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculostrabajadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
