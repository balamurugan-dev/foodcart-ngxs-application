import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/utils/models/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Cart[] = [
    { id: 1, name: 'Carrot', location: 'assets/icons/carrot.svg', desc: 'Five peaces in one package.', quantity: 0 },
    { id: 2, name: 'Cheese', location: 'assets/icons/cheese.svg', desc: 'Cheese 100 grams', quantity: 0 },
    { id: 3, name: 'Bananas', location: 'assets/icons/bananas.svg', desc: '5 piece banana.', quantity: 0 },
    { id: 4, name: 'IceCream', location: 'assets/icons/dessert.svg', desc: '2 scope ice cream', quantity: 0 },
    { id: 5, name: 'Milk', location: 'assets/icons/milk.svg', desc: 'Can of Milk.', quantity: 0 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
