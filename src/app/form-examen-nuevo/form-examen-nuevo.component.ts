/* 
  En este archivo .ts aparecen los metodos 
  addExam(), que nos sirve para crear una nuevo
  Examen o Editar un nuevo Examen
  Al principio se importa lo necesario
  como es el Component, OnInit,
  ExamService y Exam, especificando de donde
  sacaremos esos datos.
  */

import { Component, OnInit } from '@angular/core';
import { Examen } from "../interface/examen";
import { ExamService } from "../servicesExamen/examen.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SnotifyService } from 'ng-snotify';

/* 
  El @Component contiene el selector, 
  que es como el id del component,
  el templateUrl aqui se le pone el archivo .html 
  donde contiene todo lo que debe de contener la interfaz
  entrar a este component y el styleUrls es donde se le pone
  el archivo .css
*/

@Component({
  selector: 'app-form-examen-nuevo',
  templateUrl: './form-examen-nuevo.component.html',
  styleUrls: ['./form-examen-nuevo.component.css']
})

export class FormExamenNuevoComponent implements OnInit {
    id:any;
    title:string ='Añadir Examen Nuevo';

      /*
    Se creara una variable de tipo Examen que contendra 
    las variables que se ocupan para 
    crear un nuevo Examen pero con valor null
  */
    examen: Examen ={
      name:null,
      description:null,
      key:null
    };

   
    editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default
    examenes:Examen[]; //Se crea una variable de tipo Examen[]


    constructor (private examService:ExamService,
      private activatedRoute:ActivatedRoute,
      private router:Router,
      private Notify:SnotifyService){
      

    /*
        En el constructor se añadiran estas líneas de código,
        en las cuales se encontrara el id para podernos traer los datos 
        para poder editar el examenes, de igual formar la variable
        editing se igualara a modo true para que asi funcione el método
        que más adelante se mostrara
    */   

   this.id=this.activatedRoute.snapshot.params['id'];
      if(this.id){
        this.title='Editar Examen';
        this.editing=true;
        this.examService.get().
        subscribe((data: Examen[]) => {
          this.examenes=data;
          this.examen = this.examenes.find((a)=>{return a.id
             == this.id});
        })
        }else{
          this.editing=false;
        }
    }

  ngOnInit() {
  }

    /*
  El método addExam(), se verifica si 
  la variable editing es igual a true, si es asi el usuario lo que ocupa
  es editar al Examen si es asi se editara y mandara un alerta de que el 
  Alumno se actualizo y si editing es igual a false se realiza todo el proceso 
  para poder añadir el Examen y manda un alerta si se 
  agrego con exito
*/

  addExam(){
    if(this.editing){
      this.examService.put(this.examen).subscribe((data)=>{
        let _router = this.router;
        this.Notify.confirm('Examen Editado', {
          buttons:[
            {text: 'Ok', 
            action: toster =>{
               _router.navigateByUrl('/listaExamen'),
               this.Notify.remove(toster.id)
              }
          },
          ]
        })
          });
    }else{
      this.examService.save(this.examen).subscribe((data)=>{
        let _router = this.router;
    this.Notify.confirm('Examen Creado', {
      buttons:[
        {text: 'Ok', 
        action: toster =>{
           _router.navigateByUrl('/listaExamen'),
           this.Notify.remove(toster.id)
          }
      },
      ]
    })
      });
    }
    
  }
  }


