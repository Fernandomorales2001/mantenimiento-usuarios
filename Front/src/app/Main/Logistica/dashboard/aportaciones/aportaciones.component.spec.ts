import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AportacionesComponent } from './aportaciones.component';

describe('AportacionesComponent', () => {
  let component: AportacionesComponent;
  let fixture: ComponentFixture<AportacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AportacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AportacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
