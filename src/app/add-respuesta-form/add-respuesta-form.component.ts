/* 
  En este archivo .ts aparecen los metodos 
  addAnswer(), que nos sirve para crear una nueva 
  Respuesta
  Al principio se importa lo necesario
  como es el Component, OnInit,
  RespuestaService y Respuesta, especificando de donde
  sacaremos esos datos.
  */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { RespuestaService } from "../servicesRespuesta/respuesta.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Respuesta } from '../interface/respuesta';

/* 
  El @Component contiene el selector, 
  que es como el id del component,
  el templateUrl aqui se le pone el archivo .html 
  donde contiene todo lo que debe de contener la interfaz
  entrar a este component y el styleUrls es donde se le pone
  el archivo .css

*/

@Component({
  selector: 'app-add-respuesta-form',
  templateUrl: './add-respuesta-form.component.html',
  styleUrls: ['./add-respuesta-form.component.css']
})
export class AddRespuestaFormComponent implements OnInit {
  title:string ='EXAMEN NUEVO';
  id_question: number;

  /*
    Se creara una variable de tipo Respuesta que contendra 
    las variables que se ocupan para 
    crear una nueva Respuesta pero con valor null
  */

  respuesta: Respuesta ={
    textanswer:null,
    question_id:null,
    AnswerCorrect:null
  };

  private sub: any;
  respuestas:Respuesta[]; //Se crea una variable de tipo Respuesta[]
  editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default
  constructor (private respuestaService:RespuestaService,
    private activatedRoute:ActivatedRoute){
  }

  /*
    El ngOnInit() es un método donde usamos para poder traer el id 
    de la pregunta para asi poder agregar la respuesta en la pregunta
    que le corresponde
  */
ngOnInit() {
  this.sub = this.activatedRoute.params.subscribe(params => {
    this.id_question = +params['id']; //Convertimos de string a numero el "id"
 });
}

ngOnDestroy() {
  this.sub.unsubscribe();
}

/*
  El método AddAnswer() es donde se realiza todo el proceso 
  para poder añadir la Respuesta y manda un alerta si se 
  agrego con exito y si es así se recargara la página para poder
  ingresar otra respuesta.
*/
addAnswer(){
     this.respuestaService.save(this.respuesta).subscribe((data)=>{
      alert('Respuesta Creada');
      location.reload();
    });
  }
  
  
}
