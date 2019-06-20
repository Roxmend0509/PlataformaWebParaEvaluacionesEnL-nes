/* 
  En este archivo .ts aparecen los metodos 
  addQuestion(), que nos sirve para crear una nueva 
  Pregunta
  Al principio se importa lo necesario
  como es el Component, OnInit,
  RespuestaService y Respuesta, especificando de donde
  sacaremos esos datos.
  */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PreguntaService } from "../servicesPregunta/pregunta.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Pregunta } from '../interface/pregunta';
import { Examen } from "../interface/examen";
import { ExamService } from '../servicesExamen/examen.service';

/* 
  El @Component contiene el selector, 
  que es como el id del component,
  el templateUrl aqui se le pone el archivo .html 
  donde contiene todo lo que debe de contener la interfaz
  entrar a este component y el styleUrls es donde se le pone
  el archivo .css

*/

@Component({
  selector: 'app-addpregunta-form',
  templateUrl: './addpregunta-form.component.html',
  styleUrls: ['./addpregunta-form.component.css']
})

export class AddpreguntaFormComponent implements OnInit {
  title:string ='EXAMEN NUEVO';
  id_exam: number;

  /*
    Se creara una variable de tipo Pregunta que contendra 
    las variables que se ocupan para 
    crear una nueva Pregunta pero con valor null
  */

  pregunta: Pregunta ={
    textquestion:null,
    examen_id:null
  };

  private sub: any;
  preguntas:Pregunta[]; //Se crea una variable de tipo Pregunta[]
  editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default
  constructor (private preguntaService:PreguntaService,
    private activatedRoute:ActivatedRoute){
  }

   /*
    El ngOnInit() es un método donde usamos para poder traer el id 
    de la pregunta para asi poder agregar la respuesta en la pregunta
    que le corresponde
  */

ngOnInit() {
  this.sub = this.activatedRoute.params.subscribe(params => {
    this.id_exam = +params['id']; //Convertimos de string a numero el "id"
 });
}
ngOnDestroy() {
  this.sub.unsubscribe();
}

/*
  El método AddQuestion() es donde se realiza todo el proceso 
  para poder añadir la Pregunta y manda un alerta si se 
  agrego con exito y si es así se recargara la página para poder
  ingresar otra pregunta.
*/

addQuestion(){
     this.preguntaService.save(this.pregunta).subscribe((data)=>{
      alert('Pregunta Creada');
      location.reload();
    });
  }
  
  
}



