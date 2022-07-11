const store = new Map([
    ["Apple", 50],
    ["Watermelon", 450],
    ["Cucumber", 150],
    ["Carrot", 150],
    ["Onions", 100],
    [`Potatoes`, 250]
])

// let shoppingCart = 0;
// shoppingCart += store.get(`Potatoes`);
// shoppingCart += store.get(`Onions`);
// console.log(shoppingCart);
// store.delete("Onions");
store.set("cabbage", 120);
console.log(store.has("Orange"));


store.forEach((x, y) => console.log(`${y}, N${x}`));
// store.forEach(storeKey);
// function storeKey(key, value){
//     console.log(`${value}, N${key}}`);
// }