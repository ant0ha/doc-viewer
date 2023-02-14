import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doc } from '../types/docs/doc.entity';

@Injectable({
  providedIn: 'root'
})
export class DocsApiService {

  constructor(
    protected httpClient: HttpClient,
  ) { }

  getDoc(id: number): Observable<Doc> {
    const url = `/assets/docs/${id}.json`;

    return this.httpClient.get<Doc>(url);
  }
}
