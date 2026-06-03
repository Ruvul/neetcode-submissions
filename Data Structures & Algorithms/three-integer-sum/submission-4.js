function safePush(matrix2D, newRow) {
        // Check if any existing row matches the contents of newRow
        const exists = matrix2D.some(row => JSON.stringify(row) === JSON.stringify(newRow));
        
        if (!exists) {
            matrix2D.push(newRow);
        }
    }

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums_og) {
        const resp =[]

        const nums=nums_og.toSorted((a, b) => a - b);
        //console.log(nums);
        //console.log(nums.slice(0+1));
        let i = 0;

        //for(let i = 0; i<nums.length; i++){
        while(i<nums.length){
            let target = -nums[i];
            let j = i+1;
            let k = nums.length-1;
            //console.log(i, j, k);

            if(j<k){
                while(j<k){
                    if(nums[j]+nums[k]<target){
                        j++;
                        //console.log("Incremento en j: " + j);
                    }
                    else{
                        if(nums[j]+nums[k]>target){
                            k--;
                            //console.log("Decremento en k: " + k);
                        }
                        else{ // nums[j]+nums[k] = target
                            
                            let trio = [nums[i], nums[j], nums[k]];
                            //console.log("Tercia encontrada!: " + trio);

                            safePush(resp,trio);
                            //console.log("Resp:" + resp);
                            j++;
                            //break;
                        }
                    }
                }
                //console.log("Finalizó el j<k. j="+j+" k="+k);
                i+=1;
            }else{
                i+=1;
            }
            
            
            ////console.log(i, j, k);
        }

        return resp;
        }
}
