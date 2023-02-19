import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Annotation } from '../../annotations/annotation';

@Component({
  selector: 'app-view-annotation-text',
  templateUrl: './view-annotation-text.component.html',
  styleUrls: ['./view-annotation-text.component.css']
})
export class ViewAnnotationTextComponent implements AfterViewInit {

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
