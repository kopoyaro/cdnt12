import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-switch-toggle',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.css']
})
export class SwitchToggleComponent {
 x = false;

  bouboulean(){
    this.x=!this.x;
    if(this.x){
      console.log("1")
    }
    else{
      console.log("0")
    }

  }

  constructor() { 
    

  }


}
