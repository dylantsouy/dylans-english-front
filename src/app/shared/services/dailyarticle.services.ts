import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../constants/api.constants';
import { DailyArticle } from '../model/daily.model';

@Injectable({
  providedIn: 'root',
})

export class DailyArticleService {
  resourceUrl = SERVER_API_URL + 'api/dailyArticle';

  constructor(private http: HttpClient) { }

  get(): Observable<HttpResponse<DailyArticle[]>> {
    return this.http.get<DailyArticle[]>(this.resourceUrl, { observe: 'response' });
  }

  post(data: DailyArticle): Observable<HttpResponse<DailyArticle>> {
    return this.http.post<DailyArticle>(this.resourceUrl, data, { observe: 'response' });
  }

  put(_id: string, data: DailyArticle): Observable<HttpResponse<DailyArticle>> {
    return this.http.put<DailyArticle>(`${this.resourceUrl}/${_id}`, data, { observe: 'response' });
  }

  delete(data: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${data}`, { observe: 'response' });
  }
}
