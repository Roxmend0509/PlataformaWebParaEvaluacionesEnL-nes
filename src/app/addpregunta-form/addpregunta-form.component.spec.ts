import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpreguntaFormComponent } from './addpregunta-form.component';

describe('AddpreguntaFormComponent', () => {
  let component: AddpreguntaFormComponent;
  let fixture: ComponentFixture<AddpreguntaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpreguntaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpreguntaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
