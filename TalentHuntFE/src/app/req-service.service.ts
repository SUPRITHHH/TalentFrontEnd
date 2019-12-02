import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqServiceService {

  constructor(private http:HttpClient) { }

  backendUrl="http://localhost:4000";
  send(data){
    return this.http.post(`${this.backendUrl}/addrequirement`,data)
  }
}
