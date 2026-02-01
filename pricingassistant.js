let productName = "Headphones";

let costPerUnit = 12;

let basePrice = 22.99;

let discountRate = 0.25;

let salesTaxRate = 0.07;

let fixedMonthlyCosts = 5200;


discountedPrice = basePrice * (1 - discountRate);
finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
profitPerUnit = finalPriceWithTax - costPerUnit;
breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
isProfitablePerUnit = profitPerUnit > 0;


console.log("productName");
console.log("discountedPrice");
console.log("finalPriceWithTax");
console.log("profitPerUnit");
console.log("breakEvenUnits");
console.log("isProfitablePerUnit");
