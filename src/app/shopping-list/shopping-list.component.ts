import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    shoppingList: Ingredient[];
    private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.shoppingList = this.shoppingListService.getShoppingList();
        this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.shoppingList = ingredients;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onEditItem(index: number) {
        this.shoppingListService.startedEditing.next(index);
    }

}
