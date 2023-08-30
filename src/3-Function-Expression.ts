function holidaySales1(
  product: string,
  sales: number,
  tax: number,
  discount: number
): number {
  let price: number = 0;
  if (product === "coconut") price = 30;
  if (product === "durain") price = 5;
  if (product === "mango") price = 10;

  let totalSalesforIndividualProduct: number = price * sales;
  return (
    totalSalesforIndividualProduct -
    tax * totalSalesforIndividualProduct -
    discount * totalSalesforIndividualProduct
  );
}

const coconut: number = holidaySales1("coconut", 20, 0.15, 0.25);
const durain: number = holidaySales1("durain", 10, 0.15, 0.25);
const mango: number = holidaySales1("mango", 100, 0.15, 0.25);

console.log(`The total profit from the sales of coconut is ${coconut}.`);
console.log(`The total profit from the sales of durain is ${durain}.`);
console.log(`The total profit from the sales of mango is ${mango}.`);
