import { element } from 'protractor';
import { Ingredient } from './../shared/ingredient.model';
import { RecipeItem } from './../shared/recipe-item.model';
import { Recipe } from './../recipes/recipe.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  extraIngredientsChanged = new Subject<Ingredient[]>();
  recipeListChanged = new Subject<Ingredient[]>();
  error: string;

  private ingredients: Ingredient[] = [];
  private extraIngredients: Ingredient[] = [];
  private recipeList: RecipeItem[] = [];

  getIngredients() {
    return this.ingredients.slice();
  }

  getExtraIngredients() {
    return this.extraIngredients.slice();
  }

  getRecipeList() {
    return this.recipeList.slice();
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

  setRecipeList(recipeItems: RecipeItem[]) {
    if (recipeItems) {
      this.recipeList = recipeItems;
      this.recipeListChanged.next(this.recipeList.slice());
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

  updateRecipeIngredients(recipeItem: RecipeItem, 
    oldRecipeItem: RecipeItem, 
    ingredients: Ingredient[]) {
    if (recipeItem.amount > oldRecipeItem.amount) {
      let newAmount = recipeItem.amount - oldRecipeItem.amount;
      this.addRecipeIngredients(ingredients, newAmount);
    } else {
      let newAmount = oldRecipeItem.amount - recipeItem.amount;
      this.subtractRecipeIngredients(ingredients, newAmount);
    }
  }

  recipeUpdated(recipe: Recipe, newRecipe: Recipe) {
    let recipeItem;
    let tempIngredients = [];
    this.recipeList.forEach(element => {
      if(element.name === recipe.name) {
        recipeItem = element;
      }
    });
    if(!recipeItem){
      return;
    }
    recipe.ingredients.forEach(element => {
      var name = element.name;
      var amount = element.amount *= recipeItem.amount;
      var temp = new Ingredient(name, amount);
      tempIngredients.push(temp);
    });
    this.deleteRecipeIngredients(tempIngredients);
    this.addUpdatedRecipeIngredients(recipeItem, newRecipe.ingredients);
  }

  addUpdatedRecipeIngredients(recipeItem: RecipeItem, ingredients: Ingredient[]) {
    let tempIngredients = [];
    for (var i = 0; i < ingredients.length; i++) {
      tempIngredients.push(new Ingredient(ingredients[i].name, ingredients[i].amount));
    }
    tempIngredients.forEach(element => {
      element.amount *= recipeItem.amount;
    });
    this.addIngredients(tempIngredients);
  }

  updateRecipeItem(recipeItem: RecipeItem) {
    for (var i = 0; i < this.recipeList.length; i++) {
      if (this.recipeList[i].name === recipeItem.name) {
        this.recipeList[i] = recipeItem;
      }
    }
    this.recipeListChanged.next(this.recipeList.slice());
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

  addRecipeIngredients(ingredients: Ingredient[], amount: number) {
    ingredients.forEach(ingredient => {
      ingredient.amount *= amount;
    })
    
    if(this.ingredients.length <= 0) {
      this.ingredients.push(...ingredients);
    } else {
      for (var i = 0; i < this.ingredients.length; i++) {
        for (var j = 0; j < ingredients.length; j++) {
          if (this.ingredients[i].name === ingredients[j].name) {
            this.ingredients[i].amount += ingredients[j].amount;
            ingredients.splice(j, 1);
          }
        }
      }
      this.ingredients.push(...ingredients);
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  subtractRecipeIngredients(ingredients: Ingredient[], amount: number) {
    ingredients.forEach(ingredient => {
      ingredient.amount *= amount;
    });
    for (var i = 0; i < this.ingredients.length; i++) {
      for (var j = 0; j < ingredients.length; j++) {
        if (this.ingredients[i].name === ingredients[j].name) {
          this.ingredients[i].amount -= ingredients[j].amount;
        }
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addRecipeItem(recipeItem) {
    let recipeItemAdded = false;
    for (var i = 0; i < this.recipeList.length; i++) {
      if (this.recipeList[i].name == recipeItem.name) {
        this.recipeList[i].amount += recipeItem.amount;
        recipeItemAdded = true;
      }
    }
    if (!recipeItemAdded) {
      this.recipeList.push(recipeItem);
    }
    this.recipeListChanged.next(this.recipeList.slice());
  }

  updateIngredient(index: number, newIngredient:Ingredient, previousAmount: number) {
    if(this.extraIngredients[index].name !== newIngredient.name) {
      return this.error = "An error has occured. Please Try Again";
    }
    this.extraIngredients[index] = newIngredient;
    for (var i = 0; i < this.ingredients.length; i++) {
      let name = this.ingredients[i].name;
      let amount = this.ingredients[i].amount;
      if (name === newIngredient.name && amount === newIngredient.amount || name !== newIngredient.name) {
        continue;
      } else if (name === newIngredient.name) {
        this.ingredients[i].amount += (newIngredient.amount - previousAmount);
        break;
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
    this.extraIngredientsChanged.next(this.extraIngredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name === ingredient.name && this.ingredients[i].amount > ingredient.amount) {
        this.ingredients[i].amount -= ingredient.amount;
      } else if (this.ingredients[i].name === ingredient.name) {
        this.ingredients.splice(i, 1);
      }
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  deleteAdditionalIngredient(index: number) {
    const ingredient = this.extraIngredients[index];
    this.deleteIngredient(ingredient)
    this.extraIngredients.splice(index, 1);
    this.extraIngredientsChanged.next(this.extraIngredients.slice());
  }

  deleteRecipeIngredients(ingredients: Ingredient[], recipeItem?: RecipeItem) {
    if (recipeItem) {
      this.deleteRecipeItem(recipeItem);
    }
    for (var i = 0; i < this.ingredients.length; i++) {
      for (var j = 0; j < ingredients.length; j++) {
        if (this.ingredients[i].name === ingredients[j].name) {
          this.ingredients[i].amount -= ingredients[j].amount;
        }
      }
    }
    for (var k = 0; k < this.ingredients.length; k++) {
      if (this.ingredients[k].amount < 1) {
        this.ingredients.splice(k, 1);
        --k;
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteRecipeItem(recipeItem: RecipeItem) {
    for (var i = 0; i < this.recipeList.length; i++) {
      if (this.recipeList[i].name === recipeItem.name) {
        this.recipeList[i].amount = 0;
      }
    }
    this.recipeListChanged.next(this.recipeList.slice());
  }
  
}