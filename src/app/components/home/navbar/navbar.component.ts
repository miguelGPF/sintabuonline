import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Output() openSignUp = new EventEmitter<any>();
  @Output() sex = new EventEmitter<any>();
  language: string;
  sex_selected : string;
  constructor(
    private route : Router,
    private _translate : TranslateService
  ) { }

  ngOnInit() {

    this.changeLanguage(localStorage.getItem("language"));
    this.categoryOfSex(localStorage.getItem("sex"));

  }

  signUp(){
    this.openSignUp.emit(true);

  }

  changeLanguage(language) {
    if(!language) {
      this._translate.use("sp");
      this.language="sp";      
      localStorage.setItem("language","sp");

    }else {
      this._translate.use(language);
      localStorage.setItem("language",language);
      this.language = language;
    }

  }
  login(){
    this.route.navigate(['Login']);
  }

  categoryOfSex(sex){
    if(!sex){
      this.sex.emit("girls");
      localStorage.setItem("sex","girls");
      this.sex_selected = "girls";

    }else {
      this.sex.emit(sex);
      this.sex_selected = sex;
      localStorage.setItem("sex",sex);
    }
    console.log(this.sex_selected)


  }


}
