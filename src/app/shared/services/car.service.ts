import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { Car } from "../models/car.interface";

@Injectable({
    providedIn: 'root'
})
export class CarService {
    // carLengthSubj: Subject<number> = new Subject<number>();
    changingCar!: Car;
    
    constructor(private http: HttpClient ) {

    }

    onAddCar(car: any) {
       return this.http.post('https://auth-angular-a05cb-default-rtdb.europe-west1.firebasedatabase.app/posts.json', car)
      }

      getAllCars(): Observable<any>{
          return this.http.get('https://auth-angular-a05cb-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
      }
    
      deleteCar(id:string): Observable<any>{
          return this.http.delete(`https://auth-angular-a05cb-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`)
      }

      editCar(car: any, id:string): Observable<any>{
          return this.http.patch(`https://auth-angular-a05cb-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`, car)
      }
}
