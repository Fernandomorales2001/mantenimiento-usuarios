import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformacionCcComponent } from './modal-informacion-cc.component';

describe('ModalInformacionCcComponent', () => {
  let component: ModalInformacionCcComponent;
  let fixture: ComponentFixture<ModalInformacionCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInformacionCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformacionCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
