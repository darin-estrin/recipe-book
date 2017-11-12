import { Ingredient } from './../../shared/ingredient.model';
import { Response } from '@angular/http';
import { DataStorageService } from './../../shared/data-storage.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  ingredientSubscription: Subscription;
  editMode = false;
  editItemIndex: number;
  previousAmount: number;
  currentIngredient: string;
  extraIngredients: Ingredient[];
  error: string;

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.ingredientSubscription = this.shoppingListService.extraIngredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.extraIngredients = ingredients;
      }
    );
    this.dataStorageService.fetchExtraIngredients();
  }

  onAddItem(form: NgForm) {
    this.error = '';
    const value = form.value;
    if (this.editMode) {
      let newIngredient = new Ingredient(this.currentIngredient, value.amount);
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient, this.previousAmount);
      this.editMode = false;
      if (this.shoppingListService.error) {
        this.error = this.shoppingListService.error;
      }
    } else {
      let newIngredient = new Ingredient(value.name.toLowerCase().replace(/(^\s+)|(\s+$)/g, ''), value.amount);
      this.shoppingListService.addIngredient(newIngredient);
      this.shoppingListService.addExtraIngredient(newIngredient);
    }
    form.reset();
    this.shoppingListService.error = '';
    this.dataStorageService.storeAdditiontalIngredients().subscribe(
      (response: Response) => response
    )
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
  }

  onEditClicked(ingredient: Ingredient, index: number) {
    this.editItemIndex = index;
    this.editMode = true;
    this.slForm.setValue({
      name: ingredient.name,
      amount: ingredient.amount
    });
    this.previousAmount = this.slForm.value.amount;
    this.currentIngredient = ingredient.name;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.error = '';
  }

  onDelete(form: NgForm) {
    this.shoppingListService.deleteAdditionalIngredient(this.editItemIndex);
    this.onClear();
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
    this.dataStorageService.storeAdditiontalIngredients().subscribe(
      (response: Response) => response
    );
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }

}
