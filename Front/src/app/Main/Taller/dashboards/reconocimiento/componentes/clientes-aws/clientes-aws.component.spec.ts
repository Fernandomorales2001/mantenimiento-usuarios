import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAwsComponent } from './clientes-aws.component';

describe('ClientesAwsComponent', () => {
  let component: ClientesAwsComponent;
  let fixture: ComponentFixture<ClientesAwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesAwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
