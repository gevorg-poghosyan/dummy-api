import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Car } from "../../models/car.interface";
import { AuthenticationService } from "../../services/authentication.service";
import { CarService } from "../../services/car.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cars: any;
    carsArray: any;
    constructor(private carService: CarService,
        private router: Router,
        private auth: AuthenticationService) {
            // this.cars = this.carService.changingCar

    }

    ngOnInit(): void {
        this.getCars();
        //lselu mas =====
        // this.carService.carLengthSubj.subscribe((length: number) => {
        //     console.log(length)
        // })
        // ==============
        console.log(this.auth.isAuthenticated());

    }

    getCars() {
        this.carService.getAllCars().subscribe(res => {            
            this.cars = Object.entries(res);

        });

    }

    deleteCar(id: string) {
        this.carService.deleteCar(id).subscribe(() => {
            this.cars = this.cars.filter((item: any) => {
                return item[0] !== id
            })
        })
    }

    editCar(car: any, id: string) {
        // this.carService.editCar(car, id).subscribe((res) => {
        //     console.log((res));

        // })
        // console.log(car, id);
        car.id = id;
        this.carService.changingCar = car
        this.router.navigate(['list'])

    }

    route() {
        this.router.navigate(['list'])
    }
}