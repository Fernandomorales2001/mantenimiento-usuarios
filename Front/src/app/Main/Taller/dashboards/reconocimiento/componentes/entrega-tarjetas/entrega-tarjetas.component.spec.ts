import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaTarjetasComponent } from './entrega-tarjetas.component';

describe('EntregaTarjetasComponent', () => {
  let component: EntregaTarjetasComponent;
  let fixture: ComponentFixture<EntregaTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
