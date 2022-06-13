import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from '@services/auth.service';
import { ImageManagerService } from '@services/image-manager.service';

@Component({
  selector: 'fe-delete-image-dialog',
  templateUrl: './delete-image-dialog.component.html',
  styleUrls: ['./delete-image-dialog.component.scss'],
})
export class DeleteImageDialogComponent {
  public isLoadingDelete: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<DeleteImageDialogComponent>,
    public authService: AuthService,
    private imageManager: ImageManagerService,
  ) {}

  public deleteImage(): void {
    this.isLoadingDelete = true;
    this.imageManager.deleteImageFromDB(this.data.postId, () => {
      this.isLoadingDelete = undefined;
      this.dialogRef.close(true);
    });
  }
}
