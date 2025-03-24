import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent {
  products = [
    { name: 'Laptop', price: 50000, details: 'High-performance laptop', showDetails: false },
    { name: 'Smartphone', price: 25000, details: 'Latest Android device', showDetails: false },
    { name: 'Tablet', price: 30000, details: 'Lightweight and powerful', showDetails: false }
  ];

  toggleDetails(index: number) {
    this.products[index].showDetails = !this.products[index].showDetails;
  }  
}
