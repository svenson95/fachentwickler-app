import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { AuthService } from '@services/auth.service';
import { DataService } from '@services/data.service';

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
    private dataService: DataService,
    private snackBar: MatSnackBar,
  ) {}

  public deleteRequest(): void {
    this.isLoadingDelete = true;
    this.dataService.deleteImageById(this.data.postId).subscribe(
      // success
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Bild erfolgreich gelöscht',
        });
      },
      (error) => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler beim Löschen: ${error}`,
        });
      },
      // finally
      () => {
        this.isLoadingDelete = undefined;
        this.dialogRef.close(true);
      },
    );
  }
}
