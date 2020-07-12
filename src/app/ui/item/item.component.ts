import { Component, OnInit, Input } from '@angular/core';
import { CartAddFood, CartAddFoodQuantity } from 'src/app/store/cart/cart.actions';
import { Store } from '@ngxs/store';
import { Cart } from 'src/app/utils/models/cart';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() food: Cart;
  showAddRemove = false;
  count = 1;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  incCount() {
    if (this.count > 0) {
      this.count = this.count + 1;
      this.store.dispatch(new CartAddFoodQuantity(this.food.id));
    }
  }

  addItem() {
    this.showAddRemove = true;
    // dispatch(CartAction());
    this.store.dispatch(new CartAddFood({ ...this.food, quantity: this.food.quantity + 1 }));
  }

  decCount() {
    if (this.count > 1) {
      this.count = this.count - 1;
    }
  }

}
