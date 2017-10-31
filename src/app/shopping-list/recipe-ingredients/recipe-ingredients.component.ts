import { RecipeListComponent } from './../../recipes/recipe-list/recipe-list.component';
import { Response } from '@angular/http';
import { RecipeItem } from './../../shared/recipe-item.model';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './../shopping-list.service';
import { DataStorageService } from './../../shared/data-storage.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  recipeListSubscription: Subscription;
  recipeItems: RecipeItem[];

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.recipeListSubscription = this.shoppingListService.recipeListChanged
    .subscribe(
      (recipeItems: RecipeItem[]) => {
        this.recipeItems = recipeItems;
      }
    );
    this.dataStorageService.fetchRecipeList();
  }

  onAddItem(form: NgForm) {
    const ingredient = {
      name: form.value.name,
      amount: form.value.amount
    }
    this.shoppingListService.addIngredient(ingredient);
    // this.shoppingListService.addRecipeIngredient(ingredient);
    form.reset();
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
    this.dataStorageService.storeRecipeList().subscribe(
      (response: Response) => response
    );
  }

  onClear() {
    this.slForm.reset();
  }

}
