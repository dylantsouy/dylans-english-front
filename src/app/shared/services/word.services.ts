import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../constants/api.constants';
import { Word } from '../model/word.model';

@Injectable({
  providedIn: 'root',
})

// [頻道資料維護作業]
export class WordService {
  resourceUrl = SERVER_API_URL + 'api/words';

  constructor(private http: HttpClient) { }

  get(req: any): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl, { params: req, observe: 'response' });
  }

  post(data: Word): Observable<HttpResponse<Word>> {
    return this.http.post<Word>(this.resourceUrl, data, { observe: 'response' });
  }

  put(word: string, data: Word): Observable<HttpResponse<Word>> {
    return this.http.put<Word>(`${this.resourceUrl}/${word}`, data, { observe: 'response' });
  }

  delete(data: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${data}`, { observe: 'response' });
  }

  getWordsById(req?: any): Observable<HttpResponse<Word[]>> {
    return this.http.get<Word[]>(SERVER_API_URL + '/api/words/getWordsById', { params: req, observe: 'response' });
  }

  getLessonsByLevel(level: string): Observable<HttpResponse<any[]>> {
    const data = { level: level };
    return this.http.post<Word[]>(SERVER_API_URL + 'api/words/getLessonsByLevel', data, { observe: 'response' });
  }
  getWordsByWord(word: string): Observable<HttpResponse<any>> {
    const data = { word: word };
    return this.http.post<any>(SERVER_API_URL + 'api/words/getWordsByWord', data, { observe: 'response' });
  }
  getWordsByLesson(level: string, lesson: Number): Observable<HttpResponse<Word[]>> {
    const data = { level: level, lesson: lesson };
    return this.http.post<Word[]>(SERVER_API_URL + 'api/words/getWordsByLesson', data, { observe: 'response' });
  }
}
