import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  ingredientsToShoppingList = new EventEmitter<Ingredient[]>();

  private recipes: Recipe[] = [
    new Recipe('Pasta and Noodles',
      'Penne Arrabiata',
      'https://images.media-allrecipes.com/images/56589.png',
      [
        new Ingredient('Penne Pasta', 1),
        new Ingredient('Cherry Tomatoes', 40),
        new Ingredient('Fresh Basil', 1),
      ]),
    new Recipe('Baja Shrimp Tacos With Creamy Slaw',
      `We love a crispy fried fish taco. But we might like this sweet shrimp
      version even better than the original. A tangy cabbage slaw helps to balance
      the richness of the fried shrimp but we took extra steps to keep the batter light.
      Cutting the flour with a little cornstarch prevents it from getting tough
      (because cornstarch has no gluten), but you can substitute rice flour or
      arrowroot if you have it. The bubbles in the seltzer add air so the batter
      stays crisp and light. Pro tip: whisking your batter over an ice bath will
      preserve more seltzer bubbles. Keep it cold until ready to use.`,
      'https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/1492029558/shrimp-tacos.jpg?itok=e_wp4B5u',
    [
          new Ingredient('Shrimp', 8),
          new Ingredient('Flour Tortillas', 8),
          new Ingredient('Red Cabbage', 8),
          new Ingredient('Cilantro', .333),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipe(id: number) {
     return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
