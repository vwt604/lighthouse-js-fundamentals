/*Iterating Arrays with for loop

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

console.log(packingList[3]);

*/

//Iterating Arrays with while 

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++
}
