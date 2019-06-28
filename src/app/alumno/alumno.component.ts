

import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../servicesAlum/alumno.service';
import { Alumno } from '../interface/alumno';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumnos:Alumno[];
  API_ENDPOINT= 'http://127.0.0.1:8000';

  public form ={
    buscar:null
  };

  constructor(private alumnoService: AlumnoService) {
    
  this.getAlumnos();  
  }

     getAlumnos(){
      this.alumnoService.get().
      subscribe((data: Alumno[]) => {
        this.alumnos=data;
      })
     }

     ngOnInit() {
    }

    delete(id){
      if(confirm('Seguro que deseas eliminar este alumno?')){
      this.alumnoService.delete(id).subscribe((data) =>{
        alert("Alumno eliminado con exito");
        this.getAlumnos();
      });
    }
    }

    buscar(){
      if(this.form.buscar=="" || this.form.buscar==null){
        this.getAlumnos();
      }else{
        this.alumnoService.search(this.form.buscar).
      subscribe((data: Alumno[]) => {
        this.alumnos=data;
      });
      }
      
    }
     
  }


     

  


