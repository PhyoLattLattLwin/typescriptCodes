function holidaySales2(
  product: string,
  sales: number,
  tax: number,
  discount: number
): number {
  let price: number = 0;
  if (product === "laptop") price = 100;
  if (product === "mouse") price = 105;
  if (product === "battery") price = 110;

  let totalSalesforIndividualProduct: number = price * sales;
  return (
    totalSalesforIndividualProduct -
    tax * totalSalesforIndividualProduct -
    discount * totalSalesforIndividualProduct
  );
}

const laptop: number = holidaySales2("laptop", 5, 0.15, 0.25);
const mouse: number = holidaySales2("mouse", 20, 0.15, 0.25);
const battery: number = holidaySales2("battery", 10, 0.15, 0.25);

console.log(`The total profit from the sales of laptop is ${laptop}.`);
console.log(`The total profit from the sales of mouse is ${mouse}.`);
console.log(`The total profit from the sales of battery is ${battery}.`);
