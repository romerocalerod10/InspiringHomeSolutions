import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = 'assets/docs/';

  constructor(private http: HttpClient) {}

  downloadFile(fileName: string): Observable<Blob> {
    const url = `${this.baseUrl}${fileName}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
