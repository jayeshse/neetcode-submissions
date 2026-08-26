class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if(nums.length === 0) return -1

        let left = 0;
        let right = nums.length - 1;
        let res = nums[0];

        while (left <= right) {
            let mid = Math.floor((right + left) / 2)
            console.log(left,mid)
            if (nums[mid] === target) return mid
            if (nums[left] <= nums[mid]) {
                if (nums[left] <=target && target <= nums[mid]) {
                    right = mid - 1
                }else {
                    left = mid + 1
                }
            }else if(nums[mid] <= nums[right] ) {
                if (target >= nums[mid] && target <=nums[right]) {
                    left = mid + 1
                }else {
                    right = mid - 1
                }
            }
        }
        return -1
    } 
}
