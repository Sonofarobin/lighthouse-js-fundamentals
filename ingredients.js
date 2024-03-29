const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:

for (index = 0; index < ingredients.length; index++) {
  console.log(ingredients[index]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (reverse = ingredients.length - 1; reverse >= 0; reverse--) {
  console.log(ingredients[reverse]);
}