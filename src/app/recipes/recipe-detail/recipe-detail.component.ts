import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    id: number;
    recipe: Recipe;

    constructor(private recipesService: RecipesService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipesService.getRecipe(+params['id']);
        });
    }

    onAddToShoppingList() {
        this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onEditRecipe() {
        // Programatically navigate
        this.router.navigate(['edit'], {relativeTo: this.route});

        // This form uses a more complex router, going up a level
        // and constructing the route '../id/edit'
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});

        // If we simple used the 'routerLink' in the template,
        // we wouldn't have needed to store 'this.id', a create this method.
    }

}
