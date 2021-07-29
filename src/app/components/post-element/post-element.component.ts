import { Component, Input, OnInit } from '@angular/core';

import { PostElement } from '../../models/post-element';
import { ElementType } from '../../models/element-type';
import { ImageChunk } from '../../models/image-data';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-post-element',
  templateUrl: './post-element.component.html'
})
export class PostElementComponent implements OnInit {

  @Input() element: PostElement;

  image: boolean | string = false;
  ElementType = ElementType;
  isVisible = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    if (this.element.type === 'image') {
      this.loadImage(this.element.content);
    }
  }

  isString(value): boolean {
    return typeof value === 'string';
  }

  loadImage(url): void {
    this.dataService.getImage(url).subscribe(
      (data) => {
        const dataStrings = data.chunks.map((chunk: ImageChunk) => chunk.data);
        this.image = 'data:image/png;base64,' + dataStrings.join('');
      },
      (error) => {
        this.image = null;
        console.log('Error while GET post image', error);
      }
    );
  }

}
