import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../interface/pregunta';
import { PreguntaService } from '../servicesPregunta/pregunta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  title:string="PREGUNTAS DEL EXAMEN "
  preguntas:Pregunta[];
  API_ENDPOINT= 'http://127.0.0.1:8000';
  id_exam:number;
  private sub: any;
  

  constructor( private preguntaService:PreguntaService,
    private activatedRoute:ActivatedRoute) {
   
    
   }

   

   getPreguntas(id_exam){
  this.preguntaService.getQue(id_exam).
    subscribe((data: Pregunta[]) => {
      this.preguntas=data;
    })
   }

   delete(id){
    if(confirm('Seguro que deseas eliminar esta pregunta?')){
    this.preguntaService.delete(id).subscribe((data) =>{
      alert("Pregunta eliminada con exito");
      this.getPreguntas(this.id_exam);
    });
  }
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id_exam = +params['idExa']; // (+) converts string 'id' to a number
      this.getPreguntas(this.id_exam);
      // In a real app: dispatch action to load the details here.
   });
  }
}


