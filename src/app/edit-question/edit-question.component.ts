/* 
  En este archivo .ts aparecen los metodos 
  editQuestion().
  Al principio se importa lo necesario
  como es el Component, OnInit,
  PreguntaService y Pregunta.
*/


import { Component, OnInit } from '@angular/core';
import { PreguntaService } from "../servicesPregunta/pregunta.service";
import { ActivatedRoute} from "@angular/router";
import { Pregunta } from '../interface/pregunta';

/* 
  El @Component contiene el selector, 
  que es como el id del component,
  el templateUrl aqui se le pone el archivo .html 
  donde contiene todo lo que debe de contener la interfaz
  entrar a este component y el styleUrls es donde se le pone
  el archivo .css
*/

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})

export class EditQuestionComponent implements OnInit {
  title:string ='EXAMEN NUEVO';
  id_exam: number;
  id:number;

  /*
    Se creara una variable de tipo Pregunta que contendra 
    las variables que se ocupan para 
    crear una nueva Pregunta pero con valor null
  */

  pregunta: Pregunta ={
    textquestion:null,
    examen_id:null
  };

  
  preguntas:Pregunta[]; //Se crea una variable de tipo Pregunta[]
  editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default

  constructor (private preguntaService:PreguntaService,
    private activatedRoute:ActivatedRoute,){
   

    /*
        En el constructor se añadiran estas líneas de código,
        en las cuales se encontrara el id para podernos traer los datos 
        para poder editar la pregunta, de igual formar la variable
        editing se igualara a modo true para que asi funcione el método
        que más adelante se mostrara
      */
   
     this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing=true;
      this.preguntaService.get().
      subscribe((data: Pregunta[]) => {
        this.preguntas=data;
        this.pregunta = this.preguntas.find((a)=>{return a.id
           == this.id});
      })
      }else{
        this.editing=false;
      }
  }

ngOnInit() {
}

 /*
    En el editQuestion() se encontrara un if de si la variable editing esta en true,
    editara la pregunta y la actualizada igual de la base de datos.
  */

editQuestion(){
  if(this.editing){
    this.preguntaService.put(this.pregunta).subscribe((data)=>{
      alert('Pregunta Actualizada');
    })
  }
}
}

