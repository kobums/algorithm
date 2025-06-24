import java.io.*;
import java.util.*;

public class Main {
    static int L, C;
    static String[] letters;
    static StringBuilder sb = new StringBuilder();

    static void dfs(int start, int depth, String pwd) {
        if (depth == L) {
            if (isValid(pwd)) sb.append(pwd).append("\n");
            return;
        }

        for (int i = start; i < C; i++) {
            dfs(i + 1, depth + 1, pwd + letters[i]);
        }
    }

    static boolean isValid(String s) {
        int v = 0, c = 0;
        for (char ch : s.toCharArray()) {
            if ("aeiou".indexOf(ch) != -1) v++;
            else c++;
        }
        return v >= 1 && c >= 2;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        L = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());

        letters = br.readLine().split(" ");
        Arrays.sort(letters); // 사전순

        dfs(0, 0, "");
        System.out.print(sb);
    }
}