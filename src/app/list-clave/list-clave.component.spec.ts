import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClaveComponent } from './list-clave.component';

describe('ListClaveComponent', () => {
  let component: ListClaveComponent;
  let fixture: ComponentFixture<ListClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
