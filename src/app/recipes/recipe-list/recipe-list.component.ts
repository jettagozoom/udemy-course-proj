import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pasta and Noodles',
      'Penne Arrabiata',
      'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('Baja Shrimp Tacos With Creamy Slaw',
      'We love a crispy fried fish taco. But we might like this sweet shrimp' +
      'version even better than the original. A tangy cabbage slaw helps to balance' +
      'the richness of the fried shrimp but we took extra steps to keep the batter light.' +
      'Cutting the flour with a little cornstarch prevents it from getting tough' +
      '(because cornstarch has no gluten), but you can substitute rice flour or' +
      'arrowroot if you have it. The bubbles in the seltzer add air so the batter' +
      'stays crisp and light. Pro tip: whisking your batter over an ice bath will' +
      'preserve more seltzer bubbles. Keep it cold until ready to use.',
      'https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/1492029558/shrimp-tacos.jpg?itok=e_wp4B5u')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
