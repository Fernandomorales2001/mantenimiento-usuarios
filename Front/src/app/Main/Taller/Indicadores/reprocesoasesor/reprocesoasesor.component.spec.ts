import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprocesoasesorComponent } from './reprocesoasesor.component';

describe('ReprocesoasesorComponent', () => {
  let component: ReprocesoasesorComponent;
  let fixture: ComponentFixture<ReprocesoasesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprocesoasesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprocesoasesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
