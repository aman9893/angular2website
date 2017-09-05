
import { Component } from '@angular/core';
import { login } from '../form/login';

@Component({
  selector: 'book',
  templateUrl: "./login.html",
  styleUrls:['./login.css']
})


export class formcomponent  { 
    

    //model =new login (1, "aman","amanjin" ,'http//ww');
     model =new login(1, "","" ,'http//');
    
    
    constructor(){}


get currentBook(){
     
    return JSON.stringify(this.model);   ///yaha data json form m aaye ga niche form k
}

}