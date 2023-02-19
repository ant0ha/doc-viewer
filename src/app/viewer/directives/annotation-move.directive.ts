import { Annotation } from 'src/app/viewer/annotations/annotation';
import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnnotationMove]'
})
export class AnnotationMoveDirective {

  @Input() annotation: Annotation;

  private isMoving = false;
  private offsetX: number;
  private offsetY: number;

  constructor(
    private elRef: ElementRef,
  ) { }

  @HostBinding('style.cursor')
  get cursor(): string {
    if (this.annotation.completed) {
      return 'move';
    }

    return 'default';
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isMoving = true;

    this.offsetX = this.elRef.nativeElement.offsetLeft - event.clientX;
    this.offsetY = this.elRef.nativeElement.offsetTop - event.clientY;
  }

  @HostListener('document:mousemove', ['$event'])
  mouseMove(event: MouseEvent) {
    if (this.isMoving) {
      const x = event.clientX + this.offsetX;
      const y = event.clientY + this.offsetY;

      if (x < 0 || y < 0) {
        event.preventDefault();
        return;
      }

      this.annotation.coords.x = x;
      this.annotation.coords.y = y;
    }
  }

  @HostListener('document:mouseup')
  mouseUp() {
    this.isMoving = false;
  }
}
