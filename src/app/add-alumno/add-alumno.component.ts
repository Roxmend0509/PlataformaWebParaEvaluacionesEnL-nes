/* 
  En este archivo .ts aparecen los metodos 
  getAlumnos() y el metodo para eliminar un
  alumno.
  Al principio se importa lo necesario
  como es el Component, OnInit,
  AlumnoService y Alumno.
*/

import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../servicesAlum/alumno.service';
import { Alumno } from '../interface/alumno';
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
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})


export class AddAlumnoComponent implements OnInit {
  private sub: any;
  id:any;
  id_exam:number;
 // editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default

  alumno: Alumno={
    name:null,
    email:null,
    role:null
  };

  alumnos:Alumno[]; //Se crea una variable de tipo Alumno[]
  constructor(private alumnoService: AlumnoService, private activatedRoute:ActivatedRoute) {

   

    this.getAlumnos();   //Traemos al constructor el metodo getAlumnos()

     
     
  }

  /* 
    En el metodo getAlumnos() traeremos del alumnoService el metodo get()
    con el metodo subscribe obtendremos un objeto de tipo Alumno[] datos que 
    se guardaran en el parametro data, y al final se le va a pasar el parametro
    a la variable this.alumnos y es asi como obtendremos los alumnos y los pondremos
    en la tabla de alumnos.
  */
     getAlumnos(){
      this.alumnoService.get().
      subscribe((data: Alumno[]) => {
        this.alumnos=data;
      })
     }
/*
     getAlumEx(id_exam){
      this.alumnoService.getStudents(id_exam).
      subscribe((data: Alumno[]) => {
        this.alumnos=data;
      })
     }
     */

     ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.id_exam = +params['id']; //Convertimos de string a numero el "id"
        //this.getAlumEx(this.id_exam);
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

    delete(id){
      if(confirm('Seguro que deseas eliminar este alumno?')){
      this.alumnoService.delete(id).subscribe((data) =>{
        alert("Alumno eliminado con exito");
        this.getAlumnos();
      });
    }
    }

    addDatos(){
      
      this.id=this.activatedRoute.snapshot.params['id'];
      if(this.id){
      // this.editing=true;
       this.alumnoService.get().
       subscribe((data: Alumno[]) => {
         this.alumnos=data;
         this.alumno = this.alumnos.find((a)=>{return a.id
            == this.id});
       })
 
     }else{
      // this.editing=false;
     }
    }

     addUser(){
      this.alumnoService.put(this.alumno).subscribe((data)=>{
        alert("Usuario Agregado");
       // location.reload();
      });
    
     }
    }


