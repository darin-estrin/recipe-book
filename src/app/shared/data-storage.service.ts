import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  ROOT_URL = 'https://recipe-book-f11e8.firebaseio.com';
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const user = this.authService.getUser();

    console.log(`${this.ROOT_URL}/users/${user.uid}/recipes.json?auth=${user['De']}`);
    return this.http.put(`${this.ROOT_URL}/users/${user.uid}/recipes.json?auth=${user['De']}`, this.recipeService
    .getRecipes());
  }

  getRecipes() {
    const user = this.authService.getUser();

    this.http.get(`${this.ROOT_URL}/users/${user.uid}/recipes.json?auth=${user['De']}`)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.recipes = recipes;
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}