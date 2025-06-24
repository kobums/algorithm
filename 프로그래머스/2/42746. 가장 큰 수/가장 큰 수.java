import java.util.*;

class Solution {
    public String solution(int[] numbers) {
        String[] nums = Arrays.stream(numbers)
                .mapToObj(String::valueOf)
                .toArray(String[]::new);

        Arrays.sort(nums, (a, b) -> (b + a).compareTo(a + b));

        // 가장 앞자리가 0이면 전부 0
        if (nums[0].equals("0")) return "0";

        return String.join("", nums);
    }
}