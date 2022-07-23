import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '@core-components/snackbar/snackbar.component';
import { Message } from '@models/message';

import { DataService } from './data.service';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class ImageManagerService {
  constructor(private dataService: DataService, private snackBar: MatSnackBar, private logging: LoggingService) {}

  public deleteImageFromDB(postId: string, onComplete: Function): void {
    this.dataService.deleteImageById(postId).subscribe(
      () => {
        this.logging.debug(new Message(`Image deleted successfully`));
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Bild erfolgreich gelöscht',
        });
      },
      (error) => {
        this.logging.error(new Message(`Delete image failed: ${error}`));
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: `Fehler beim Löschen: ${error}`,
        });
      },
      () => {
        onComplete();
      },
    );
  }

  public uploadImageToDB(image: File, onSuccess: Function, onComplete: Function): void {
    this.dataService.uploadImage(image).subscribe((response) => {
      this.logging.debug(new Message(`Uploaded Image`, response));
      this.dataService.getImageById(response.file.id).subscribe(
        (uploadedImage) => {
          this.logging.debug(new Message(`Get image by id: ${uploadedImage}`));
          onSuccess(uploadedImage);
        },
        (err) => {
          this.logging.error(new Message(`Get image by id failed: ${err}`));
        },
        () => {
          onComplete();
        },
      );
    });
  }
}
