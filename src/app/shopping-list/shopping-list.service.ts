import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  extraIngredientsChanged = new Subject<Ingredient[]>();
  recipeIngredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [];
  private extraIngredients: Ingredient[] = [];
  private recipeIngredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice();
  }

  getExtraIngredients() {
    return this.extraIngredients.slice();
  }

  getRecipeIngredients() {
    return this.recipeIngredients.slice();
  }

  setIngredients(ingredients: Ingredient[]) {
    if (ingredients) {
      this.ingredients = ingredients;
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  setExtraIngredients(ingredients: Ingredient[]) {
    if (ingredients) {
      this.extraIngredients = ingredients;
      this.extraIngredientsChanged.next(this.extraIngredients.slice());
    }
  }

  setRecipeIngredients(ingredients: Ingredient[]) {
    if (ingredients) {
      this.recipeIngredients = ingredients;
      this.recipeIngredientsChanged.next(this.recipeIngredients.slice());
    }
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient) {
    const currentIngredients = [];
    this.ingredients.forEach((ingredient) => {
      currentIngredients.push(ingredient.name);
    })
    if (this.ingredients.length <= 0) {
      this.ingredients.push(newIngredient);
    } else {
      if (currentIngredients.indexOf(newIngredient.name) > -1) {
        const index = currentIngredients.indexOf(newIngredient.name);
        this.ingredients[index].amount += newIngredient.amount;
      } else {
        this.ingredients.push(newIngredient);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addExtraIngredient(newIngredient: Ingredient) {
    const currentIngredients = [];
    this.extraIngredients.forEach(ingredient => {
      currentIngredients.push(ingredient.name);
    });
    if (this.extraIngredients.length <= 0) {
      this.extraIngredients.push(newIngredient);
    } else {
      if (currentIngredients.indexOf(newIngredient.name) > -1) {
        const index = currentIngredients.indexOf(newIngredient.name);
        this.extraIngredients[index].amount += newIngredient.amount;
      } else {
        this.extraIngredients.push(newIngredient);
      }
    }
    this.extraIngredientsChanged.next(this.extraIngredients.slice());
  }

  addRecipeIngredient(newIngredient: Ingredient) {
    const currentIngredients = [];
    this.recipeIngredients.forEach((ingredient) => {
      currentIngredients.push(ingredient.name);
    })
    if (this.ingredients.length <= 0) {
      this.ingredients.push(newIngredient);
    } else {
      if (currentIngredients.indexOf(newIngredient.name) > -1) {
        const index = currentIngredients.indexOf(newIngredient.name);
        this.recipeIngredients[index].amount += newIngredient.amount;
      } else {
        this.recipeIngredients.push(newIngredient);
      }
    }
    this.recipeIngredientsChanged.next(this.recipeIngredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    if (!this.ingredients) {
      return this.ingredients.push(...ingredients);
    } else {
       for (var i = 0; i < this.ingredients.length; i++) {
         for (var j = 0; j < ingredients.length; j++) {
           if (this.ingredients[i].name.indexOf(ingredients[j].name) > -1){
             this.ingredients[i].amount += ingredients[j].amount;
             ingredients.splice(j, 1);
           }
         }
       }
       this.ingredients.push(...ingredients);
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addRecipeIngredients(ingredients: Ingredient[]) {
    for (var i = 0; i < this.recipeIngredients.length; i++) {
      for (var j = 0; j < ingredients.length; j++) {
        if (this.recipeIngredients[i].name.indexOf(ingredients[j].name) > -1){
          this.recipeIngredients[i].amount += ingredients[j].amount;
          ingredients.splice(j, 1);
        }
      }
    }
    this.recipeIngredients.push(...ingredients);
    console.log(this.recipeIngredients);
    this.recipeIngredientsChanged.next(this.recipeIngredients.slice());
  }

  updateIngredient(index: number, newIngredient:Ingredient) {
    this.ingredients[index] = newIngredient;
    for (var i = 0; i < this.extraIngredients.length; i++) {
      if (this.extraIngredients[i].name === newIngredient.name) {
        this.extraIngredients[i] = newIngredient;
      }
      this.extraIngredientsChanged.next(this.extraIngredients.slice());
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number) {
    const ingredient = this.ingredients[index];
    this.deleteAdditionalIngredient(ingredient);
    this.deleteRecipeIngredient(ingredient);
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteAdditionalIngredient(ingredient: Ingredient) {
    for (var i = 0; i < this.extraIngredients.length; i++) {
      if (this.extraIngredients[i].name === ingredient.name) {
        this.extraIngredients.splice(i, 1);
      }
      this.extraIngredientsChanged.next(this.extraIngredients.slice());
    }
  }

  deleteRecipeIngredient(ingredient: Ingredient) {
    for (var i = 0; i < this.recipeIngredients.length; i++) {
      if (this.recipeIngredients[i].name === ingredient.name) {
        this.recipeIngredients.splice(i, 1);
      }
      this.recipeIngredientsChanged.next(this.recipeIngredients.slice());
    }
  }

}