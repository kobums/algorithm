import java.util.*;

class Solution {
    public long solution(long n) {
        // 1. long → String → char[]
        char[] arr = String.valueOf(n).toCharArray();

        // 2. 정렬 (오름차순 정렬 후 reverse)
        Arrays.sort(arr); // 오름차순 정렬

        // 3. 뒤집기 + 문자열로 만들기
        StringBuilder sb = new StringBuilder(new String(arr));
        sb.reverse();

        // 4. 문자열 → long 변환 후 리턴
        return Long.parseLong(sb.toString());
    }
}