import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../interface/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor(private httpClient:HttpClient) { }

  url="http://127.0.0.1:8000/api"
  get(){
    return this.httpClient.get(this.url+'/user');
    
  }
  
  getStudent(idStudent){
    return this.httpClient.get(this.url+'/student/'+idStudent);
    
  }

  search(email){
    return this.httpClient.get(this.url+'/search/'+email);
    
  }

  save(alumno:Alumno){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.url+'/students',alumno,{headers:headers});
    
  }

  put(alumno){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.url+'/user/'+alumno.id,alumno,{headers:headers});
  }

  delete(id){
    return this.httpClient.delete(this.url+'/deleteUser/'+id);
  }
  }

