import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from 'src/app/interface/pregunta';
import { PreguntaService } from 'src/app/servicesPregunta/pregunta.service';
import { RespuestaService } from 'src/app/servicesRespuesta/respuesta.service';
import { Respuesta } from 'src/app/interface/respuesta';
import { ExamService } from 'src/app/servicesExamen/examen.service';
import { Examen } from 'src/app/interface/examen';
import { claveExa } from 'src/app/interface/clave-exam';
import { Completo } from 'src/app/interface/completo';
import { Correcta } from 'src/app/interface/correcta';
import { forEach } from '@angular/router/src/utils/collection';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-presentar-exam',
  templateUrl: './presentar-exam.component.html',
  styleUrls: ['./presentar-exam.component.css']
})
export class PresentarExamComponent implements OnInit {
  title:string="PREGUNTAS DEL EXAMEN "
  preguntas:Pregunta[];
  respuestas:Respuesta[];
  examenes:Examen[];
  completos:Completo[];
  correctas:Correcta[];
  API_ENDPOINT= 'http://127.0.0.1:8000';
  id_exam:number;
  id_user:number;
  private sub: any;
  correct:string[];
  // Se crea una array de tipo number y se asigna vacio
  radioSelected:number[] = [];

  constructor(private activatedRoute:ActivatedRoute,
    private examService:ExamService,
    private router: Router,
    private Notify:SnotifyService) {
   
    this.getExamenes(this.id_exam);

    
   }

   getExamenes(id_exam){
    this.examService.getE(id_exam).
    subscribe((data: Completo[]) => {
      this.completos=data;
    })
   }
   
   

   

   enviar() {
        // Se crea la variable "resultados" y se le asigna un array vacio
        let resultados:any[] =  [];

        /* Sobre el objeto "completos" buscamos su propiedad "preguntas" e iteramos
        // su contenido usando forEach ("pregunta" es la variable que tiene el contenido
        // e index es tal cual el indice del array) para sacar el id de la pregunta
        // y con el indice sacamos el valor de la respectiva respuesta usando radioSelected[index],
        // finalmente hacemos un push en resultados, y añadimos un objeto con estos valores.
        // Ese array (resultados), sería lo que tendrías que enviar a tu back-end. */

        this.completos["preguntas"].forEach((pregunta, index) => {
          resultados.push({
            "pregunta": pregunta.id,
            "respuesta": this.radioSelected[index]
          })
        });
          this.examService.setRespuestas(resultados,this.id_user,this.id_exam).subscribe((data)=>{
            let _router = this.router;
            this.Notify.confirm('Examen Finalizado', {
              buttons:[
                {text: 'Ok', 
                action: toster =>{
                   _router.navigateByUrl('/resultado/'+ this.id_user +'/'+ this.id_exam),
                   this.Notify.remove(toster.id)
                  }
              },
              ]
            })
          })
}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id_user = +params['id']; // (+) converts string 'id' to a number
      this.id_exam = +params['idExa']; // (+) converts string 'id' to a number
      this.getExamenes(this.id_exam);
      // In a real app: dispatch action to load the details here.
   });
  }


}


