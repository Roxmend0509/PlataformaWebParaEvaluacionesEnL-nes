import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuesta } from '../interface/respuesta';


@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private httpClient:HttpClient) { }

  url="http://127.0.0.1:8000/api";

  get(){
    return this.httpClient.get(this.url+'/answers');
    
  }

  getAn(id){
    return this.httpClient.get(this.url+'/answer/'+id);
    
  }
  

  save(respuesta:Respuesta){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.url+'/answers/',respuesta,{headers:headers});
    
  }

  put(respuesta){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.url+'/answers/'+respuesta.id,respuesta,{headers:headers});
  }

  delete(id){
    return this.httpClient.delete(this.url+'/answers/'+id);
  }

}

