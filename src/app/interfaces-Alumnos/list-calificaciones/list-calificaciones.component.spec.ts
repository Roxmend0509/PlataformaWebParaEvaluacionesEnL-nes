import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalificacionesComponent } from './list-calificaciones.component';

describe('ListCalificacionesComponent', () => {
  let component: ListCalificacionesComponent;
  let fixture: ComponentFixture<ListCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
