import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  private dataUrl = 'assets/dataBarchart.json';

  constructor(private http: HttpClient) { }

  getData(wich): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
