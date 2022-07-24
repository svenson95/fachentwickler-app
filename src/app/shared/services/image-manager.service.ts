import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ImageManagerService {
  constructor(private dataService: DataService, private snackBar: MatSnackBar) {}

  public deleteImageFromDB(postId: string, onComplete: Function): void {
    this.dataService.deleteImageById(postId).subscribe(
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Bild gelöscht',
        });
      },
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Bild löschen fehlgeschlagen`,
        });
      },
      () => {
        onComplete();
      },
    );
  }

  public uploadImageToDB(image: File, onSuccess: Function, onComplete: Function): void {
    this.dataService.uploadImage(image).subscribe((response) => {
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        data: 'Bild hochgeladen',
      });
      this.dataService.getImageById(response.file.id).subscribe(
        (uploadedImage) => {
          onSuccess(uploadedImage);
        },
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: `Bild hochladen fehlgeschlagen`,
          });
        },
        () => {
          onComplete();
        },
      );
    });
  }
}
