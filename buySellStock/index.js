// Problem 2: Best Time to Buy and Sell Stock (Easy)
// Description:
// You are given an array prices where prices[i] is the price of a given stock on the i-th day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// plaintext
// Copy code
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// plaintext
// Copy code
// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transactions are done, and the maximum profit = 0.
// Constraints:
// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4
function stocks(prices){
  let minPrice=Infinity
  let maxProfit=0
  for(let i=0; i<prices.length;i++){
    if(prices[i]<minPrice){
      minPrice=prices[i];
    }else{
      let profit=prices[i]-minPrice;
      maxProfit=Math.max(maxProfit, profit)
    }
  }
  return maxProfit;
}
console.log(stocks([7, 6, 4, 3, 1]))
console.log(stocks([7, 1, 5, 3, 6, 4])); 