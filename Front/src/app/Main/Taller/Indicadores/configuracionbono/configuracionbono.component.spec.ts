import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionbonoComponent } from './configuracionbono.component';

describe('ConfiguracionbonoComponent', () => {
  let component: ConfiguracionbonoComponent;
  let fixture: ComponentFixture<ConfiguracionbonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionbonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
