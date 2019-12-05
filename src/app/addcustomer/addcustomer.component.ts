import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerserviceService } from '../customers/customerservice.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  newCustomerForm = new FormGroup({
    customer_id: new FormControl(0),
    customer_name: new FormControl(''),
    customer_address: new FormControl(''),
    customer_email: new FormControl(''),
    customer_telephone: new FormControl(''),
    customer_level: new FormControl('')
  });

  constructor(private customerService: CustomerserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.newCustomerForm.value);
    this.customerService
        .addCustomer(this.newCustomerForm.value)
        .subscribe(h => console.log(h))
    // alert(JSON.stringify(this.newCustomerForm.value))
  }
}
