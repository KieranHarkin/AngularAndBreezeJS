import { Component, OnInit } from "@angular/core";
import { PizzaRepositoryService } from "../shared/pizza-repository.service";
import { Customer } from "../model/customer";

@Component({
    selector: 'pizza-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    customers: Customer[];

    constructor(private _pizzaRepository: PizzaRepositoryService) {}



    ngOnInit() {
        this._pizzaRepository.getCustomers().then(customers => this.customers = customers, error => console.error(error));
    }

}