// Description:
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Constraints:

// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

function twoSum(integers,target){

  for(let i=0; i<=integers.length;i++){
    for(let j=0;j<=integers.length;j++){
      if(integers[i]+integers[j]===target){
        return [i,j]
      }
    }
  }
}

console.log(twoSum([2,7,11,15], 9))