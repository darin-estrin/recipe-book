import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice();
  }

  setIngredients(ingredients: Ingredient[]) {
    if (ingredients) {
      this.ingredients = ingredients;
      this.ingredientsChanged.next(this.ingredients.slice());
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

  addIngredients(ingredients: Ingredient[], quantity: number) {
    if (!this.ingredients) {
      return this.ingredients.push(...ingredients);
    } else {
       let newIngredients = ingredients;
       for (var i = 0; i < this.ingredients.length; i++) {
         for (var j = 0; j < newIngredients.length; j++) {
           if (this.ingredients[i].name.indexOf(newIngredients[j].name) > -1){
             this.ingredients[i].amount += newIngredients[j].amount *= quantity;
             newIngredients.splice(j, 1);
           }
         }
       }
       newIngredients.forEach(function(element) {
         element.amount *= quantity;
       })
       this.ingredients.push(...newIngredients);
    }
    console.log(this.ingredients);
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