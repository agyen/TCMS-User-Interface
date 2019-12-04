import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customers= [
    {id: 101, name: "Isaac Agyen", email: "ike@gmail.com", level:"Premium"},
    {id: 102, name: "Isaac Agyen", email: "ike@gmail.com", level:"Premium"},
    {id: 103, name: "Isaac Agyen", email: "ike@gmail.com", level:"Premium"},
    {id: 104, name: "Isaac Agyen", email: "ike@gmail.com", level:"Premium"},
    {id: 105, name: "Isaac Agyen", email: "ike@gmail.com", level:"Premium"}

  ]

}
