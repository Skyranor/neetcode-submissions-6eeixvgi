class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

       const countMap = new Map();

        for(let item of s) {
            countMap.set(item, (countMap.get(item) || 0 ) + 1) 
        }

        for(let item of t) {
            if(!countMap.has(item) || countMap.get(item) === 0) return false
            countMap.set(item, (countMap.get(item) || 0 ) - 1) 
        }

        return true
    }
}
