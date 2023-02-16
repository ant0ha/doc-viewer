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

  addAnnotation(annotation: Annotation) {
    this._annotations$.next(this._annotations$.getValue().concat(annotation));
  }
}
