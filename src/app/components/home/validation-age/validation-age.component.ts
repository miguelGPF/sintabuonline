import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-validation-age',
  templateUrl: './validation-age.component.html',
  styleUrls: ['./validation-age.component.css']
})
export class ValidationAgeComponent implements OnInit {

  constructor() { }

  @Output() closeModale = new  EventEmitter<any>();
  closeModaleAnimated : boolean = false ; ;

  ngOnInit() {
  }

  validateAge(){
    
    this.closeModaleAnimated =  true ; 
    localStorage.setItem("validateAge","true");
    setTimeout(() => {
      this.closeModale.emit(false);      
    }, 300);
    
  }

}
