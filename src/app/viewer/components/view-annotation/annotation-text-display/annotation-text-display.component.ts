import { Component, Input } from '@angular/core';
import { Annotation } from 'src/app/viewer/annotations/annotation';

@Component({
  selector: 'app-annotation-text-display',
  templateUrl: './annotation-text-display.component.html',
  styleUrls: ['./annotation-text-display.component.css']
})
export class AnnotationTextDisplayComponent {

  @Input() annotation: Annotation;
}
