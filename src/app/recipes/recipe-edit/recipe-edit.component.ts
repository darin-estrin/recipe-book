import { DataStorageService } from './../../shared/data-storage.service';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  error: string;
  oldRecipeName: string;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    let recipeItem = {
      name: this.recipeForm.value.name.toLowerCase().replace(/(^\s+)|(\s+$)/g, '').replace(/\s{2,}/g, ' '),
      amount: 0
    }

    let action;

    let existingRecipe = this.recipeService.checkForExistingRecipe(recipeItem.name);
    if (existingRecipe  && this.oldRecipeName !== recipeItem.name) {
      return this.error = "Recipe already exist. Please enter a different name";
    }

    if (this.editMode) {
      let updatingRecipe = this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      action = 'updateRecipe';
      this.error = updatingRecipe;
    } else {
      let addingRecipe = this.recipeService.addRecipe(this.recipeForm.value);
      action = 'addRecipe';
      this.error = addingRecipe;
    }
    
    if (this.error) {
      return;
    }

    if (action === 'updateRecipe') {
      this.recipeService.updateRecipeItem(recipeItem.name, this.oldRecipeName);
    } else if (action === 'addRecipe') {
      this.recipeService.addRecipeItem(recipeItem);
    }

    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => response
    );
    this.dataStorageService.storeShoppingList()
    .subscribe(
      (response: Response) => response
    );
    this.dataStorageService.storeRecipeList()
    .subscribe(
      (response: Response) => response
    );
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  getIngredients(form) {
    return form.get('ingredients').controls;
  }

  renderTable(form) {
    if (form.controls.ingredients.length > 0){
      return true;
    }
    
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeDirections = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      this.oldRecipeName = recipe.name;
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      recipeDirections = recipe.directions;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'directions': new FormControl(recipeDirections),
      'ingredients': recipeIngredients
    });
  }

  ngOnDestroy() {
    this.error = '';
  }

}
