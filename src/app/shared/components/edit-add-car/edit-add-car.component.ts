import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Car } from "../../models/car.interface";
import { CarService } from "../../services/car.service";

@Component({
    selector: 'app-list',
    templateUrl: './edit-add-car.component.html',
    styleUrls: ['./edit-add-car.component.css']
})
export class EditAddCarComponent implements OnInit, OnDestroy {
    car: Car = {
        make: '',
        model: '',
        year: 0,
        price: 0
    };
    constructor(private carService: CarService, private router: Router) {

    }

    ngOnInit() {
        // console.log(121212, );
        if(this.carService.changingCar) {
            this.car = this.carService.changingCar;
        }
    }

    onAddCar() {
        
        this.carService.onAddCar(this.car).subscribe(() => {
            //signal uxarkelu mas
            // this.carService.carLengthSubj.next(10);
            
            this.router.navigate(['/home'])
        });
    }

    onSaveCar() {
        
       this.carService.editCar(this.car,<string>this.car.id).subscribe((res)=>{
          console.log(res);
        delete this.car.id;
        this.router.navigate(['/home'])
          
       })
        
    }

    ngOnDestroy() { 
        this.carService.changingCar = undefined;
    }
}
