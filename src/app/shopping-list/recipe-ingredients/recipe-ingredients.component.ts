import { Response } from '@angular/http';
import { Ingredient } from './../../shared/ingredient.model';
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
  ingredientSubscription: Subscription;
  recipeIngredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.ingredientSubscription = this.shoppingListService.recipeIngredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.recipeIngredients = ingredients;
      }
    );
    this.dataStorageService.fetchRecipeIngredients();
  }

  onAddItem(form: NgForm) {
    const ingredient = {
      name: form.value.name,
      amount: form.value.amount
    }
    this.shoppingListService.addIngredient(ingredient);
    this.shoppingListService.addRecipeIngredient(ingredient);
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
