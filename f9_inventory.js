console.clear();
console.log("Inventory Entry System");
console.log();

const prompt = require("prompt-sync")();

let stock = [];

function addStock()
{
    let item_code = Number(prompt("Enter Item Code : "));
    let item_name = prompt("Enter Item Name : ");
    let item_price = Number(prompt("Enter Item Price : "));
    let item_quantity = Number(prompt("Enter Item Quantity : "));

let item = {
    code: item_code,
    item: item_name,
    price: item_price,
    quantity: item_quantity,
};
stock.push(item);
console.log("\n inventory Updated");
console.log();
}

while(true){
    addStock();
    let loop = prompt("Add More Items ( 0 for No / 1 for Yes ) : ");
    loop = parseInt(loop);
    if(loop === 0) break;
}

console.log("\nInventory Entry Completed");
console.log("\nUpdated Stock is as follows");
console.log(stock);
console.log();

for(let element of stock){
    console.log(element.item);
}

console.log("This is forEach loop");
stock.forEach((element) => {
    console.log(element.price);
});
