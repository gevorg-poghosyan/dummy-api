import { FormControl } from "@angular/forms";

export class MyValidators {
    pass: string;
    confpass: string;

    constructor(pass: string, confpass: string){
      this.pass = pass;
      this.confpass = confpass; 
    }
   static toCheckedPassword(control: FormControl): {[key: string]: boolean} | null {
    //    debugger
       console.log(control.parent?.value['password'] === control.value);
       return null;
       
   }
}