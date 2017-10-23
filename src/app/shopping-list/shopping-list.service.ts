import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  extraIngredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [];
  private extraIngredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice();
  }

  getExtraIngredients() {
    return this.extraIngredients.slice();
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

  updateIngredient(index: number, newIngredient:Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}