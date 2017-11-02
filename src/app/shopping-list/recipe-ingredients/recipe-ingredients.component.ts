import { RecipeService } from './../../recipes/recipe.service';
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
              private dataStorageService: DataStorageService,
              private recipeService: RecipeService) { }

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
    const oldRecipeItem = JSON.parse(form.value.name);
    const recipeItem = {
      name: oldRecipeItem.name,
      amount: form.value.amount
    }
    if (oldRecipeItem.amount === recipeItem.amount) {
      return this.onClear();
    }
    this.recipeService.addRecipeIngredients(recipeItem, oldRecipeItem);
    this.shoppingListService.updateRecipeItem(recipeItem);
    this.onClear();
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
    this.dataStorageService.storeRecipeList().subscribe(
      (response: Response) => response
    );
  }

  onDelete(form: NgForm) {
    if (form.value.name === '' || form.value.name === 'Please Select a Recipe') {
      return this.onClear();
    }
    let recipeItem = JSON.parse(form.value.name);
    this.recipeService.deleteRecipeItem(recipeItem);
    this.onClear();
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
    this.dataStorageService.storeRecipeList().subscribe(
      (response: Response) => response
    );
  }

  onClear() {
    this.slForm.reset();
    this.slForm.controls.name.setValue('Please Select a Recipe');
  }

}
