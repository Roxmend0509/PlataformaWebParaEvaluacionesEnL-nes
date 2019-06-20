import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private httpClient:HttpClient) { }
  resultados:any;

  url="http://127.0.0.1:8000/api";
  get(idStudent,idExam){
    return this.httpClient.get(this.url+'/CalificacionExamen/'+idStudent+"/"+idExam);
    
  }

  getCal(idStudent){
    return this.httpClient.get(this.url+'/CalificacionExamenAlu/'+idStudent);
    
  }
}
