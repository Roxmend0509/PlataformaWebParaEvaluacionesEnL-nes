/* 
  En este archivo .ts aparecen los metodos 
  editAnswer().
  Al principio se importa lo necesario
  como es el Component, OnInit,
  AlumnoService y Alumno.
*/

import { Component, OnInit } from '@angular/core';
import { RespuestaService } from "../servicesRespuesta/respuesta.service";
import { Respuesta } from "../interface/respuesta";
import { ActivatedRoute } from '@angular/router';

/* 
  El @Component contiene el selector, 
  que es como el id del component,
  el templateUrl aqui se le pone el archivo .html 
  donde contiene todo lo que debe de contener la interfaz
  entrar a este component y el styleUrls es donde se le pone
  el archivo .css
*/

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.css']
})

export class EditAnswerComponent implements OnInit {
  title:string='EDITAR RESPUESTA';
  id_pregunta:number;
  id:number;

 /*
    Se creara una variable de tipo Respuesta que contendra 
    las variables que se ocupan para 
    crear una nueva Respuesta pero con valor null
  */
  
  respuesta:Respuesta={
    textanswer:null,
    question_id:null,
    AnswerCorrect:null
  };

  respuestas:Respuesta[];  //Se crea una variable de tipo Respuesta[]
  editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default

  constructor(private respuestaService:RespuestaService,
    private activatedRoute:ActivatedRoute) {
      console.log(this.respuesta);

      /*
        En el constructor se añadiran estas líneas de código,
        en las cuales se encontrara el id para podernos traer los datos 
        para poder editar la respuesta, de igual formar la variable
        editing se igualara a modo true para que asi funcione el método
        que más adelante se mostrara
      */
     this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing=true;
      this.respuestaService.get().
      subscribe((data: Respuesta[]) => {
        this.respuestas=data;
        this.respuesta = this.respuestas.find((a)=>{return a.id
           == this.id});
           
      })
      }else{
        this.editing=false;
      }
  }
    

  ngOnInit() {
    console.log(this.id);

  }

  /*
    En el editAnswer() se encontrara un if de si la variable editing esta en true,
    editara la respuesta y la actualizada igual de la base de datos.
  */

  editAnswer(){
    if(this.editing){
      this.respuestaService.put(this.respuesta).subscribe((data)=>{
        alert('Respuesta actualizada');
      })
    }
  }
}
