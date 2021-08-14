import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculostrabajadosdiariosComponent } from './vehiculostrabajadosdiarios.component';

describe('VehiculostrabajadosdiariosComponent', () => {
  let component: VehiculostrabajadosdiariosComponent;
  let fixture: ComponentFixture<VehiculostrabajadosdiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculostrabajadosdiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculostrabajadosdiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
