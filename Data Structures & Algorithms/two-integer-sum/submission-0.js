class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let uno = 0;
        let dos = 0;
        let resp = [];

        for (let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length;j++){
                if (nums[i] + nums[j] == target){
                    resp.push(i);
                    resp.push(j);
                    break;
                }
            }
        }

        return resp;
    }
}
