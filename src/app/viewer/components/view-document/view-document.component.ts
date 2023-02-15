import { Component, Input } from '@angular/core';
import { Doc } from 'src/app/api/types/docs/doc.entity';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent {

  @Input() doc: Doc;
  @Input() zoom: number;
}
