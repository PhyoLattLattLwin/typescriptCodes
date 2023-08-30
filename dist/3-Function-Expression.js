"use strict";
function holidaySales1(product, sales, tax, discount) {
    let price = 0;
    if (product === "coconut")
        price = 30;
    if (product === "durain")
        price = 5;
    if (product === "mango")
        price = 10;
    let totalSalesforIndividualProduct = price * sales;
    return (totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct);
}
const coconut = holidaySales1("coconut", 20, 0.15, 0.25);
const durain = holidaySales1("durain", 10, 0.15, 0.25);
const mango = holidaySales1("mango", 100, 0.15, 0.25);
console.log(`The total profit from the sales of coconut is ${coconut}.`);
console.log(`The total profit from the sales of durain is ${durain}.`);
console.log(`The total profit from the sales of mango is ${mango}.`);
