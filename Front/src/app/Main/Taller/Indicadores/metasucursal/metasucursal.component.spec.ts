import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasucursalComponent } from './metasucursal.component';

describe('MetasucursalComponent', () => {
  let component: MetasucursalComponent;
  let fixture: ComponentFixture<MetasucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
