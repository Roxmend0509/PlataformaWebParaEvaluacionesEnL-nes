import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public loggedIn :boolean;
public role;
id:any;
  constructor(
    private Auth:AuthService,
    private router:Router,
    private Token:TokenService,
  ) { 
    this.id=this.Token.getId();
    this.isAdmin();
    this.isStudent();
  }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn=value);
    this.id=this.Token.getId();
  }

  public isAdmin() {
    const user = localStorage.getItem('user') ;
    return user ? JSON.parse( localStorage.getItem('user') ).role === 'ADMIN' : null;
  }

  public isStudent() {
    const student = localStorage.getItem('user') ;
    return student ? JSON.parse( localStorage.getItem('user') ).role === 'STUDENT' : null;
  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');

  }
}
