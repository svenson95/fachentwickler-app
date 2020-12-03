import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostPageRoutingModule } from './post-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { PostElementModule } from '../../components/post-element/post-element.module';



@NgModule({
  declarations: [PostComponent],
  imports: [
      CommonModule,
      PostPageRoutingModule,
      AngularMaterialModule,
      PostElementModule
  ]
})
export class PostModule { }
