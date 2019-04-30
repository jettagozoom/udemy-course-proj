import { Component, OnInit, Input, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServcie: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeServcie.recipeSelected.emit(this.recipe);
  }

}
