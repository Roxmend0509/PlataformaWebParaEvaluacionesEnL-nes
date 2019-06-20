import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExamComponent } from './lista-exam.component';

describe('ListaExamComponent', () => {
  let component: ListaExamComponent;
  let fixture: ComponentFixture<ListaExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
