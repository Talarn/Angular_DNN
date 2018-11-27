import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  validEmail = 'Test';
  validPassword = '1234';
  isConnected = false;

  login(email, password){
    if(email == this.validEmail && password == this.validPassword){
      this.isConnected = true;
    }
  }

  logout(){
    this.isConnected = false;
  }


}