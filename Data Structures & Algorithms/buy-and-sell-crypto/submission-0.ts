class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min : number = prices[0];
        let maxProfit : number = 0;

        for ( let i = 1; i < prices.length; i++){
            if (prices[i] < min){
                min = prices[i]
            }
            const currentProfit = prices[i] - min;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }
        maxProfit = maxProfit < 0 ? 0 : maxProfit
        return maxProfit
    }
}
