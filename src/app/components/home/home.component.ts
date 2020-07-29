import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  language: string;
  sex: string;
  constructor( public _translate : TranslateService) { }
  validateAge: boolean;
  signUp : boolean;
  select_user: boolean;

  ngOnInit() {
    this.validateAgeStorage();
  }


  validateAgeStorage(){
   if(localStorage.getItem("validateAge")){
     this.validateAge = false ;
   }else {
     this.validateAge = true ;
   }
  }

  open_user_receive(user){
    console.log("receive",user)
    this.select_user = true ;
    

  }



}
