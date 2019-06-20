import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveQuestionComponent } from './clave-question.component';

describe('ClaveQuestionComponent', () => {
  let component: ClaveQuestionComponent;
  let fixture: ComponentFixture<ClaveQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaveQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaveQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
