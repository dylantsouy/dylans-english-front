import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotedComponent } from './noted.component';

describe('NotedsComponent', () => {
  let component: NotedComponent;
  let fixture: ComponentFixture<NotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
