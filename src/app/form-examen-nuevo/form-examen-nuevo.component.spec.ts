import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamenNuevoComponent } from './form-examen-nuevo.component';

describe('FormExamenNuevoComponent', () => {
  let component: FormExamenNuevoComponent;
  let fixture: ComponentFixture<FormExamenNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExamenNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExamenNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
