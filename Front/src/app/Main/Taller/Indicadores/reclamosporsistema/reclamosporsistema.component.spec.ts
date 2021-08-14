import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosporsistemaComponent } from './reclamosporsistema.component';

describe('ReclamosporsistemaComponent', () => {
  let component: ReclamosporsistemaComponent;
  let fixture: ComponentFixture<ReclamosporsistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamosporsistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamosporsistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
