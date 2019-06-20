import { Component, OnInit } from '@angular/core';
import { ServiceClaveExamService } from '../serviceClaveExam/service-clave-exam.service';
import { claveExa } from '../interface/clave-exam';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clave-question',
  templateUrl: './clave-question.component.html',
  styleUrls: ['./clave-question.component.css']
})
export class ClaveQuestionComponent implements OnInit {
  private sub: any;
  id:any;
  id_question:number;
  id_answer:number;
  title:string="Clave del Examen";
 // editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default

  clave: claveExa={
    question_id:null,
    answer_id:null,
  };

  claves:claveExa[]; //Se crea una variable de tipo Alumno[]
  constructor(private claveService: ServiceClaveExamService, private activatedRoute:ActivatedRoute) {
  }

     ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.id_question = +params['idQue']; //Convertimos de string a numero el "id"
        this.id_answer=+params['idAns'];
     });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    
 

    /*
      En el metodo delete, nos ayudara a eliminar un alumno de la lista
      en el cual se recibira el id del cual se desea borrar,
      primeramente realizamos un id con una confirmación de si 
      seguro que desea eliminar el alumno, si es asi, se traera del alumnoService
      el metodo delete que se le asignara el id que se recibe, como igual
      llamamos al metodo subscribe donde se registrara el parametro data, 
      despues de esto se llama un alerta de que se elimino con exito
      y para que se actuzalice la tabla se trae de nuevo el metodo getAlumnos()
    */

     addClave(){
      this.claveService.save(this.clave).subscribe((data)=>{
        alert("Clave Agregada");
       location.reload();
      });
    
     }
    }


