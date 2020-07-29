import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  closeModaleAnimated:boolean = false ;
  @Output() closeModaleEmit = new EventEmitter<any>()
  constructor() { }

  signUpGirl: boolean = false;
  signUpPeople :boolean = false;

  ngOnInit() {
  }

openSignUpPeople(){
  this.signUpGirl = true;
  this.signUpPeople = false ;
}
openSignUpGirls(){
  this.signUpGirl = false;
  this.signUpPeople = true ;
}
  closeModale() {
    this.closeModaleAnimated = true ;
    setTimeout(() => {
      this.closeModaleEmit.emit(false);      
    }, 500);
  }


}
