import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewComponent } from './pages/view/view.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    HttpClientModule,
  ]
})
export class ViewerModule { }
