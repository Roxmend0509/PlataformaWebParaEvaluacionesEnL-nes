import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pregunta } from '../interface/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private httpClient:HttpClient) { }

  url="http://127.0.0.1:8000/api";

  get(){
    return this.httpClient.get(this.url+'/questions');
    
  }

  getQue(id){
    return this.httpClient.get(this.url+'/question/'+id);
    
  }

  save(pregunta:Pregunta){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.url+'/questions/',pregunta,{headers:headers});
    
  }

  put(pregunta){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.url+'/questions/'+pregunta.id,pregunta,{headers:headers});
  }

  delete(id){
    return this.httpClient.delete(this.url+'/questions/'+id);
  }

}
