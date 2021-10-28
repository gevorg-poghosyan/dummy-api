import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DummyApiService } from './shared/services/dummy-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular-app';
  name: string = 'tom';
  age: number = 24;
  users: any;

  constructor() {

  }

}
