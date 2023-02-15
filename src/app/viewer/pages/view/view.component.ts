import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsApiService } from 'src/app/api/services/docs-api.service';
import { Doc } from 'src/app/api/types/docs/doc.entity';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  doc: Doc;
  zoom: number = 100;

  constructor(
    protected docsApiService: DocsApiService,
    protected route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const docId: number = Number(this.route.snapshot.paramMap.get('id'));

    this.loadDoc(docId);
  }

  loadDoc(docId: number) {
    this.docsApiService.getDoc(docId)
      .subscribe(
        {
          next: (doc) => this.doc = doc,
          error: (e) => {
            console.error(e);
            alert('Document not found!');
          }
        }
      )
    ;
  }
}
