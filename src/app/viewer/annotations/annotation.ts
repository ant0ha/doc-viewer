import { AnnotationCoords } from "./annotation-coords";
import { AnnotationType } from "./annotation-type";

export class Annotation {

  private _coords: AnnotationCoords;
  private _page: number;
  private _type: AnnotationType;
  private _completed = false;
  private _content: string;

  constructor(page: number, coords: AnnotationCoords) {
    this.page = page;
    this.coords = coords;
  }

  set coords(coords: AnnotationCoords) {
    this._coords = coords;
  }

  get coords(): AnnotationCoords {
    return this._coords;
  }

  set page(page: number) {
    this._page = page;
  }

  get page(): number {
    return this._page;
  }

  set type(type: AnnotationType) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }

  get content(): string {
    return this._content;
  }

  set content(content: string) {
    this._content = content;
  }
}
