import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarService } from "../../services/car.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    data: any;
    dataArray: any;
    constructor(private carService: CarService,
                private router: Router){

    }

    ngOnInit(): void {
        this.getCars()
    }

    getCars(){
        this.carService.getAllCars().subscribe(res => {
            this.data = Object.entries(res);      
        });
        
    }

    deleteCar(id: string){
        this.carService.deleteCar(id).subscribe(() => {
         this.data = this.data.filter((item: any) => {
          return  item[0]!== id
         })
        })
    }

    editCar(car: any, id:string){
        // this.carService.editCar(car,id).subscribe((res)=>{
        //     console.log((res));
            
        // })]
        this.router.navigate(['list'])



    }
}