import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewComponent } from './pages/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewHeaderComponent } from './components/view-header/view-header.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { ViewAnnotationComponent } from './components/view-annotation/view-annotation.component';
import { FormsModule } from '@angular/forms';
import { AnnotationImageAddComponent } from './components/view-annotation/annotation-image-add/annotation-image-add.component';
import { AnnotationImageDisplayComponent } from './components/view-annotation/annotation-image-display/annotation-image-display.component';
import { AnnotationTextDisplayComponent } from './components/view-annotation/annotation-text-display/annotation-text-display.component';
import { AnnotationTextAddComponent } from './components/view-annotation/annotation-text-add/annotation-text-add.component';
import { AnnotationMoveDirective } from './directives/annotation-move.directive';


@NgModule({
  declarations: [
    ViewComponent,
    ViewHeaderComponent,
    ViewDocumentComponent,
    ViewPageComponent,
    ViewAnnotationComponent,
    AnnotationImageAddComponent,
    AnnotationImageDisplayComponent,
    AnnotationTextDisplayComponent,
    AnnotationTextAddComponent,
    AnnotationMoveDirective,
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ViewerModule { }
