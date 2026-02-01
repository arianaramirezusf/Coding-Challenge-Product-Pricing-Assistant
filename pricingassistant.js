let productName = "Headphones";

let costPerUnit = 12;

let basePrice = 22.99;

let discountRate = 0.25;

let salesTaxRate = 0.07;

let fixedMonthlyCosts = 5200;


let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("productName");
console.log("discountedPrice");
console.log("finalPriceWithTax");
console.log("profitPerUnit");
console.log("breakEvenUnits");
console.log("isProfitablePerUnit");


productName= Headphones
discountedPrice= 16.99
finalPriceWithTax= 18.18
profitPerUnit= 6.18
breakEvenUnits= 841
isProfitablePerUnit= true



