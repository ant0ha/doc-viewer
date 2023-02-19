import { Annotation } from './../../../annotations/annotation';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-annotation-text-add',
  templateUrl: './annotation-text-add.component.html',
  styleUrls: ['./annotation-text-add.component.css']
})
export class AnnotationTextAddComponent {

  @Input() annotation: Annotation;
  @ViewChild('textInput') textInput: ElementRef;

  ngAfterViewInit() {
    this.textInput.nativeElement.focus();
  }

  save() {
    if (this.annotation.content) {
      this.annotation.completed = true;
    }
  }
}
