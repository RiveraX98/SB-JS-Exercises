
// separatePositive([2, -1, -3, 6, -8, 10]) 

  function separatePositive(nums){
    let left = 0;
    let right = nums.length - 1;

    while (left < right){
        if (nums[left] < 0 && nums[right] > 0) {

        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
  
        left += 1;
        right -= 1;

        }else {
            if (nums[left] > 0) left += 1;
            else right -= 1;
          }

    }
    return nums
  }



