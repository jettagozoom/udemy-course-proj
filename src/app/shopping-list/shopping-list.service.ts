import {Subject} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientAdded = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {
    }

    getShoppingList() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // the spread operator in use
        this.ingredientAdded.next(this.ingredients.slice());
    }

}
