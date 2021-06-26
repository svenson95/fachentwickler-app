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
  selector: 'fe-image-manager-dialog',
  templateUrl: './image-manager-dialog.component.html'
})
export class ImageManagerDialogComponent implements OnInit {

  UserRole = UserRole;
  dropzoneFile: File[] = [];
  isUploadingImage: boolean;
  isLoadingImages: boolean;

  images: ImageData[] = [];
  currentPage = 0;
  allImagesLength: number;
  isSortedAscending = false;
  selectedImage: ImageData;

  @ViewChild('fileInput') fileInput;

  constructor(public authService: AuthService,
              private dataService: DataService,
              private loadingService: LoadingService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar
  ) {
    this.dataService.getAllImagesLength().subscribe(
        (data) => {
          this.allImagesLength = data;
        },
        (error) => {
          console.log('Error while GET images count', error);
        }
    );
  }

  ngOnInit(): void {
    this.getImages();
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

  encode(image): string {
    const dataStrings = image.chunks.map((chunk: any) => chunk.data);
    return 'data:image/png;base64,' + dataStrings.join('');
  }

  uploadImage(event): void {
    event.preventDefault();
    this.isUploadingImage = true;
    this.dataService.uploadImage(this.dropzoneFile[0]).subscribe(
        async (response) => {
          await this.dataService.getImageById(response.file.id).subscribe(
              (image) => {
                this.images.unshift(image);
                this.dropzoneFile = [];
                this.selectedImage = image;
                this.allImagesLength += 1;
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

  deleteImage(id: string): void {
    const dialogRef = this.dialog.open(DeleteImageDialogComponent, {
      restoreFocus: true,
      panelClass: 'delete-image-modal',
      autoFocus: false,
      data: { postId: id }
    });
    dialogRef.afterClosed().subscribe((confirmed: any) => {
      if (confirmed) {
        this.images = this.images.filter(el => el.file._id !== id);
        this.selectedImage = undefined;
        this.allImagesLength -= 1;

        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 2500,
          data: 'Bild erfolgreich gelöscht'
        });
      }
    });
  }

  formatBytes(bytes, decimals = 1): string {
    if (bytes === null) { return ''; }
    if (bytes === 0) { return '0 Bytes'; }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  setIsLoadingImage(value: boolean): void {
    this.isLoadingImages = value;
  }

  loadImages(pageNumber: number): void {
    this.loadPage(pageNumber);
  }

  showPreview(): void {
    // TODO: install image-viewer package (fullscreen)
  }

  loadPage(page: number): void {
    if (this.isLoadingImages) {
      return;
    }

    this.currentPage = page;
    this.getImages(this.currentPage);
  }

  changeSorting(): void {
    if (this.isLoadingImages) {
      return;
    }
    this.isSortedAscending = !this.isSortedAscending;
    this.currentPage = 0;
    this.getImages();
  }

  getImages(page = 0): void {
    this.isLoadingImages = true;

    this.dataService.getMultipleImages(page, undefined, this.isSortedAscending ? 'ascending' : 'descending').subscribe(data => {
      this.images = data;
      this.isLoadingImages = false;

      if (!this.selectedImage) {
        this.selectedImage = data[0];
      }
    });
  }
}
