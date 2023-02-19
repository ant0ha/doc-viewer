import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/api/types/docs/page.entity';
import { Annotation } from '../../annotations/annotation';
import { AnnotationsService } from '../../services/annotations.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  @Input() page: Page;
  @Input() zoom: number;

  annotations$: Observable<Annotation[]>;

  constructor(
    protected annotationsService: AnnotationsService,
  ) {}

  ngOnInit() {
    this.annotations$ = this.annotationsService.getPageAnnotations(this.page.number);
  }

  clickOnImage(event: PointerEvent | MouseEvent) {
    const coords = {
      x: event.offsetX,
      y: event.offsetY
    };

    const annotation = new Annotation(this.page.number, coords);

    this.annotationsService.add(annotation);
  }

  onRemove(annotation: Annotation) {
    this.annotationsService.remove(annotation);
  }
}
