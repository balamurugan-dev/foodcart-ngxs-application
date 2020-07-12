import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { CartAddFood, CartAddFoodQuantity } from './cart.actions';
import { Cart } from './../../utils/models/cart';

export class CartStateModel {
  public items: Cart[];
}

const defaults = {
  items: []
};

@State<CartStateModel>({
  name: 'cart',
  defaults
})
@Injectable()
export class CartState {

  @Action(CartAddFood)
  addFood({ getState, setState }: StateContext<CartStateModel>, { food }: CartAddFood) {
    const state = getState();
    console.log(food);
    setState({ items: [...state.items, food] });
  }

  @Action(CartAddFoodQuantity)
  addFoodQuantity({ getState, setState }: StateContext<CartStateModel>, { id }: CartAddFoodQuantity) {
    const state = getState();
    const newState = state.items.map(food => {
      if (food.id === id) {
        return { ...food, quantity: food.quantity + 1 };
      }
      return food;
    });
    setState({ items: [...newState] });
  }
}
