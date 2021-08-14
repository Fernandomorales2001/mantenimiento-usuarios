import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCountComponent } from './productos-count.component';

describe('ProductosCountComponent', () => {
  let component: ProductosCountComponent;
  let fixture: ComponentFixture<ProductosCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
