import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageManagerDialogComponent } from './image-manager-dialog.component';

describe('ImageManagerDialogComponent', () => {
  let component: ImageManagerDialogComponent;
  let fixture: ComponentFixture<ImageManagerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageManagerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageManagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
