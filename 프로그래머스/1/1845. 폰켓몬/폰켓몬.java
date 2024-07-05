import java.util.*;

class Solution {
    public int solution(int[] nums) {
        int max = nums.length / 2;
        
        HashSet<Integer> numSet = new HashSet<>();
        
        for (int i = 0; i < nums.length; i++) {
            numSet.add(nums[i]);
        }
        
        return numSet.size() > max ? max : numSet.size();
    }
}