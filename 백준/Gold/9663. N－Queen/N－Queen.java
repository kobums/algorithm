import java.io.*;

public class Main {
    static int N;
    static int count = 0;
    static boolean[] col, diag1, diag2;

    public static void dfs(int row) {
        if (row == N) {
            count++;
            return;
        }

        for (int c = 0; c < N; c++) {
            if (col[c] || diag1[row + c] || diag2[row - c + N - 1]) continue;

            col[c] = diag1[row + c] = diag2[row - c + N - 1] = true;
            dfs(row + 1);
            col[c] = diag1[row + c] = diag2[row - c + N - 1] = false;
        }
    }

    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(new BufferedReader(new InputStreamReader(System.in)).readLine());
        col = new boolean[N];
        diag1 = new boolean[2 * N];
        diag2 = new boolean[2 * N];

        dfs(0);
        System.out.println(count);
    }
}