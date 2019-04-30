import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    // this.recipesService.ingredientsToShoppingList.emit(this.recipe.ingredients);
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
