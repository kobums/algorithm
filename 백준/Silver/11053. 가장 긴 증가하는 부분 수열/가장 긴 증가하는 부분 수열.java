import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int[] A = new int[N];
        int[] dp = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
            dp[i] = 1; // 최소 길이는 1
        } // A 배열에 각 숫자 넣기 dp 에 최소 1 넣기

        for (int i = 1; i < N; i++) {
            for (int j = 0; j < i; j++) {
                if (A[j] < A[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        int max = 0;
        for (int len : dp) {
            max = Math.max(max, len);
        }

        System.out.println(max);
    }
}