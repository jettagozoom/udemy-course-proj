import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredientName = this.ingredientName.nativeElement.value;
    const newIngredientAmount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.ingredientAdded.emit(newIngredient);
    this.ingredientName.nativeElement.value = '';
    this.ingredientAmount.nativeElement.value = 0;
  }

}
