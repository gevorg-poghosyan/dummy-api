import { Component, OnInit } from "@angular/core";
import { CarService } from "../../services/car.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    data: string = '';
    constructor(private carService: CarService){

    }

    ngOnInit(): void {
        this.getCars()
    }

    getCars(){
        this.carService.getAllCars().subscribe(res => {
            this.data += res;
            console.log(res);
            
        });
    }
}