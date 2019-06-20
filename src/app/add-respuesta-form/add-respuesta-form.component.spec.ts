import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRespuestaFormComponent } from './add-respuesta-form.component';

describe('AddRespuestaFormComponent', () => {
  let component: AddRespuestaFormComponent;
  let fixture: ComponentFixture<AddRespuestaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRespuestaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRespuestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
