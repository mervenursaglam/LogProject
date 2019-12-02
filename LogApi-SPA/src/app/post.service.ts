import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Value} from './models/value'
@Injectable({
  providedIn: 'root'
})
export class PostService {
private readonly apiUrl='http://localhost:53962/api/values';

  constructor(private http:HttpClient) { }

  GetAll(){
    return this.http.get(this.apiUrl);
  }

  Create(obj: Value){
    return this.http.post(this.apiUrl, obj);
  }

}
