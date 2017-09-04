
import { Component } from '@angular/core';

@Component({
  selector: "greeting",
  template: ` 
  
  hello {{username}}
  <br>
  <input type ="text" [value]="username" />

<button (click)="onClick()" >save</button>

  
  `
})
export class mycomponent { 
    
    username: string="aman";

    onClick(){

        console.log("click");
    }

 }
