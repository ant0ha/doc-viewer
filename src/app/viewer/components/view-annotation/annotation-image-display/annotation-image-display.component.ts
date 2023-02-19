import { Component, Input } from '@angular/core';
import { Annotation } from 'src/app/viewer/annotations/annotation';

@Component({
  selector: 'app-annotation-image-display',
  templateUrl: './annotation-image-display.component.html',
  styleUrls: ['./annotation-image-display.component.css']
})
export class AnnotationImageDisplayComponent {

  @Input() annotation: Annotation;
}
