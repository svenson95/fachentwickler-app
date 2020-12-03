import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFilesComponent } from './teacher-files.component';

describe('TeacherFilesComponent', () => {
  let component: TeacherFilesComponent;
  let fixture: ComponentFixture<TeacherFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
