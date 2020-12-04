import {Component, Input, OnInit} from '@angular/core';
import {PostElement} from '../../models/post';
import {DataService} from '../../services/data.service';
import {ElementType} from '../../models/element-type';

@Component({
  selector: 'app-post-element',
  templateUrl: './post-element.component.html',
  styleUrls: ['./post-element.component.scss']
})
export class PostElementComponent implements OnInit {

  @Input('element') element: PostElement;
  image: boolean | string = false;
  ElementType = ElementType;

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
        const dataStrings = data.map((chunk: any) => chunk.data);
        this.image = 'data:image/png;base64,' + dataStrings.join('');
      },
      (error) => {
        console.log('Error while GET post image', error);
      }
    );
  }

}
