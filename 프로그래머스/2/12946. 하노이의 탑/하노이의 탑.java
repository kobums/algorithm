import java.util.*;

class Solution {
    List<int[]> answerList = new ArrayList<>();

    public int[][] solution(int n) {
        hanoi(n, 1, 3, 2); // n개, from=1, to=3, via=2

        // List<int[]> → int[][]
        int[][] answer = new int[answerList.size()][2];
        for (int i = 0; i < answerList.size(); i++) {
            answer[i] = answerList.get(i);
        }
        return answer;
    }

    // 하노이 재귀 함수
    private void hanoi(int n, int from, int to, int via) {
        if (n == 1) {
            answerList.add(new int[]{from, to});
            return;
        }

        hanoi(n - 1, from, via, to);       // 1단계: n-1개를 보조(via)로 이동
        answerList.add(new int[]{from, to}); // 2단계: 가장 큰 원판을 목적지로 이동
        hanoi(n - 1, via, to, from);       // 3단계: 보조에 있는 n-1개를 목적지로 이동
    }
}