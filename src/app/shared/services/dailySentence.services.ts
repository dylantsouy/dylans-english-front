import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../constants/api.constants';
import { DailySentence } from '../model/daily.model';

@Injectable({
  providedIn: 'root',
})

export class DailySentenceService {
  resourceUrl = SERVER_API_URL + 'api/dailySentence';

  constructor(private http: HttpClient) { }

  get(): Observable<HttpResponse<DailySentence[]>> {
    return this.http.get<DailySentence[]>(this.resourceUrl, { observe: 'response' });
  }
  getAll(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVER_API_URL + 'api/adminDailysentence', { observe: 'response' });
  }
  post(data: DailySentence): Observable<HttpResponse<DailySentence>> {
    return this.http.post<DailySentence>(this.resourceUrl, data, { observe: 'response' });
  }

  put(_id: string, data: DailySentence): Observable<HttpResponse<DailySentence>> {
    return this.http.put<DailySentence>(`${this.resourceUrl}/${_id}`, data, { observe: 'response' });
  }

  delete(data: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${data}`, { observe: 'response' });
  }
}
