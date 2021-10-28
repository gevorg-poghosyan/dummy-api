import { Component, OnInit } from '@angular/core';
import { UsersListDataModel } from '../shared/models/user-list-data.model';
import { DummyApiService } from '../shared/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent implements OnInit {
  data!: UsersListDataModel;
  user!: any;
  isVisible = false;
  constructor(private dummyapi: DummyApiService) { }

  ngOnInit(): void {
    // debugger;
    this.dummyapi.getUsers().subscribe((data) => {
      this.data = data
      console.log(data);

    })



  }
  onIsVisibleChange(isVisible: boolean) {
    console.log(isVisible)
  }

  showUser(id: string): void {
    this.dummyapi.getSingleUser(id).subscribe((user) => {
      this.user = user;
      console.log(user);


    })

    this.isVisible = true

  }

  getModal(e: boolean) {
    console.log(e);
    this.isVisible = e;

  }

}
