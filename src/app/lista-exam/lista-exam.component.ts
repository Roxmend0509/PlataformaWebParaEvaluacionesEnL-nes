import { Component, OnInit } from '@angular/core';
import { ExamService } from '../servicesExamen/examen.service';
import { Examen } from "../interface/examen";

@Component({
  selector: 'app-lista-exam',
  templateUrl: './lista-exam.component.html',
  styleUrls: ['./lista-exam.component.css']
})
export class ListaExamComponent implements OnInit {
  examenes:Examen[];
  API_ENDPOINT= 'http://127.0.0.1:8000';

  constructor( private examService:ExamService) {
    this.getExamenes();
   }

   getExamenes(){
    this.examService.get().
    subscribe((data: Examen[]) => {
      this.examenes=data;
    })
   }

   delete(id){
    if(confirm('Seguro que deseas eliminar este examen?')){
    this.examService.delete(id).subscribe((data) =>{
      alert("Examen eliminado con exito");
      this.getExamenes();
    });
  }
  }

  ngOnInit() {
  }

}
