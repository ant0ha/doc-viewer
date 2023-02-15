import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewComponent } from './pages/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewHeaderComponent } from './components/view-header/view-header.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { ViewPageComponent } from './components/view-page/view-page.component';


@NgModule({
  declarations: [
    ViewComponent,
    ViewHeaderComponent,
    ViewDocumentComponent,
    ViewPageComponent
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    HttpClientModule,
  ]
})
export class ViewerModule { }
