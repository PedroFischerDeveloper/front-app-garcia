import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  
  private base = "http://apiids.herokuapp.com/api/";
  
  constructor(private http: HttpClient) { }

  getAll(url: string,  order: string = "asc", page: number = 1, limit: number = 100) {
    return this.http.get(this.base + url);
  }

  getById(url: string, id: number) {
    return this.http.get(this.base + url + id);
  }

  create(url: string, body: any) {
    return this.http.post(this.base + url, body);
  }

  update(url: string, id: number, body:string) {
    return this.http.put(`${this.base + url}/${id}`, body);
  }

  delete(url: string, id: number) {
    return this.http.delete(`${this.base + url}/${id}`);
  }




}
