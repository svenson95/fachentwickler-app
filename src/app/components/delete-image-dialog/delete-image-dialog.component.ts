import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-delete-image-dialog',
  templateUrl: './delete-image-dialog.component.html',
  styleUrls: ['./delete-image-dialog.component.scss']
})
export class DeleteImageDialogComponent implements OnInit {

  isLoadingDelete: boolean;

  constructor(public authService: AuthService,
              private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DeleteImageDialogComponent>,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  deleteRequest(): void {
    this.isLoadingDelete = true;
    this.dataService.deleteImageById(this.data.postId).subscribe(
        (response) => {
          this.dialogRef.close(true);
        }, (error) => {
          console.log('Delete image failed', error);
          this.dialogRef.close(false);
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: 'Fehler beim Löschen: ' + error
          });
        }, () => {
          this.isLoadingDelete = false;
        }
    );
  }

}
