"use strict";
function holidaySales2(product, sales, tax, discount) {
    let price = 0;
    if (product === "laptop")
        price = 100;
    if (product === "mouse")
        price = 105;
    if (product === "battery")
        price = 110;
    let totalSalesforIndividualProduct = price * sales;
    return (totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct);
}
const laptop = holidaySales2("laptop", 5, 0.15, 0.25);
const mouse = holidaySales2("mouse", 20, 0.15, 0.25);
const battery = holidaySales2("battery", 10, 0.15, 0.25);
console.log(`The total profit from the sales of laptop is ${laptop}.`);
console.log(`The total profit from the sales of mouse is ${mouse}.`);
console.log(`The total profit from the sales of battery is ${battery}.`);
