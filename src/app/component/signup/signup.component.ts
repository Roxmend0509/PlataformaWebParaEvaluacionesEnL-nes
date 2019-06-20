import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form ={
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };

  
  public error = [];

  constructor(private Jarwis:JarwisService,
    private Token:TokenService,
    private router: Router,
    private Notify:SnotifyService) { }

  
onSubmit(){
  
  this.Jarwis.signup(this.form).subscribe(
    data=> this.handleResponse(data),
    error=>this.handleError(error)
  );
}

handleResponse(data){
  let _router = this.router;
    this.Notify.confirm('Usuario Agregado', {
      buttons:[
        {text: 'Ok', 
        action: toster =>{
           _router.navigateByUrl('/alumno'),
           this.Notify.remove(toster.id)
          }
      },
      ]
    })
}

handleError(error){
  this.error=error.error.errors;
}
  ngOnInit() {
  }

}
