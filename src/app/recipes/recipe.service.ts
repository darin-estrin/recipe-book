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
    recipe.name = recipe.name.replace(/(^\s+)|(\s+$)/g, '');
    recipe.imagePath = recipe.imagePath.replace(/(^\s+)|(\s+$)/g, '');
    recipe.description = recipe.description.replace(/(^\s+)|(\s+$)/g, '');
    recipe.directions = recipe.directions.replace(/(^\s+)|(\s+$)/g, '');
    if(recipe.ingredients) {
      recipe.ingredients.forEach((ingredient) => {
        ingredient.name = ingredient.name.toLowerCase().replace(/(^\s+)|(\s+$)/g, '');;
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
    newRecipe.name = newRecipe.name.replace(/(^\s+)|(\s+$)/g, '');
    newRecipe.description = newRecipe.description.replace(/(^\s+)|(\s+$)/g, '');
    newRecipe.directions = newRecipe.directions.replace(/(^\s+)|(\s+$)/g, '');
    newRecipe.imagePath = newRecipe.imagePath.replace(/(^\s+)|(\s+$)/g, '');
    newRecipe.ingredients.forEach((ingredient) => {
      ingredient.name = ingredient.name.toLowerCase().replace(/(^\s+)|(\s+$)/g, '');
    });
    this.shoppingListService.recipeUpdated(this.recipes[index], newRecipe);
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    let recipeItem = this.recipes[index];
    this.shoppingListService.removeRecipeItem(recipeItem);
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
      var name = ingredient.name;
      var amount = ingredient.amount *= recipeItem.amount;
      var temp = new Ingredient(name, amount);
      ingredients.push(temp);
    });
    this.shoppingListService.deleteRecipeIngredients(ingredients, recipeItem);
  }
}