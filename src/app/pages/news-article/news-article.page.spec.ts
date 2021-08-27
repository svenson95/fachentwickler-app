import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticlePage } from './news-article.page';

describe('NewsArticlePage', () => {
  let component: NewsArticlePage;
  let fixture: ComponentFixture<NewsArticlePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticlePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
