import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Car } from "../../models/car.interface";
import { CarService } from "../../services/car.service";

@Component({
    selector: 'app-list',
    templateUrl: './List.Component.html',
    styleUrls: ['./List.Component.css']
})
export class ListComponent {
    car: Car = {
        make:'',
        model:'',
        year:0,
        price:0
    };
    constructor(private carService: CarService, private router: Router){
    }

    onAddCar(){ 
         this.carService.onAddCar(this.car).subscribe(res => {
             console.log(res);
             this.router.navigate(['/home']);
         });
    }
}
