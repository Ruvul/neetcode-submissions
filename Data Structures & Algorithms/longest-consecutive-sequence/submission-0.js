function armaSecuencia(num, secuenciaActual, hash){
        if(hash.has(num+1)){
            secuenciaActual.push(num+1);
            armaSecuencia(num+1,secuenciaActual,hash);
        }
        return secuenciaActual;
    }

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    longestConsecutive(nums) {
        const hashKeys = new Set(nums);
        let resultante = [];

        for(let i = 0; i<nums.length; i++){
            const num = nums[i];
            
            if(!hashKeys.has(num-1)){
                const secuencia = [];
                secuencia.push(num);
                const resultante2 = armaSecuencia(num, secuencia, hashKeys);
                console.log(resultante2);

                if(resultante2.length > resultante.length){
                    resultante = resultante2;
                }

            }

        }

        return resultante.length;
    }
}
