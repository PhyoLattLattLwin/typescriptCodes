"use strict";
let data = ["cosmos", 12, 20, "apple"];
for (let dataPoint in data) {
    console.log(`${+dataPoint + 1}-${data[dataPoint]}`);
}
