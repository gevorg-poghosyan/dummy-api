import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

 count: number = 0;

 increase(event: Event) : void {
   this.count++;
   console.log(event);
 };
 name: string="Tom"; 

  constructor() { this.log(`constructor`); }

  ngOnInit() { this.log(`onInit`); }

  
  private log(msg: string){
    console.log(msg);
    
  }

  ngOnDestroy() { this.log(`onDestroy`); }
 
}
