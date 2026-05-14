class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cadena = s.replace(/[^a-z0-9]/gi, '');
        cadena = cadena.toLowerCase();

        let inversa = cadena.split('').reverse().join('');

        return ((cadena === inversa) ? true : false);
    }
}
