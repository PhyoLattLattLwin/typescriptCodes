let data: (string | number)[] = ["cosmos", 12, 20, "apple"];

for (let dataPoint in data) {
  //console.log(typeof dataPoint);
  console.log(`${+dataPoint + 1}-${data[dataPoint]}`);
}
