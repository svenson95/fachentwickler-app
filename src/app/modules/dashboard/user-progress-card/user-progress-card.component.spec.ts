import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProgressCardComponent } from './user-progress-card.component';

describe('UserProgressCardComponent', () => {
  let component: UserProgressCardComponent;
  let fixture: ComponentFixture<UserProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProgressCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
