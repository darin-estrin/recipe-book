import { Response } from '@angular/http';
import { DataStorageService } from './../../shared/data-storage.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  ingredientSubscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;
  extraIngredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
      this.ingredientSubscription = this.shoppingListService.extraIngredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.extraIngredients = ingredients;
        }
      );
    this.dataStorageService.fetchExtraIngredients();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name.toLowerCase(), value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(newIngredient);
      this.shoppingListService.addExtraIngredient(newIngredient);
    }
    form.reset();
    this.dataStorageService.storeAdditiontalIngredients().subscribe(
      (response: Response) => response
    )
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.ingredientSubscription.unsubscribe();
  }

}
