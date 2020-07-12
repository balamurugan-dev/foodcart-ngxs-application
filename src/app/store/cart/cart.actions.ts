import { Cart } from 'src/app/utils/models/cart';

export class CartAddFood {
  static readonly type = '[Cart] Add Food';
  constructor(public food: Cart) { }
}

export class CartAddFoodQuantity {
  static readonly type = '[Cart] Add Food Quantity';
  constructor(public id: number) { }
}