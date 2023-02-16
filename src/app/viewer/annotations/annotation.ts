import { AnnotationType } from "./annotation-type";

export class Annotation {

  private _x: number;
  private _y: number;
  private _page: number;
  private _type: AnnotationType;
  private _completed = false;

  set x(x: number) {
    this._x = x;
  }

  get x(): number {
    return this._x;
  }

  set y(y: number) {
    this._y = y;
  }

  get y(): number {
    return this._y;
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
}
