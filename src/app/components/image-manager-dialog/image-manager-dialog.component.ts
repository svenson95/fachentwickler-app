import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { delay } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-image-manager-dialog',
  templateUrl: './image-manager-dialog.component.html',
  styleUrls: ['./image-manager-dialog.component.scss']
})
export class ImageManagerDialogComponent implements OnInit, AfterViewInit {

  images = [];
  imagesCount: number;
  page = 0;
  isLoading: boolean;

  @ViewChild('fileInput') fileInput;

  constructor(public authService: AuthService,
              private dataService: DataService,
              private loadingService: LoadingService
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

  ngAfterViewInit(): void {
    this.fileInput.nativeElement.blur();
  }

  isEmpty(event): boolean {
    return event.files.length <= 0;
  }

  initialImages(): void {
    this.dataService.getMultipleImages().subscribe(
      (data) => {
        this.images = data;
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
    // this.dataService.uploadImage(event.target[0].files[0]).subscribe(
    //     (response) => {
    //       // editImageId(response.id);
    //       // this.images.push()
    //     },
    //     (error) => {
    //       console.log('Uploading new image failed. Try again');
    //       console.log(error);
    //     }
    // );
  }

  loadMore(): void {
    this.page++;
    this.dataService.getMultipleImages(this.page).subscribe(data => {
      this.images = [...this.images, ...data];
    });
  }

}
