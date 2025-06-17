import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        List<Integer> list = new ArrayList<>();

        int prev = -1; // 처음에는 존재할 수 없는 값으로 설정
        for (int num : arr) {
            if (num != prev) {
                list.add(num);
                prev = num;
            }
        }

        // List → int[] 변환
        int[] answer = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }

        return answer;
    }
}