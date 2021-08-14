import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDashboardComponent } from './productos-dashboard.component';

describe('ProductosDashboardComponent', () => {
  let component: ProductosDashboardComponent;
  let fixture: ComponentFixture<ProductosDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
