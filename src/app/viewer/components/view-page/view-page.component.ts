import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  annotations$: Observable<Annotation[]>;

  constructor(
    protected annotationsService: AnnotationsService,
  ) {}

  ngOnInit() {
    this.annotations$ = this.annotationsService.annotations$
      .pipe(
        map((annotations) => {
          return annotations.filter(annotation => annotation.page === this.page.number);
        })
      )
    ;
  }

  clickOnImage(event: PointerEvent | MouseEvent) {
    const annotation = new Annotation();

    annotation.x = event.offsetX;
    annotation.y = event.offsetY;
    annotation.page = this.page.number;

    this.annotationsService.addAnnotation(annotation);
  }

  onRemove(annotation: Annotation) {
    const annotations = this.annotationsService.annotations$.getValue();
    const index = annotations.indexOf(annotation);

    if (index !== -1) {
      annotations.splice(index, 1);
      this.annotationsService.annotations$.next(annotations);
    }
  }
}
