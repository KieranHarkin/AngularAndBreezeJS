import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaRepositoryService } from './shared/pizza-repository.service';
import { CustomersListComponent } from './customers/customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PizzaRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
