import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarLineaComponent } from './consultar-linea.component';

describe('ConsultarLineaComponent', () => {
  let component: ConsultarLineaComponent;
  let fixture: ComponentFixture<ConsultarLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
