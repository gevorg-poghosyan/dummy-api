import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { UsersListDataModel } from "../models/user-list-data.model";

@Injectable({providedIn: 'root'})
export class DummyApiService {
    headers = new HttpHeaders();
    url = environment.baseURL;


    constructor(private httpClient: HttpClient) {
        this.headers = this.headers.set('app-id', '61716e444e0c5d19aef38796');
    }

    getUsers() {
        return this.httpClient.get<UsersListDataModel>(`${this.url}?limit=10`, {headers: this.headers});
    }

    getSingleUser(id : string){
        return this.httpClient.get<any>(`${this.url}/${id}`, {headers: this.headers})
    }

    // getUser(id) {
        
    //     this.httpClient.get(`https://dummyapi.io/data/v1/user/${id}`, {headers: this.headers}).subscribe((value) => {
    //         console.log('datan ekav', value);
    //         this.users = value;
    //     })    
    // }
}