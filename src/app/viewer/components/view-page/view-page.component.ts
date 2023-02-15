import { Component, Input } from '@angular/core';
import { Page } from 'src/app/api/types/docs/page.entity';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent {

  @Input() page: Page;

  clickOnImage(event: PointerEvent | MouseEvent) {
    console.log('offset', event.offsetX);
  }
}
