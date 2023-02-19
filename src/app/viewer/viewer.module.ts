import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewComponent } from './pages/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewHeaderComponent } from './components/view-header/view-header.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { ViewAnnotationComponent } from './components/view-annotation/view-annotation.component';
import { ViewAnnotationTextComponent } from './components/view-annotation-text/view-annotation-text.component';
import { ViewAnnotationImageComponent } from './components/view-annotation-image/view-annotation-image.component';
import { FormsModule } from '@angular/forms';
import { AnntotationImageDisplayComponent } from './components/view-annotation/anntotation-image-display/anntotation-image-display.component';
import { AnntotationImageAddComponent } from './components/view-annotation/anntotation-image-add/anntotation-image-add.component';
import { AnntotationTextAddComponent } from './components/view-annotation/anntotation-text-add/anntotation-text-add.component';
import { AnntotationTextDisplayComponent } from './components/view-annotation/anntotation-text-display/anntotation-text-display.component';


@NgModule({
  declarations: [
    ViewComponent,
    ViewHeaderComponent,
    ViewDocumentComponent,
    ViewPageComponent,
    ViewAnnotationComponent,
    ViewAnnotationTextComponent,
    ViewAnnotationImageComponent,
    AnntotationImageDisplayComponent,
    AnntotationImageAddComponent,
    AnntotationTextAddComponent,
    AnntotationTextDisplayComponent
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ViewerModule { }
