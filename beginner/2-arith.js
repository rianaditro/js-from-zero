let x, y, z;

x = 10;
y = 3;

add = x + y;
console.log(x + " + " + y + " = " + add);

subs = x - y;
console.log(x + " - " + y + " = " + subs);

mult = x * y;
console.log(x + " * " + y + " = " + mult);

div = x / y;
console.log(x + " / " + y + " = " + div);

mod = x % y;
console.log(x + " % " + y + " = " + mod);

z = x;
x++;
console.log(z + " + 1 = " + x);

a = y;
y--;
console.log(a + " - 1 = " + y);

let b = a
a += y
console.log(b + " + " + y + " = " + a);

let c = a
a **= y
console.log(c + " ** " + y + " = " + a);

/*
Pak Andi and Bu Siti have 3 children.
Pak Andi and Bu Siti aim to save Rp100,000,000 to secure their family’s future. 
With an initial balance of Rp10,000,000, 
Pak Andi earns Rp25,000,000 monthly. 
After covering Rp15,000,000 in household expenses, 
they also account for a 10% tax and
2.5% education savings for each child. 

How long will Pak Andi and Bu Siti have to wait until they reach Rp100,000,000?
*/



/*
// Initial financial data
let balance = 10000000;              // Initial bank balance
let monthly_income = 25000000;       // Monthly income
let expenses = 15000000;             // Monthly expenses
let tax_rate = 0.10;                 // 10% tax on income
let children = 3;                    // Number of children
let education_saving_rate = 0.025; // 2.5% for each son, 3 sons (7.5%)
let target_savings = 100000000;      // Target savings (100 million)

let months = 0;  // Track the number of months needed to reach the goal

// Calculate monthly savings
let monthly_tax = monthly_income * tax_rate;
let education_savings = monthly_income * education_saving_rate * children;
let monthly_savings = monthly_income - (monthly_tax + education_savings + expenses);

// Calculate how many months it will take to reach the target
let months_needed = (target_savings - balance) / monthly_savings;

// Output the result
console.log(`Their monthly tax is Rp${monthly_tax}, their education savings is Rp${education_savings}, and their monthly savings is Rp${monthly_savings}.`);
console.log(`It will take approximately ${months_needed} months to reach the target savings of Rp100,000,000.`);
*/
