import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerserviceService } from './customerservice.service';
import { CustomersI } from './customers';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  searchForm = new FormGroup({
    customer_name: new FormControl('')
  })

  constructor(private customerService: CustomerserviceService) { }
  customersObservable: Observable<CustomersI[]>;
  retrivedCustomers: Array<CustomersI> = [];
  availableCustomers: Array<CustomersI> = [];


  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(cus => {
      this.retrivedCustomers = cus
      // console.log(cus)
    })
  }
    onSubmit(){
      this.customerService
          .searchCustomer(this.searchForm.value.customer_name)
          .subscribe(h => {this.retrivedCustomers=h})
      //-------------------------------------------------------------//
    //   this.customerService
    //       .searchCustomer(this.searchForm.value)
    //       .subscribe(search => {this.availableCustomers = search}))
          

      //    alert(JSON.stringify(this.searchForm.value))
        }

}
