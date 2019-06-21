import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../servicesAlum/alumno.service';
import { Form } from '@angular/forms';
import { Alumno } from '../interface/alumno';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit{
  id:any;
  title:string ='Añadir Examen Nuevo';

  public form={
      email:null,
      name:null,
      password:null,
    password_confirmation:null
    };
  
 alumno:Alumno ={
    email:null,
    name:null,
    role:null,
    password:null,
    password_confirmation:null
  };

  
  public error = [];
  editing:boolean=false; //Se crea otra variable de tipo boolean y se le asigna false por default
  alumnos:Alumno[];
  constructor(private Jarwis:JarwisService,
    private Token:TokenService,
    private examService:AlumnoService,
    private activatedRoute:ActivatedRoute,
    private router: Router) {
      this.id=this.activatedRoute.snapshot.params['id'];
      if(this.id){
        this.title='Editar Alumno';
        this.editing=true;
        this.examService.get().
        subscribe((data: Alumno[]) => {
          this.alumnos=data;
          this.alumno = this.alumnos.find((a)=>{return a.id
             == this.id});
        })
        }else{
          this.editing=false;
        }
    

     }

    
  
onSubmit(){
  this.Jarwis.signup(this.form).subscribe(
    data=> this.handleResponse(data),
    error=>this.handleError(error)
  );
}

handleResponse(data){
  this.Token.handle(data.access_token);
  this.router.navigateByUrl('/profile');
}

handleError(error){
  this.error=error.error.errors;
}
  ngOnInit() {
  }



addUser(){
  if(this.editing){
    this.examService.put(this.alumno).subscribe((data)=>{
      alert('Alumno actualizado');
    });
  
}
}
}
/*
  title:string='ALUMNO NUEVO';
  alumno: Alumno={
    name:null,
    lastname:null,
    email:null,
    phone:null,
    password:null
  };

  id:any;
  editing:boolean=false;
  alumnos: Alumno[];
  constructor (private alumnoService:AlumnoService,private activatedRoute:ActivatedRoute){
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing=true;
      this.alumnoService.get().
      subscribe((data: Alumno[]) => {
        this.alumnos=data;
        this.alumno = this.alumnos.find((a)=>{return a.id == this.id});
      })

    }else{
      this.editing=false;
    }
  }
  
  ngOnInit(){ 
  }

  

  addUser(){
    if(this.editing){
      this.alumnoService.put(this.alumno).subscribe((data)=>{
        alert('Alumno actualizado');
      });
    }else{
      this.alumnoService.save(this.alumno).subscribe((data)=>{
        alert('Alumno agregado');
      });
    }
    
  }
  
     }
*/

