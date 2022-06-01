import { Component, Input, OnInit } from '@angular/core';
import { ElementType } from '../../models/element-type';
import { ImageChunk } from '../../models/image-data';
import { PostElement, SublistItem } from '../../models/post-element';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-post-element',
  templateUrl: './post-element.component.html',
})
export class PostElementComponent implements OnInit {
  @Input() public element: PostElement;

  public image: boolean | string = false;

  public ElementType = ElementType;

  public isVisible = false;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    if (this.element.type === ElementType.IMAGE) {
      this.loadImage(this.element.content);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public isString(value): boolean {
    return typeof value === 'string';
  }

  // eslint-disable-next-line class-methods-use-this
  public isSublistItem(item: string | SublistItem): item is SublistItem {
    return Object.prototype.hasOwnProperty.call(item, 'sublist');
  }

  private loadImage(url): void {
    this.dataService.getImage(url).subscribe(
      (data) => {
        const dataStrings = data.chunks.map((chunk: ImageChunk) => chunk.data);
        this.image = `data:image/png;base64,${dataStrings.join('')}`;
      },
      () => {
        this.image = null;
      },
    );
  }
}
