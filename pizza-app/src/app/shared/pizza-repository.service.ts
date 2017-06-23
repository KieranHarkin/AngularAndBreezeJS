import { Injectable } from "@angular/core";
import { Customer } from "../model/customer";

@Injectable()
export class PizzaRepositoryService {
    
    constructor() {}

    getCustomers() : Promise<Customer[]> {
        let promise = new Promise<Customer[]>((resolve, reject) => {
            let customers = this.getCustomerDummData();
            resolve(customers);
        });
        return promise;
    }

    private getCustomerDummData(): Customer[] {
        let cust1 = new Customer();
        cust1.firstName = "Fred";
        cust1.lastName = "Flinstone";
        let cust2 = new Customer();
        cust2.firstName = "Barney";
        cust2.lastName = "Rubble";
        let customers: Customer[] = [cust1, cust2];
        return customers;
    }
}
