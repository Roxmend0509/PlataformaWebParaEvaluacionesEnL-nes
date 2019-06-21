import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Examen } from '../interface/examen';
import { Completo } from '../interface/completo';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  constructor(private httpClient:HttpClient) { }
  resultados:any;

  url="http://127.0.0.1:8000/api";
  get(){
    return this.httpClient.get(this.url+'/exams');
    
  }

  getE(id){
    return this.httpClient.get(this.url+'/examenes/'+id);
    
  }

  
  getExWCal(id){
    return this.httpClient.get(this.url+'/ExaWithCal/'+id);
    
  }

  getExam(id){
    return this.httpClient.get(this.url+'/examUser/'+id);
    
  }

  setRespuestas(resultados,idStudent,idExam){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.url+'/setAnswers/'+idStudent+'/'+idExam,{respuestas:resultados});
  }

  save(examen:Examen){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.url+'/exams',examen,{headers:headers});
    
  }

  put(examen){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.url+'/exams/'+examen.id,examen,{headers:headers});
  }

  delete(id){
    return this.httpClient.delete(this.url+'/exams/'+id);
  }
  }

