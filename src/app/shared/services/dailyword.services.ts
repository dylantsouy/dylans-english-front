import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../constants/api.constants';
import { DailyWord } from '../model/daily.model';

@Injectable({
  providedIn: 'root',
})

export class DailyWordService {
  resourceUrl = SERVER_API_URL + 'api/dailywords';

  constructor(private http: HttpClient) { }

  get(): Observable<HttpResponse<DailyWord[]>> {
    return this.http.get<DailyWord[]>(this.resourceUrl, { observe: 'response' });
  }
  getAll(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVER_API_URL + 'api/adminDailywords', { observe: 'response' });
  }
  post(data: DailyWord): Observable<HttpResponse<DailyWord>> {
    return this.http.post<DailyWord>(this.resourceUrl, data, { observe: 'response' });
  }

  put(_id: string, data: DailyWord): Observable<HttpResponse<DailyWord>> {
    return this.http.put<DailyWord>(`${this.resourceUrl}/${_id}`, data, { observe: 'response' });
  }

  delete(data: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${data}`, { observe: 'response' });
  }
}
