import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/utils/models/cart';
import { Select } from '@ngxs/store';
import { CartState } from 'src/app/store/cart/cart.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(CartState.foodList) foods$: Observable<Cart[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
