import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Annotation } from '../annotations/annotation';

@Injectable({
  providedIn: 'root'
})
export class AnnotationsService {

  private _annotations$: BehaviorSubject<Annotation[]> = new BehaviorSubject([] as Annotation[]);

  constructor() {}

  get annotations$(): BehaviorSubject<Annotation[]> {
    return this._annotations$;
  }

  add(annotation: Annotation) {
    this._annotations$.next(this._annotations$.getValue().concat(annotation));
  }

  remove(annotation: Annotation) {
    const annotations = this.annotations$.getValue();
    const index = annotations.indexOf(annotation);

    if (index !== -1) {
      annotations.splice(index, 1);
      this.annotations$.next(annotations);
    }
  }

  toJSON(): string {
    const data = this.annotations$.getValue()
      .filter((annotation: Annotation) => annotation.completed)
      .map((annotation: Annotation) => {
        return {
          page: annotation.page,
          type: annotation.type,
          content: annotation.content,
          coords: annotation.coords,
        };
      })
    ;

    return JSON.stringify(data);
  }
}
