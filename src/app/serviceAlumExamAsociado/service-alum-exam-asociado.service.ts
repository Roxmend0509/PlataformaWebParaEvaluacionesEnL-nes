import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlumnoAsociado } from '../interface/alumnoasociado';


@Injectable({
  providedIn: 'root'
})
export class ServiceAlumExamAsociadoService {
  constructor(private httpClient:HttpClient) { }

  url="http://127.0.0.1:8000/api"
  get(){
    return this.httpClient.get(this.url+'/examStudent');
    
  }

  getStudents(id){
    return this.httpClient.get(this.url+'/examUser/'+id);
  }

  save(alumnoAsociado:AlumnoAsociado){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.url+'/examStudent',alumnoAsociado,{headers:headers});
    
  }

  put(alumnoAsociado){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.url+'/examStudent/'+alumnoAsociado.id,alumnoAsociado,{headers:headers});
  }

  delete(id){
    return this.httpClient.delete(this.url+'/examStudent/'+id);
  }
  }

