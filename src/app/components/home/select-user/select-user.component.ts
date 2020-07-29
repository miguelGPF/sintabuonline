import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  @Output() close = new EventEmitter<any>()
  closeModaleAnimated: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeModale() {

    this.closeModaleAnimated = true; 
    setTimeout(() => {
      this.close.emit(false);      
    }, 300);    
  }
  
}
