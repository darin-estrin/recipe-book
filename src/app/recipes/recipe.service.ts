import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import 'rxjs/Rx';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipes: Recipe[];
  ROOT_URL = 'https://recipe-book-f11e8.firebaseio.com/users';

  constructor(private shoppingListService: ShoppingListService,
              private authService: AuthService,
              private http: Http) {}

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
    // console.log(index);
    // const user = firebase.auth().onAuthStateChanged((user) => {
    //   console.log('url: ',`${this.ROOT_URL}/${user.uid}/recipes/${index}.json?auth=${user['De']}`)
    //   this.http.get(`${this.ROOT_URL}/${user.uid}/recipes/${index}.json?auth=${user['De']}`)
    //     .map(
    //       (response: Response) => {
    //         console.log('hi');
    //         console.log(response.json());
    //       }
    //     ).subscribe
    // })
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}