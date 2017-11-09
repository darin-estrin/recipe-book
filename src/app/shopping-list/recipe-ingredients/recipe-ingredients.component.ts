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
  editMode = false;
  oldAmount: number;
  recipe: string;

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
    console.log(form);
    const oldRecipeItem = {
      name: this.recipe,
      amount: this.oldAmount
    }
    const recipeItem = {
      name: this.recipe,
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

  onClick(recipe: RecipeItem) {
    this.editMode = true;
    this.slForm.controls.name.setValue(recipe.name);
    this.slForm.controls.amount.setValue(recipe.amount);
    this.oldAmount = recipe.amount;
    this.recipe = recipe.name;
  }

  onDelete(form: NgForm) {
    let recipeItem = {
      name: this.recipe,
      amount: form.value.amount
    }
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
    this.editMode = false;
  }

}
