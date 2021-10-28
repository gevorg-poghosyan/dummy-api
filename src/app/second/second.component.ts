import { Component, ContentChild, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @ViewChild('userNamess') userNamess!: ElementRef;
  @ViewChild('login') login!: LoginComponent;
  @Input() userName: string = '';
  @Input() userAge: number = 25;
  
  constructor() { }

  ngOnChanges(changes: SimpleChange){
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.userNamess);
  }

  ngAfterViewInit() {
    console.log('333', this.login);
  }



}
