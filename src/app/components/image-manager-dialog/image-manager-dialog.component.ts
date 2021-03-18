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
export class ImageManagerDialogComponent implements OnInit, OnDestroy, AfterViewInit {

  images = [];
  isLoading: boolean;
  loadingSubscription: Subscription;

  @ViewChild('fileInput') fileInput;

  constructor(public authService: AuthService,
              private dataService: DataService,
              private loadingService: LoadingService,
              private elementRef: ElementRef,
  ) {
    this.loadingSubscription = this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );
  }

  ngOnInit(): void {
    this.getImages();
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.fileInput.nativeElement.blur();
  }

  isEmpty(event): boolean {
    return event.files.length <= 0;
  }

  getImages(): void {
    this.dataService.getAllImages().subscribe(
      (data) => {
        console.log('RESPONSE', data);
        data.forEach(chunk => {
          if (this.images.includes(el => el.files_id === chunk.files_id)) {
            this.images.find(el => el.files_id === chunk.files_id).chunks.push(chunk);
          } else {
            this.images.push({ files_id: chunk.files_id, chunks: [chunk] });
          }
        });

        this.images.forEach(image => {
          if (image.chunks.length === 0) {
            console.log('EMPTY IMAGE FILE', image);
          }
        });
      },
      (error) => {
        console.log('Error while GET post', error);
      }
    );
  }

  loadImage(image): string {
    const dataStrings = image.chunks.map((chunk: any) => chunk.data);
    return 'data:image/png;base64,' + dataStrings.join('');
  }

  sendImage(event): void {
    event.preventDefault();
    console.log(event);

    this.dataService.uploadImage(event.target[0].files[0]).then(async response => {
      if (response) {
        // editImageId(response.id);
      } else {
        console.log('Error while uploading new image');
      }
    });
  }

}
