class Solution {
    findMin (nums:number[]): number{
        if(nums.length === 0) return 0

        let left = 0;
        let right = nums.length - 1;
        let res = nums[0];
        while (left <= right) {
            if (nums[left] <= nums[right]) {
                res = Math.min(res, nums[left]);
                break
            }
            let mid = left + Math.floor((right - left) / 2)
            res = Math.min(nums[mid],res)
            if (nums[left] <= nums[mid]) {
                left = mid + 1
            } else if (nums[mid] <= nums[right]) {
                right = mid - 1
            }
        }

        return res
    }
}