import { Response } from '@angular/http';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
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

  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
    this.dataStorageService.storeShoppingList().subscribe(
      (response: Response) => response
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    this.dataStorageService.deleteRecipe(this.id);
  }

}
