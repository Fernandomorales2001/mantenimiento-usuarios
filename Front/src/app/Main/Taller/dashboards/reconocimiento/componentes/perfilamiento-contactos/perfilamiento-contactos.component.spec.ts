import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilamientoContactosComponent } from './perfilamiento-contactos.component';

describe('PerfilamientoContactosComponent', () => {
  let component: PerfilamientoContactosComponent;
  let fixture: ComponentFixture<PerfilamientoContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilamientoContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilamientoContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
