class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const normolize = s=> s.split('').sort().join('')

        return normolize(s) === normolize(t)
    }
}
