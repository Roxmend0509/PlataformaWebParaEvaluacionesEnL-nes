import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddStudentExamComponent } from './form-add-student-exam.component';

describe('FormAddStudentExamComponent', () => {
  let component: FormAddStudentExamComponent;
  let fixture: ComponentFixture<FormAddStudentExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddStudentExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddStudentExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
