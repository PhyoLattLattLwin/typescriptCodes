"use strict";
function holidaySales(product, sales, tax, discount) {
    let price = 0;
    if (product === "sunglasses")
        price = 30;
    if (product === "apple")
        price = 5;
    if (product === "book")
        price = 10;
    let totalSalesforIndividualProduct = price * sales;
    return (totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct);
}
const sunglasses = holidaySales("sunglasses", 20, 0.15, 0.25);
const book = holidaySales("book", 10, 0.15, 0.25);
const apple = holidaySales("apple", 100, 0.15, 0.25);
console.log(`The total profit from the sales of sunglasses is ${sunglasses}.`);
console.log(`The total profit from the sales of book is ${book}.`);
console.log(`The total profit from the sales of apple is ${apple}.`);
