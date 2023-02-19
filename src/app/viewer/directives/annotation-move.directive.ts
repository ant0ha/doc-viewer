import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAnnotationMove]'
})
export class AnnotationMoveDirective {

  @HostBinding('style.cursor')
  backgroundColor: string = 'move';

  constructor() { }

}
