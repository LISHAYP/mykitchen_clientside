

export class CCRecipe{
    constructor(name,ingredients,time,method,image){
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.method = method;
        this.image = image;
    }
    getTotalCalories=()=>{
        const total = this.ingredients.map((item)=>item.calories).reduce((a,b)=>a+b);
        return total;
    }
    getIngredients=()=>{
        return this.ingredients.map(item=>item.getDetails())
    }
  }