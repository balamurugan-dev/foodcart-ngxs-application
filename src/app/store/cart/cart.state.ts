import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CartAddFood, CartAddFoodQuantity } from './cart.actions';
import { Cart } from './../../utils/models/cart';

export class CartStateModel {
  public items: Cart[];
  public selectedItems: Cart[];
}

const defaults = {
  items: [
    { id: 1, name: 'Carrot', location: 'assets/icons/carrot.svg', desc: 'Five peaces in one package.', quantity: 0 },
    { id: 2, name: 'Cheese', location: 'assets/icons/cheese.svg', desc: 'Cheese 100 grams', quantity: 0 },
    { id: 3, name: 'Bananas', location: 'assets/icons/bananas.svg', desc: '5 piece banana.', quantity: 0 },
    { id: 4, name: 'IceCream', location: 'assets/icons/dessert.svg', desc: '2 scope ice cream', quantity: 0 },
    { id: 5, name: 'Milk', location: 'assets/icons/milk.svg', desc: 'Can of Milk.', quantity: 0 },
  ],
  selectedItems: []
};

@State<CartStateModel>({
  name: 'cart',
  defaults
})
@Injectable()
export class CartState {

  @Selector()
  static foodList(state: CartStateModel) {
    return state.items;
  }

  @Action(CartAddFood)
  addFood({ getState, patchState, setState }: StateContext<CartStateModel>, { food }: CartAddFood) {
    const state = getState();
    console.log(food);
    patchState({ selectedItems: [...state.selectedItems, food] });
  }

  @Action(CartAddFoodQuantity)
  addFoodQuantity({ getState, patchState, setState }: StateContext<CartStateModel>, { id }: CartAddFoodQuantity) {
    const state = getState();
    const newState = state.selectedItems.map(food => {
      if (food.id === id) {
        return { ...food, quantity: food.quantity + 1 };
      }
      return food;
    });
    patchState({ selectedItems: [...newState] });
  }
}
