class Solution {
    public int[] solution(int[] sequence, int k) {
        int left = 0, right = 0, sum = sequence[0];

        int minLen = Integer.MAX_VALUE;
        int[] answer = new int[]{0, 0};

        while (right < sequence.length) {
            if (sum == k) {
                if ((right - left) < minLen) {
                    minLen = right - left;
                    answer[0] = left;
                    answer[1] = right;
                }
                sum -= sequence[left++];
            } else if (sum < k) {
                right++;
                if (right < sequence.length) {
                    sum += sequence[right];
                }
            } else {
                sum -= sequence[left++];
            }
        }

        return answer;
    }
}