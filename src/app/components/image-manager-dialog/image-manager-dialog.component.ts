import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import {delay} from 'rxjs/operators';
import {LoadingService} from '../../services/loading.service';
import {Subscription} from 'rxjs';

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

    this.dataService.getImagesCount().subscribe(
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
    this.dataService.getImages().subscribe(
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
    event.preventDefault();

    this.dataService.uploadImage(event.target[0].files[0]).then(async response => {
      if (response) {
        // editImageId(response.id);
      } else {
        console.log('Error while uploading new image');
      }
    });
  }

  loadMore(): void {
    this.page++;
    this.dataService.getImages(this.page).subscribe(data => {
      this.images = [...this.images, ...data];
    });
  }

}
