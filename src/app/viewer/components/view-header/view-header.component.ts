import { AnnotationsService } from './../../services/annotations.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doc } from 'src/app/api/types/docs/doc.entity';

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.css']
})
export class ViewHeaderComponent {

  @Input() doc: Doc;
  @Input() zoom: number;
  @Output() zoomChange: EventEmitter<number> = new EventEmitter();

  protected zoomStep = 10;
  protected maxZoom = 200;

  constructor(
    private annotationsService: AnnotationsService,
  ) {}

  zoomIn() {
    if (this.zoom < this.maxZoom) {
      this.zoom += 10;
      this.zoomChange.emit(this.zoom);
    }
  }

  zoomOut() {
    if (this.zoom > this.zoomStep) {
      this.zoom -= 10;
      this.zoomChange.emit(this.zoom);
    }
  }

  save() {
    console.log('data', this.annotationsService.toJSON());
  }
}
