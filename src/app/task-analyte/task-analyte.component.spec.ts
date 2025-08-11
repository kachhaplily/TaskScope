import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAnalyteComponent } from './task-analyte.component';

describe('TaskAnalyteComponent', () => {
  let component: TaskAnalyteComponent;
  let fixture: ComponentFixture<TaskAnalyteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAnalyteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAnalyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
