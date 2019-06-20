import { Component, OnInit } from '@angular/core';
import { ServiceAlumExamAsociadoService } from 'src/app/serviceAlumExamAsociado/service-alum-exam-asociado.service';
import { TokenService } from 'src/app/services/token.service';
import { AlumnoAsociado } from 'src/app/interface/alumnoasociado';
import { ActivatedRoute } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { AlexCompleto } from 'src/app/interface/alexcompleto';
import { Examen } from 'src/app/interface/examen';
@Component({
  selector: 'app-lista-examen-alumnos',
  templateUrl: './lista-examen-alumnos.component.html',
  styleUrls: ['./lista-examen-alumnos.component.css']
})
export class ListaExamenAlumnosComponent implements OnInit {
  user_id:any;
  sub:any;
  alexcompletos:AlexCompleto[];
  exams:Examen[];
  API_ENDPOINT= 'http://127.0.0.1:8000';

  constructor( private examService:ServiceAlumExamAsociadoService,
    private activatedRoute:ActivatedRoute) {
      this.getIdAl();
     
     
   }

   getExamenes(user_id){
    this.examService.getStudents(user_id).
    subscribe((data: Examen[]) => {
      this.exams=data;
    })
   }

   
   
  

   delete(id){
    if(confirm('Seguro que deseas eliminar este examen?')){
    this.examService.delete(id).subscribe((data) =>{
      alert("Examen eliminado con exito");
      this.getExamenes(this.user_id);
    });
  }

  }

  getIdAl(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.user_id = +params['idAl']; // (+) converts string 'id' to a number
      this.getExamenes(this.user_id);
     
  });
  }

  ngOnInit() {
  
    
}

}
