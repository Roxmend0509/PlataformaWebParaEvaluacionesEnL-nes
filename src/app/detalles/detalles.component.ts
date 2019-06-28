import { Component, OnInit } from '@angular/core';
import { ExamService } from '../servicesExamen/examen.service';
import { ActivatedRoute } from '@angular/router';
import { Examen } from '../interface/examen';
import { Detalles } from '../interface/detalles';
import { AlumnoService } from '../servicesAlum/alumno.service';
import { Alumno } from '../interface/alumno';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  user_id:any;
  sub:any;
  examenes:Examen[];
  detalles:Detalles[]=null;
  alumnos:Alumno[];


  constructor(private examen:ExamService,
    private alu:AlumnoService,
    private activatedRoute:ActivatedRoute) { 
      this.getIdCal();
    }


    getUser(user_id){
      this.examen.getExWCal(user_id).
      subscribe((data: Detalles[]) => {
        this.detalles=data;
      })
     }

     getUser2(user_id){
      this.alu.getStudent(user_id).
      subscribe((data: Alumno[]) => {
        this.alumnos=data;
      })
     }

  ngOnInit() {
  }

  getIdCal(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.user_id = +params['idExa']; 
      this.getUser(this.user_id);
      this.getUser2(this.user_id);
     
  });
  }

}
