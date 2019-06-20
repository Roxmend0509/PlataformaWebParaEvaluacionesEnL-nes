import { Component, OnInit } from '@angular/core';
import { Calificaciones } from 'src/app/interface/calificaciones';
import { CalificacionService } from 'src/app/servicesCalificacion/calificacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  user_id:any;
  examen_id:any;
  sub:any;
  calificaciones:Calificaciones[];

  constructor(private calificacion:CalificacionService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private Notify:SnotifyService) {
      this.getIdCal();
     }

  getCalificacion(user_id,examen_id){
    this.calificacion.get(user_id,examen_id).
    subscribe((data: Calificaciones[]) => {
      this.calificaciones=data;
    })
   }

   getIdCal(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.user_id = +params['idAl'];
      this.examen_id = +params['idEx']; // (+) converts string 'id' to a number
      this.getCalificacion(this.user_id,this.examen_id);
     
  });
  }

  regresar(){
    let _router = this.router;
    _router.navigateByUrl('/alumnoLista/'+this.user_id)    
  }

  ngOnInit() {
  }

}
