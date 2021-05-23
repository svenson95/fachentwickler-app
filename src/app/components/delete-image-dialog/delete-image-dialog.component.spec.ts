import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteImageDialogComponent } from './delete-image-dialog.component';

describe('DeleteImageDialogComponent', () => {
  let component: DeleteImageDialogComponent;
  let fixture: ComponentFixture<DeleteImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteImageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
