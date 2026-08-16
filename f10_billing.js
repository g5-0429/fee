console.clear();
const prompt = require('prompt-sync')();
const store= "Super-Mart 🏪";
console.log(store);

// let item1 = "Mobile";
// let item2 = "Laptop";

//inventory
let items = ["item1", "item2", "item3"];
let prices= [2000, 3500, 1500];


items.push("item4", "item5");
prices.push(3000,4500);
// items.pop();           to remove last element
// console.log(items);
// console.log(items.length);


//customer oriented
console.log();
console.log("   Billing System");
console.log();
console.log("SrNo.\t","Item\t","Price");
for(let i=0; i< items.length; i++){
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
}
console.log();

//  let srno = Number(prompt("Enter Item No.: "));
//  let quantity = Number(prompt("Enter Quantity: "));

//billing
let cost=0;
let choice;
do{
    let srno = Number(prompt("Enter Item No.: "));
    let quantity = Number(prompt("Enter Quantity: "));

    cost += prices[srno-1]* quantity;
    choice= prompt("Aur khareedna hai kuch? (y/n): ");

} while (choice.toLowerCase()== "y");


// let price = prices[srno-1]; 
// let price2= prices[srno2-1];
// let cost = (price*quantity);
let discount=0;
if (cost>=10000) {
    discount= cost*0.05;
}
else if (cost>=20000) {
    discount= cost*0.2;
}
else {
    discount= cost*0.01;
}
console.log("Your Discount is: ", discount);
console.log("Your Bill Amount is: ", cost-discount);
console.log("Thank you for shopping at Super-Mart👌");
