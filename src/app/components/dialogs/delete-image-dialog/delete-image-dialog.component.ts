import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../app-common/snackbar/snackbar.component';

import { AuthService } from '../../../services/auth/auth.service';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'fe-delete-image-dialog',
  templateUrl: './delete-image-dialog.component.html',
  styleUrls: ['./delete-image-dialog.component.scss']
})
export class DeleteImageDialogComponent implements OnInit {

  isLoadingDelete: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              public dialogRef: MatDialogRef<DeleteImageDialogComponent>,
              public authService: AuthService,
              private dataService: DataService,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  deleteRequest(): void {
    this.isLoadingDelete = true;
    this.dataService.deleteImageById(this.data.postId).subscribe(
      (response) => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Bild erfolgreich gelöscht'
        });
      }, (error) => {
        console.log('Delete image failed', error);
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler beim Löschen: ' + error
        });
      }, () => {
        this.isLoadingDelete = undefined;
        this.dialogRef.close();
      }
    );
  }

}
