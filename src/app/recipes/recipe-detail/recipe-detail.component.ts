import { Response } from '@angular/http';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  error: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList(quantity: number) {
    this.recipeService.addToShoppingList(this.recipe.ingredients, quantity);
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onAddIngredients(form: NgForm) {
    const regex = /^[1-9]+[0-9]*$/;
    const quantity = form.value.quantity
    if (!regex.test(quantity)) {
      this.error = 'Amount must be more than 1';
      return;
    }
    this.onAddToShoppingList(quantity);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    this.dataStorageService.deleteRecipe(this.id);
  }

}
