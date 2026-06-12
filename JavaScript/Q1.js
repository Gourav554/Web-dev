const sales = [
    { category: "Electronics", amount: 500 },
    { category: "Books", amount: 100 },
    { category: "Electronics", amount: 300 }
];

let total = 0;

for (let sale of sales) {
    total += sale.amount;
}

console.log(total);