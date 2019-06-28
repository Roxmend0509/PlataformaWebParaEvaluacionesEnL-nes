import { Component, OnInit } from '@angular/core';
import { Calificaciones } from 'src/app/interface/calificaciones';
import { CalificacionService } from 'src/app/servicesCalificacion/calificacion.service';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/servicesAlum/alumno.service';

@Component({
  selector: 'app-list-calificaciones',
  templateUrl: './list-calificaciones.component.html',
  styleUrls: ['./list-calificaciones.component.css']
})
export class ListCalificacionesComponent implements OnInit {
  user_id:any;
  examen_id:any;
  sub:any;
  calificaciones:Calificaciones[];
  alumnos:Alumno[];

  constructor(private calificacion:CalificacionService,
    private alu:AlumnoService,
    private activatedRoute:ActivatedRoute) { 
      this.getIdCal();
    }


    getCalificacionAl(user_id){
      this.calificacion.getCal(user_id).
      subscribe((data: Calificaciones[]) => {
        this.calificaciones=data;
      })
     }

     getUser(user_id){
      this.alu.getStudent(user_id).
      subscribe((data: Alumno[]) => {
        this.alumnos=data;
      })
     }
     
  getIdCal(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.user_id = +params['idAlu'];
      this.examen_id = +params['idEx']; // (+) converts string 'id' to a number
      this.getCalificacionAl(this.user_id);
      this.getUser(this.user_id);
     
  });
  }

  ngOnInit() {
    
  }

}
