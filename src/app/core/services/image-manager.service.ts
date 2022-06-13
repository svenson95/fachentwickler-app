import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ImageManagerService {
  constructor(private dataService: DataService, private snackBar: MatSnackBar) {}

  public deleteImageFromDB(postId: string, callback: Function): void {
    this.dataService.deleteImageById(postId).subscribe(
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
        callback();
      },
    );
  }

  public uploadImageToDB(image: File, cb1: Function, cb2: Function): void {
    this.dataService.uploadImage(image).subscribe((response) => {
      this.dataService.getImageById(response.file.id).subscribe(
        (uploadedImage) => {
          cb1(uploadedImage);
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log('Get image by id failed', err);
        },
        () => {
          cb2();
        },
      );
    });
  }
}
