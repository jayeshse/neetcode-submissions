class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let checkDuplicate = new Map();

        for (let i = 0; i<nums.length; i++){
            if(checkDuplicate.has(nums[i]) ){
                return true
            }
            checkDuplicate.set(nums[i],i)
        }
        return false
    }
}
