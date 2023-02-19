import { Component, Input } from '@angular/core';
import { Annotation } from '../../annotations/annotation';

@Component({
  selector: 'app-view-annotation-image',
  templateUrl: './view-annotation-image.component.html',
  styleUrls: ['./view-annotation-image.component.css']
})
export class ViewAnnotationImageComponent {

  @Input() annotation: Annotation;



}
