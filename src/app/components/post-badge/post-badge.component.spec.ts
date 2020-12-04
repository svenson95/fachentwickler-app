import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBadgeComponent } from './post-badge.component';

describe('PostBadgeComponent', () => {
  let component: PostBadgeComponent;
  let fixture: ComponentFixture<PostBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
