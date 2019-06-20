import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExamenAlumnosComponent } from './lista-examen-alumnos.component';

describe('ListaExamenAlumnosComponent', () => {
  let component: ListaExamenAlumnosComponent;
  let fixture: ComponentFixture<ListaExamenAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExamenAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExamenAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
