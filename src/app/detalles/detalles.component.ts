import { Component, OnInit } from '@angular/core';
import { ExamService } from '../servicesExamen/examen.service';
import { ActivatedRoute } from '@angular/router';
import { Examen } from '../interface/examen';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  examen_id:any;
  sub:any;
  examenes:Examen[];


  constructor(private examen:ExamService,
    private activatedRoute:ActivatedRoute) { 
      this.getIdCal();
    }


    getUser(examen_id){
      this.examen.getExWCal(examen_id).
      subscribe((data: Examen[]) => {
        this.examenes=data;
      })
     }

  ngOnInit() {
  }

  getIdCal(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.examen_id = +params['idExa']; 
      this.getUser(this.examen_id);
     
  });
  }

}
