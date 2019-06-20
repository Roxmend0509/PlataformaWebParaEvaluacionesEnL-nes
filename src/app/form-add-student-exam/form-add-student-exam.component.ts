import { Component, OnInit } from '@angular/core';
import { ServiceAlumExamAsociadoService } from '../serviceAlumExamAsociado/service-alum-exam-asociado.service';
import { AlumnoAsociado } from '../interface/alumnoasociado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-add-student-exam',
  templateUrl: './form-add-student-exam.component.html',
  styleUrls: ['./form-add-student-exam.component.css']
})

export class FormAddStudentExamComponent implements OnInit {

  private sub: any;
  id:any;
  id_exam:number;
  title:string="Agregar Alumno al Examen";
 // editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default

 alumno: AlumnoAsociado={
    examen_id:null,
    user_id:null
  };

  alumnos:AlumnoAsociado[]; //Se crea una variable de tipo Alumno[]
  constructor(private alumnoService: ServiceAlumExamAsociadoService, private activatedRoute:ActivatedRoute) {
  }

     ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.id_exam = +params['idExa']; //Convertimos de string a numero el "id"
        this.id=+params['id'];
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

     addUser(){
      this.alumnoService.save(this.alumno).subscribe((data)=>{
        alert("Usuario Agregado");
       location.reload();
      });
    
     }
    }

