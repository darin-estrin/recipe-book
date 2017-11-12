import { Ingredient } from './ingredient.model';
import { RecipeItem } from './recipe-item.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod } from '@angular/http';
import 'rxjs/Rx';
import * as firebase from 'firebase';

@Injectable()
export class DataStorageService {
  ROOT_URL = 'https://recipe-book-f11e8.firebaseio.com/users';
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService,
              private shoppingListService: ShoppingListService) {}

  storeRecipes() {
    const user = this.authService.getUser();

    return this.http.put(`${this.ROOT_URL}/${user.uid}/recipes.json?auth=${user['De']}`, this.recipeService.getRecipes());
  }

  deleteRecipe(id: number) {
    const user = this.authService.getUser();
    const recipes = this.recipeService.getRecipes();
    
    this.http.delete(`${this.ROOT_URL}/${user.uid}/recipes/${id}.json?auth=${user['De']}`, {
      method: RequestMethod.Delete
    })

    this.http.put(`${this.ROOT_URL}/${user.uid}/recipes.json?auth=${user['De']}`,
    recipes).subscribe(
      (response: Response) => response
    );

  }

  getRecipes():Recipe[] {
    const user = this.authService.getUser();
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

  storeShoppingList() {
    const user = this.authService.getUser();
    return this.http.put(`${this.ROOT_URL}/${user.uid}/shoppinglist.json?auth=${user['De']}`,
    this.shoppingListService.getIngredients());
  }

  storeRecipeList() {
    const user = this.authService.getUser();
    return this.http.put(`${this.ROOT_URL}/${user.uid}/recipeList.json?auth=${user['De']}`,
    this.shoppingListService.getRecipeList());
  }

  storeAdditiontalIngredients() {
    const user = this.authService.getUser();
    return this.http.put(`${this.ROOT_URL}/${user.uid}/extraIngredients.json?auth=${user['De']}`, 
    this.shoppingListService.getExtraIngredients());
  }

  fetchShoppingList():Ingredient[] {
    let fetchedList: Ingredient[];
    firebase.auth().onAuthStateChanged((user) => {
      this.http.get(`${this.ROOT_URL}/${user.uid}/shoppinglist.json?auth=${user['De']}`)
      .map(
        (response: Response) => {
          const list: Ingredient[] = response.json();
          fetchedList = list;
          return list;
        }
      ).subscribe(
        (list: Ingredient[]) => {
          this.shoppingListService.setIngredients(list);
        }
      )
    })
    return fetchedList;
  }

  fetchExtraIngredients(): Ingredient[] {
    let fetchedList: Ingredient[];
    firebase.auth().onAuthStateChanged(user => {
      this.http.get(`${this.ROOT_URL}/${user.uid}/extraIngredients.json?auth=${user['De']}`)
        .map(
          (response: Response) => {
            const list: Ingredient[] = response.json();
            fetchedList = list;
            return list;
          }
        ).subscribe(
          (list: Ingredient[]) => {
            this.shoppingListService.setExtraIngredients(list);
          }
        )
    })
    return fetchedList;
  }

  fetchRecipeList(): RecipeItem[] {
    let fetchedList: RecipeItem[];
    firebase.auth().onAuthStateChanged(user => {
      this.http.get(`${this.ROOT_URL}/${user.uid}/recipeList.json?auth=${user['De']}`)
        .map(
          (response: Response) => {
            const list: RecipeItem[] = response.json();
            fetchedList = list;
            return list;
          }
        ).subscribe(
          (list: RecipeItem[]) => {
            this.shoppingListService.setRecipeList(list);
          }
        )
    })
    return fetchedList;
  }

}