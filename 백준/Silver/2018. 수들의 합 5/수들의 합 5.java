import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int left = 1, right = 1;
        int sum = 1;
        int count = 0;

        while (left <= N) {
            if (sum == N) count++;

            if (sum >= N) {
                sum -= left++;
            } else {
                right++;
                sum += right;
            }
        }

        System.out.println(count);
    }
}