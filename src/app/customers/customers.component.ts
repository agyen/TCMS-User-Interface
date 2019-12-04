import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerserviceService } from './customerservice.service';
import { CustomersI } from './customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customerService: CustomerserviceService) { }
  customersObservable: Observable<CustomersI[]>;
  retrivedCustomers: Array<CustomersI> = [];


  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(cus => {
      this.retrivedCustomers = cus
      // console.log(cus)
    })
  }

}
