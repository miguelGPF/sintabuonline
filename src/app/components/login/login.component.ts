import { Component, OnInit } from '@angular/core';
import  { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loader : boolean = false ;
  constructor(private _route : Router) { }

  ngOnInit() {
  }
  
  login(){
    this.loader = true ;
    setTimeout(() => {

      this._route.navigate(['/Landing'])
    }, 1000);
    
  }
}
