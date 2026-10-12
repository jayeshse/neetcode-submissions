class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let map = new Map();
        let left : number = 0;
        let maxLength: number = 0;
        let maxFreq: number = 0;

        for (let right=0; right<s.length; right++){
            map.set(s[right], (map.get(s[right]) || 0)+1);
            maxFreq = Math.max(maxFreq, map.get(s[right])!);
            while ((right - left + 1) - maxFreq > k) {
                map.set(s[left], (map.get(s[left]) || 0)-1);
                left +=1
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength
    }
}
