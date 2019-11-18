import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test description',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is a test description 2',
      // tslint:disable-next-line: max-line-length
      'https://assets.marthastewart.com/styles/wmax-1500/d39/crepes-recipe-0419-9085-lw-076-0746463d/crepes-recipe-0419-9085-lw-076-0746463d_horiz.jpg?itok=jnZ50ElT'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
