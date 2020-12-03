import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.sass']
})
export class EditPostComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setPageTitle('Artikel bearbeiten');
  }

  ngOnInit(): void {
  }

}
