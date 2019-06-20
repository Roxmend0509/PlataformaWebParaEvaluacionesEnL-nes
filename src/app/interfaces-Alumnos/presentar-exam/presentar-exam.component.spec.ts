import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentarExamComponent } from './presentar-exam.component';

describe('PresentarExamComponent', () => {
  let component: PresentarExamComponent;
  let fixture: ComponentFixture<PresentarExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentarExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentarExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
