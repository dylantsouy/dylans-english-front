import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../constants/api.constants';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})

// [頻道資料維護作業]
export class UserService {
  resourceUrl = SERVER_API_URL + 'api/users';

  constructor(private http: HttpClient) { }

  login(data: User): Observable<HttpResponse<any>> {
    return this.http.post<User>(SERVER_API_URL + 'api/login', data, { observe: 'response' });
  }

  register(data: User): Observable<HttpResponse<any>> {
    return this.http.post<User>(this.resourceUrl, data, { observe: 'response' });
  }

  getUser(username: string): Observable<HttpResponse<User>> {
    const data = { username: username }
    return this.http.post<any>(SERVER_API_URL + 'api/users/getUser', data, { observe: 'response' });
  }

  getKnowWord(username: string): Observable<HttpResponse<any>> {
    const data = { username: username }
    return this.http.post<any>(SERVER_API_URL + 'api/users/getKnowWord', data, { observe: 'response' });
  }
  addNotedWord(username: string, word: string): Observable<HttpResponse<any>> {
    const data = { username: username, word: word }
    return this.http.post<any>(SERVER_API_URL + 'api/users/addNotedWord', data, { observe: 'response' });
  }
  removeNotedWord(username: string, word: string): Observable<HttpResponse<any>> {
    const data = { username: username, word: word }
    return this.http.post<any>(SERVER_API_URL + 'api/users/removeNotedWord', data, { observe: 'response' });
  }
  addKnowWord(username: string, word: string): Observable<HttpResponse<any>> {
    const data = { username: username, word: word }
    return this.http.post<any>(SERVER_API_URL + 'api/users/addKnowWord', data, { observe: 'response' });
  }
  removeKnowWord(username: string, word: string): Observable<HttpResponse<any>> {
    const data = { username: username, word: word }
    return this.http.post<any>(SERVER_API_URL + 'api/users/removeKnowWord', data, { observe: 'response' });
  }
  getOverview(username: string): Observable<HttpResponse<any>> {
    const data = { username: username }
    return this.http.post<any>(SERVER_API_URL + 'api/users/getOverview', data, { observe: 'response' });
  }

  getUserLevel(username: string): Observable<HttpResponse<any>> {
    const data = { username: username }
    return this.http.post<any>(SERVER_API_URL + 'api/users/getUserLevel', data, { observe: 'response' });
  }

  put(_id: string, data: User): Observable<HttpResponse<User>> {
    return this.http.put<User>(`${this.resourceUrl}/${_id}`, data, { observe: 'response' });
  }

  delete(data: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${data}`, { observe: 'response' });
  }
}
