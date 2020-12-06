import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  
  private base = "https://apiids.herokuapp.com/api/";
  
  constructor(private http: HttpClient) { }

  getAll(url: string,  order: string = "asc", page: number = 1, limit: number = 100) {
    return this.http.get(this.base + url);
  }

  getById(url: string, id: number) {
    return this.http.get(this.base + url + id);
  }

  login(url: string, body: any) {
    return this.http.post(this.base + url, body, {observe: 'response'});
  }

  create(url: string, body: any, token: any) {
    return this.http.post(this.base + url, body,{
      headers: new HttpHeaders().set('Authorization', token),
    });
  }


  newPost(url: string, body: any, token: any, id:number) {
    return this.http.post(this.base + url + id, body,{
      headers: new HttpHeaders().set('Authorization', token),
    });
  }

  update(url: string, id: number, body:string, token: string) {
    return this.http.put(`${this.base + url}/${id}`, body, {
      headers: new HttpHeaders().set('Authorization', token),
    });
  }

  delete(url: string, id: number, token) {
    return this.http.delete(`${this.base + url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', token),
    });
  }




}
