class Solution {
  minWindow (s: string , t: string): string | void {
    //to store the 
    let countT = {}

    for (let char of t){
        countT[char] = (countT[char] || 0 )+ 1
    }

    let window = {}
    let resIndex = [-1,-1]
    let resLen = Infinity
    let left = 0;
    let have = 0;
    let need = Object.keys(countT).length;
    
    for (let right = 0; right <= s.length; right++){
        const currentChar = s[right]

        window[currentChar] = (window[currentChar] || 0) + 1
        if(countT[currentChar] && window[currentChar] === countT[currentChar]) {
            have++
        }

        while(have === need){
            if(right-left+1 < resLen){
                resLen = right - left + 1
                resIndex = [left, right]
            }

            window[s[left]]--
            if(countT[s[left]] && window[s[left]] < countT[s[left]]) {
                have--
            }
            left++
        }
    }
    return resLen === Infinity ? "" : s.slice(resIndex[0], resIndex[1] + 1);
  }
}
