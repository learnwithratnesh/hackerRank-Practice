/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    console.log(Math.round(meal_cost + (meal_cost/100)*tip_percent + (meal_cost/100)*tax_percent))
}