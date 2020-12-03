import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostElementComponent } from './post-element.component';

describe('PostElementComponent', () => {
  let component: PostElementComponent;
  let fixture: ComponentFixture<PostElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
