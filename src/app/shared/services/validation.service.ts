import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {
    validationMessages: any = {

    }
    getAllValidationMessages() {
        return this.validationMessages;
    }

    getValidationMessage(key: string) {
        return this.validationMessages[key];
    }
}