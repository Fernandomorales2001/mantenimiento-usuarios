import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesDeliveryComponent } from './transportes-delivery.component';

describe('TransportesDeliveryComponent', () => {
  let component: TransportesDeliveryComponent;
  let fixture: ComponentFixture<TransportesDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportesDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportesDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
