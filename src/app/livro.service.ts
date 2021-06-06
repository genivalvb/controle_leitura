import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private baseUrl = 'http://localhost:8080/api/v1/livros';

  constructor( private http: HttpClient ) { }

  getLivro(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLivro(livro: object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, livro);
  }

  updateLivro(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLivro(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLivrosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
