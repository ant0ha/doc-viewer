import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Annotation } from '../../annotations/annotation';
import { AnnotationType } from '../../annotations/annotation-type';

@Component({
  selector: 'app-view-annotation',
  templateUrl: './view-annotation.component.html',
  styleUrls: ['./view-annotation.component.css']
})
export class ViewAnnotationComponent {

  @Input() annotation: Annotation;
  @Output() remove: EventEmitter<Annotation> = new EventEmitter();

  radius = 20;
  annotationTypes = [
    AnnotationType.Text,
    AnnotationType.Image,
  ];

  annotationTypeEnum = AnnotationType;
}
