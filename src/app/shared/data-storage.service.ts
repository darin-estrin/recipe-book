import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import * as firebase from 'firebase';

@Injectable()
export class DataStorageService {
  ROOT_URL = 'https://recipe-book-f11e8.firebaseio.com/users';
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const user = this.authService.getUser();

    return this.http.put(`${this.ROOT_URL}/${user.uid}/recipes.json?auth=${user['De']}`, this.recipeService
    .getRecipes());
  }

  getRecipes():Recipe[] {
    //const user = this.authService.getUser();
    let fetchedRecipes: Recipe[];
    firebase.auth().onAuthStateChanged((user) => {
      this.http.get(`${this.ROOT_URL}/${user.uid}/recipes.json?auth=${user['De']}`)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          if(!recipes) { return; }

          for (let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          fetchedRecipes = recipes;
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
    })
    return fetchedRecipes;
  }
}