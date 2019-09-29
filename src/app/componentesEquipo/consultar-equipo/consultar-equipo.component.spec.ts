import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEquipoComponent } from './consultar-equipo.component';

describe('ConsultarEquipoComponent', () => {
  let component: ConsultarEquipoComponent;
  let fixture: ComponentFixture<ConsultarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
