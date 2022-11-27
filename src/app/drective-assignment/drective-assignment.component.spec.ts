import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrectiveAssignmentComponent } from './drective-assignment.component';

describe('DrectiveAssignmentComponent', () => {
  let component: DrectiveAssignmentComponent;
  let fixture: ComponentFixture<DrectiveAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrectiveAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrectiveAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
