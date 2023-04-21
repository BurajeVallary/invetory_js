

// Create an array containing the names of all items in the inventory.

let itemName = ["carrots","guava","spinach","cabbage"];
console.log(itemName);


// Create a separate array with the corresponding stock quantities of each item.

let quantityNumber =[100,50,5,10];
console.log(quantityNumber);

// //  Write a function to add a new item to the inventory, updating both arrays.

 function addNew(item,quantity) {
   itemName.push(item)
  quantityNumber.push(quantity)
}
addNew("Brocolli",80)
console.log(itemName);
console.log(quantityNumber);



//  Write a function to update the stock quantity of an existing item.


function update(){
  quantityNumber [2]=60;
  console.log(quantityNumber);

}
update()
console.log(quantityNumber);


// Write a function to calculate the total number of items in the inventory.


function calculateTotalNumber(){
  let count = 0;
  for (let b = 0; b <quantityNumber.length; b++) {
  count +=quantityNumber[b];
    
  }
  return count;
}

addNew ("Brocolli",80);
console.log(calculateTotalNumber());

 update()
 console.log(calculateTotalNumber());



// //  Write a function to find the item with the lowest stock quantity.

function lowestItem(){
 let lowest=0;
 for (let c = 1; c < quantityNumber.length; c++) {
 if(quantityNumber[c]< quantityNumber[lowest]){
  lowest = c;
 }
  
 }
 return quantityNumber[lowest];
}
console.log(lowestItem());