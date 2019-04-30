import {Component, OnInit, EventEmitter, ViewChild, ElementRef} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredientName = this.ingredientName.nativeElement.value;
    const newIngredientAmount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
