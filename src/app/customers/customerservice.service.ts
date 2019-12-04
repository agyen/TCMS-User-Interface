import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomersI } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }
 private customerurl="https://tcms-customers-d2.herokuapp.com/api/v1/customers"

getAllCustomers(): Observable<CustomersI[]>{
  return this.http.get<CustomersI[]>(this.customerurl)
}
    
  
}
