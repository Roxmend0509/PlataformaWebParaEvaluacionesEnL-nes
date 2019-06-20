import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { claveExa } from '../interface/clave-exam';


@Injectable({
  providedIn: 'root'
})
export class ServiceClaveExamService {

  constructor(private httpClient:HttpClient) { }
  
  
  url="http://127.0.0.1:8000/api"
  get(id){
    return this.httpClient.get(this.url+'/clave/'+id);
    
  }
/*
  getStudents(id){
    return this.httpClient.get(this.url+'/student/'+id);
  }
*/

  save(claveExamen:claveExa){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.url+'/claveQuestion',claveExamen,{headers:headers});
    
  }

  put(claveExamen){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.url+'/claveQuestion/'+claveExamen.id,claveExamen,{headers:headers});
  }

  delete(id){
    return this.httpClient.delete(this.url+'/claveQuestion/'+id);
  }
  }