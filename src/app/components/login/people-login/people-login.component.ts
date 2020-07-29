import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-people-login',
  templateUrl: './people-login.component.html',
  styleUrls: ['./people-login.component.css']
})
export class PeopleLoginComponent implements OnInit {
  loader: boolean;

  constructor( private _route : Router) { }

  ngOnInit() {
  }

  login(){
    this.loader = true ;
    setTimeout(() => {
      this._route.navigate(['/Landing'])
    }, 3000);
    
  }

}
