import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getU(){
    return JSON.parse( localStorage.getItem('user') );
  }
}
