/* 
  En este archivo .ts aparecen los metodos 
  getRespuesta() y el metodo para eliminar una 
  respuesta.
  Al principio se importa lo necesario
  como es el Component, OnInit,
  RespuestaService y Respuesta.
*/

import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../interface/respuesta';
import { RespuestaService } from '../servicesRespuesta/respuesta.service';
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
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {
  title:string="RESPUESTAS DEL LA PREGUNTA "
  respuestas:Respuesta[]; //Se crea una variable de tipo Respuesta[]
  question_id:any;
  answer_id:any;
  private sub: any;

  constructor( private respuestaService:RespuestaService,
    private activatedRoute:ActivatedRoute) {
   }

   /* 
    En el metodo getRespuesta() traeremos de RespuestaService el metodo get()
    con el metodo subscribe obtendremos un objeto de tipo Respuesta[] datos que 
    se guardaran en el parametro data, y al final se le va a pasar el parametro
    a la variable this.respuesta y es asi como obtendremos los alumnos y los pondremos
    en la tabla de respuesta.
  */

   getRespuesta(question_id){
    this.respuestaService.getAn(question_id).
    subscribe((data: Respuesta[]) => {
      this.respuestas=data;
    })
   }

   /*
      En el metodo delete, nos ayudara a eliminar una respuesta de la lista
      en el cual se recibira el id del cual se desea borrar,
      primeramente realizamos un id con una confirmación de si 
      seguro que desea eliminar el respuesta, si es asi, se traera del RespuestaService
      el metodo delete que se le asignara el id que se recibe, como igual
      llamamos al metodo subscribe donde se registrara el parametro data, 
      despues de esto se llama un alerta de que se elimino con exito
      y para que se actuzalice la tabla se trae de nuevo el metodo getRespuesta()
    */

   delete(id){
    if(confirm('Seguro que deseas eliminar esta pregunta?')){
    this.respuestaService.delete(id).subscribe((data) =>{
      alert("Pregunta eliminada con exito");
      this.getRespuesta(this.question_id); 
    });
  }
  }

  /*
    En el ngOnInit() se realizara la buscada del question_id, para poder
    verificar a que pregunta se le agregara la respuesta.
  */

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.question_id = +params['idQue']; // (+) converts string 'id' to a number
      this.getRespuesta(this.question_id); //Traemos al constructor el metodo getRespuesta() con su respectivo id de la pregunta
      // In a real app: dispatch action to load the details here.
   });
  }
}

