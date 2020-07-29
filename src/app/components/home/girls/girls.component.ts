import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

  @Output() open_user = new EventEmitter<any>();
  users= [
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    {
      user:"men.jpg"
    },
    



]
  constructor() { }

  ngOnInit() {
  }


  open_modale_user(user){
    this.open_user.emit(user);
  }
}
