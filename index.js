let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let nId = 0;
class Neighborhood{
	constructor(name){
		this.id = ++nId;
		this.name = name;

	store.neighborhoods.push(this)
	}
	deliveries(){
		return store.deliveries.filter(delivery => {
			return delivery.neighborhoodId === this.id
		})
	}
	customers(){
		return store.customers.filter(c =>{
			// console.log(c)
			return c.neighborhoodId === this.id;
		})
	}
	
}
let mealId = 0
class Meal{
    constructor(title, price){
    	this.id = ++mealId;
    	this.title = title;
    	this.price= price;
    	store.meals.push(this)
    }
}

let customerId = 0  
class Customer{
  constructor(name, neighborhoodId){
   	this.id = ++customerId;
   	this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  }
  deliveries(){
    return store.deliveries.filter(d =>{
      return d.customerId === this.id;
    })
  }
}
let delId =0;
class Delivery{
   constructor(mealId, customerId, neighborhoodId){
   	this.id = ++delId;
   	this.mealId = mealId;
   	this.customerId = customerId;
   	this.neighborhoodId = neighborhoodId;
   	store.deliveries.push(this)
   }

   meal(){
   	 return store.meals.find(m =>{
   	 	// console.log(m.id)
   	 	return m.id === this.mealId
   	 })
   }
   customer(){
   	return store.customers.find(c =>{
   		return c.id === this.neighborhoodId
   	})
   }
   neighborhood(){
   	return store.neighborhoods.find(n =>{
   		return n.mealId === this.id
   	})
   }

}