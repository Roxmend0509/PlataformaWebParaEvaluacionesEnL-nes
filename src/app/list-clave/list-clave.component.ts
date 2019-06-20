import { Component, OnInit } from '@angular/core';
import { ServiceClaveExamService } from '../serviceClaveExam/service-clave-exam.service';
import { claveExa } from '../interface/clave-exam';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-clave',
  templateUrl: './list-clave.component.html',
  styleUrls: ['./list-clave.component.css']
})
export class ListClaveComponent implements OnInit {
  private sub:any;
  id_answer:any;
  title:string="RESPUESTAS CORRECTAS";

  claves:claveExa[];
  constructor(private claveService: ServiceClaveExamService, 
    private activatedRoute:ActivatedRoute) { }


  getClave(answer_id){
    this.claveService.get(answer_id).
    subscribe((data: claveExa[]) => {
      this.claves=data;
    })
   }

   ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id_answer = +params['id']; // (+) converts string 'id' to a number
      this.getClave(this.id_answer); //Traemos al constructor el metodo getRespuesta() con su respectivo id de la pregunta
      // In a real app: dispatch action to load the details here.
    });
  }

  delete(id){
    if(confirm('Seguro que deseas eliminar la clave?')){
    this.claveService.delete(id).subscribe((data) =>{
      alert("Clave eliminada con exito");
      this.getClave(this.id_answer); 
    });
  }
  }
}
