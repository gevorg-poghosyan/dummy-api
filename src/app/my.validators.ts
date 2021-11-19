import { FormControl } from "@angular/forms";

export class MyValidators {
   static toCheckedPassword(control: FormControl): {[key: string]: boolean} | null {
      if(control.parent?.value['password'] !== control.value) {
          return {'notSame': true}
      };
       return null;
       
   }

   static toCheckedPhoneNumber(control: FormControl) : {[key: string]: boolean } | null {
       let pattern = /[\+][0-9]{11}/g
       if(control.value.search(pattern)){
        return {'invalidPhoneNumber': true}
       }
       return null
   }
}