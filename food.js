class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed=null;
    }
    getFoodStock(){
        var getFoodRef=database.ref('getFoodStock');
       getFoodRef.on("value",(data)=>{
           foodCount=data.val();

       })         
    }
    updateFoodStock(count){
        database.ref('/').update({
          foodCount: count
        });
      }
    
      deductFood(){
          if(dog.isTouching(food)){
              food=food-1
          }
          if(dog.isTouching(food1)){
              food1=food1-1
          }
          if(dog.isTouching(food2)){
              food2=food2-1;
          }
          if(dog.isTouching(food3)){
              food3=food3-1;
          }
          if(dog.isTouching(food4)){
              food4=food4-1;
          }
          if(dog.isTouching(food5)){
              food5=food5-1;
          }
          if(dog.isTouching(food6)){
              food6=food6-1;
          }
         
      }

}
