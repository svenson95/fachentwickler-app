import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';
import { delay } from 'rxjs/operators';

import { ImageData } from '../../models/image-data';
import { UserRole } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';
import { DeleteImageDialogComponent } from '../delete-image-dialog/delete-image-dialog.component';

@Component({
  selector: 'app-image-manager-dialog',
  templateUrl: './image-manager-dialog.component.html'
})
export class ImageManagerDialogComponent implements OnInit {

  UserRole = UserRole;

  imagesCount: number;
  page = 0;
  selectedImage: ImageData;
  dropzoneFile: File[] = [];
  lastImages: ImageData[] = [];
  isLoading: boolean;
  isUploadingImage: boolean;
  isLoadMoreImages: boolean;

  @ViewChild('fileInput') fileInput;

  constructor(public authService: AuthService,
              private dataService: DataService,
              private loadingService: LoadingService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar
  ) {
    this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );

    this.dataService.getAllImagesLength().subscribe(
        (data) => {
          this.imagesCount = data;
        },
        (error) => {
          console.log('Error while GET images count', error);
        }
    );
  }

  ngOnInit(): void {
    this.initialImages();
  }

  onSelect(event): void {
    this.dropzoneFile = [...event.addedFiles];
  }

  onRemove(event): void {
    this.dropzoneFile.splice(this.dropzoneFile.indexOf(event), 1);
  }

  isEmpty(files): boolean {
    return files.length === 0;
  }

  initialImages(): void {
    this.dataService.getMultipleImages().subscribe(
      (data) => {
        this.lastImages = data;
      },
      (error) => {
        console.log('Error while GET post', error);
      }
    );
  }

  encode(image): string {
    const dataStrings = image.chunks.map((chunk: any) => chunk.data);
    return 'data:image/png;base64,' + dataStrings.join('');
  }

  sendImage(event): void {
    event.preventDefault();
    this.isUploadingImage = true;
    this.dataService.uploadImage(this.dropzoneFile[0]).subscribe(
        async (response) => {
          await this.dataService.getImageById(response.file.id).subscribe(
              (image) => {
                this.lastImages.unshift(image);
                this.dropzoneFile = [];
                this.selectedImage = image;
              }, (err) => {
                console.log('Get image by id failed');
                console.log(err);
              }, () => {
                this.isUploadingImage = false;
              }
          );
        },
        (error) => {
          console.log('Uploading new image failed');
          console.log(error);
        }
    );
  }

  loadMore(): void {
    this.page++;
    this.isLoadMoreImages = true;
    this.dataService.getMultipleImages(this.page).subscribe(data => {
      this.lastImages = [...this.lastImages, ...data];
      this.isLoadMoreImages = false;
    });
  }

  deleteImage(id: string): void {
    const dialogRef = this.dialog.open(DeleteImageDialogComponent, {
      restoreFocus: true,
      panelClass: 'delete-image-modal',
      autoFocus: false,
      data: { postId: id }
    });
    dialogRef.afterClosed().subscribe((confirmed: any) => {
      if (confirmed) {
        this.lastImages = this.lastImages.filter(el => el.file._id !== id);
        this.selectedImage = undefined;

        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Bild erfolgreich gelöscht'
        });
      }
    });
  }

  formatBytes(bytes, decimals = 1): string {
    if (bytes === 0) { return '0 Bytes'; }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
