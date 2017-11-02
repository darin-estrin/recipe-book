import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { RecipeItem } from './../shared/recipe-item.model';
import 'rxjs/Rx';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    if (recipes) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipeItem(recipeItem: RecipeItem) {
    this.shoppingListService.addRecipeItem(recipeItem);
  }

  addRecipe(recipe: Recipe) {
    if(recipe.ingredients) {
      recipe.ingredients.forEach((ingredient) => {
        ingredient.name = ingredient.name.toLowerCase();
      });
    }
    if (!this.recipes) {
      this.recipes = [];
    }
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipeIngredients(recipeItem: RecipeItem, oldRecipeItem: RecipeItem) {
    let ingredients = [];
    let tempIngredients;
    for (var i = 0; i < this.recipes.length; i++) {
      if (recipeItem.name === this.recipes[i].name) {
        tempIngredients = this.recipes[i].ingredients;
      }
    }
    tempIngredients.forEach(ingredient => {
      var temp = { name: ingredient.name, amount: ingredient.amount };
      ingredients.push(temp);
    });
    this.shoppingListService.updateRecipeIngredients(recipeItem, oldRecipeItem, ingredients);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    newRecipe.ingredients.forEach((ingredient) => {
      ingredient.name = ingredient.name.toLowerCase();
    });
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipeItem(recipeItem: RecipeItem) {
    let ingredients = [];
    let tempIngredients;
    for (var i = 0; i < this.recipes.length; i++) {
      if (recipeItem.name === this.recipes[i].name) {
        tempIngredients = this.recipes[i].ingredients;
      }
    }
    tempIngredients.forEach(ingredient => {
      var temp = { name: ingredient.name, amount: ingredient.amount *= recipeItem.amount };
      ingredients.push(temp);
    });
    this.shoppingListService.deleteRecipeIngredients(ingredients, recipeItem);
  }
}