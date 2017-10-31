import { RecipeItem } from './../shared/recipe-item.model';
import { Ingredient } from './../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  private subscription: Subscription;
  recipeItems: RecipeItem[]

  constructor(private dataStorageService: DataStorageService,
              private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.recipeListChanged
    .subscribe(
      (recipeItems: RecipeItem[]) => {
        this.recipeItems = recipeItems;
      }
    );
    this.dataStorageService.fetchRecipeList();
  }

}
