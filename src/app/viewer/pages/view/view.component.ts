import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { DocsApiService } from 'src/app/api/services/docs-api.service';
import { Doc } from 'src/app/api/types/docs/doc.entity';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  doc$: Observable<Doc>;
  zoom: number = 100;

  constructor(
    protected docsApiService: DocsApiService,
    protected route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const docId: number = Number(this.route.snapshot.paramMap.get('id'));

    this.doc$ = this.docsApiService.getDoc(docId)
      .pipe(
        catchError((e) => {
          console.error(e);
          alert('Document not found!');

          return throwError(() => {});
        })
      )
    ;
  }
}
