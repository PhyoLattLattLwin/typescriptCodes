function holidaySales(
  product: string,
  sales: number,
  tax: number,
  discount: number
): number {
  let price: number = 0;
  if (product === "sunglasses") price = 30;
  if (product === "apple") price = 5;
  if (product === "book") price = 10;

  let totalSalesforIndividualProduct: number = price * sales;
  return (
    totalSalesforIndividualProduct -
    tax * totalSalesforIndividualProduct -
    discount * totalSalesforIndividualProduct
  );
}

const sunglasses: number = holidaySales("sunglasses", 20, 0.15, 0.25);
const book: number = holidaySales("book", 10, 0.15, 0.25);
const apple: number = holidaySales("apple", 100, 0.15, 0.25);

console.log(`The total profit from the sales of sunglasses is ${sunglasses}.`);
console.log(`The total profit from the sales of book is ${book}.`);
console.log(`The total profit from the sales of apple is ${apple}.`);
