import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImageData, ImageFile } from '@models/image-data';
import { UserRole } from '@models/user';
import { AuthService } from '@services/auth.service';
import { DataService } from '@services/data.service';
import { ImageManagerService } from '@services/image-manager.service';

import { DeleteImageDialogComponent } from './delete-image-dialog/delete-image-dialog.component';

@Component({
  selector: 'fe-image-manager-dialog',
  templateUrl: './image-manager-dialog.component.html',
  styleUrls: ['./image-manager-dialog.component.scss'],
})
export class ImageManagerDialogComponent {
  @ViewChild('fileInput') public fileInput;

  public chunksMapping = {
    '=0': 'Keine Chunks',
    '=1': '1 Chunk',
    other: '# Chunks',
  };

  public UserRole = UserRole;

  public dropzoneFile: File[] = [];

  public isUploadingImage: boolean;

  public isLoadingImages: boolean;

  public images: ImageFile[] = [];

  public currentPage = 0;

  public allImagesLength: number;

  public isSortedAscending = false;

  public selectedImage: ImageFile;

  public selectedImageData: ImageData;

  constructor(
    public authService: AuthService,
    private dataService: DataService,
    private imageManager: ImageManagerService,
    private dialog: MatDialog,
  ) {
    this.loadAllImagesCount();
    this.getImages();
  }

  // eslint-disable-next-line class-methods-use-this
  public trackByFn(index, item): any {
    return item.id;
  }

  public onSelect(event): void {
    this.dropzoneFile = [...event.addedFiles];
  }

  public onRemove(event): void {
    this.dropzoneFile.splice(this.dropzoneFile.indexOf(event), 1);
  }

  // eslint-disable-next-line class-methods-use-this
  public isEmpty(files): boolean {
    return files.length === 0;
  }

  // eslint-disable-next-line class-methods-use-this
  public encode(image): string {
    const dataStrings = image.chunks.map((chunk: any) => chunk.data);
    return `data:image/png;base64,${dataStrings.join('')}`;
  }

  public uploadImage(event): void {
    event.preventDefault();
    this.isUploadingImage = true;

    this.imageManager.uploadImageToDB(
      this.dropzoneFile[0],
      (image: ImageData) => {
        this.images.unshift(image.file);
        this.images.pop();
        this.dropzoneFile = [];
        this.selectedImage = image.file;
        this.selectedImageData = image;
        this.allImagesLength += 1;
      },
      () => {
        this.isUploadingImage = false;
      },
    );
  }

  public deleteImage(id: string): void {
    const dialogRef = this.dialog.open(DeleteImageDialogComponent, {
      restoreFocus: true,
      panelClass: 'delete-image-modal',
      autoFocus: false,
      data: { postId: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.selectedImage = undefined;
        this.selectedImageData = undefined;
        this.getImages();
        this.allImagesLength -= 1;
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public formatBytes(bytes, decimals = 1): string {
    if (bytes === null) {
      return '';
    }
    if (bytes === 0) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
  }

  public loadImages(pageNumber: any): void {
    this.loadPage(pageNumber);
  }

  public changeSorting(): void {
    if (this.isLoadingImages) {
      return;
    }
    this.isSortedAscending = !this.isSortedAscending;
    this.currentPage = 0;
    this.getImages();
  }

  public setSelectedImage(image: ImageFile): void {
    this.selectedImageData = undefined;
    this.selectedImage = image;
    this.dataService.getImageById(image._id).subscribe((value) => {
      this.selectedImageData = value;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public showPreview(): void {
    // TODO: install image-viewer package (fullscreen)
  }

  private loadAllImagesCount(): void {
    this.dataService.getAllImagesLength().subscribe((data) => {
      this.allImagesLength = data;
    });
  }

  private loadPage(page: number): void {
    if (this.isLoadingImages) {
      return;
    }

    this.currentPage = page;
    this.getImages(this.currentPage);
  }

  private getImages(page = null): void {
    this.isLoadingImages = true;

    this.dataService
      .getMultipleImages(page || 0, undefined, this.isSortedAscending ? 'ascending' : 'descending')
      .subscribe((data) => {
        this.images = data;
        this.isLoadingImages = false;

        if (page === null) {
          // eslint-disable-next-line prefer-destructuring
          this.selectedImage = data[0];
          this.dataService.getImageById(data[0]._id).subscribe((value) => {
            this.selectedImageData = value;
          });
        }
      });
  }
}
