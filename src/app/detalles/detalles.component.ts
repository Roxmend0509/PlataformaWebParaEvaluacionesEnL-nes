import { Component, OnInit } from '@angular/core';
import { ExamService } from '../servicesExamen/examen.service';
import { ActivatedRoute } from '@angular/router';
import { Examen } from '../interface/examen';
import { Detalles } from '../interface/detalles';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  user_id:any;
  sub:any;
  examenes:Examen[];
  detalles:Detalles[];


  constructor(private examen:ExamService,
    private activatedRoute:ActivatedRoute) { 
      this.getIdCal();
    }


    getUser(user_id){
      this.examen.getExWCal(user_id).
      subscribe((data: Detalles[]) => {
        this.detalles=data;
      })
     }

  ngOnInit() {
  }

  getIdCal(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.user_id = +params['idExa']; 
      this.getUser(this.user_id);
     
  });
  }

}
