import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine()); // 테스트 케이스 수

        for (int i = 0; i < T; i++) {
            String line = br.readLine();
            Stack<Character> stack = new Stack<>();
            boolean isValid = true;

            for (char c : line.toCharArray()) {
                if (c == '(') {
                    stack.push(c);
                } else if (c == ')') {
                    if (stack.isEmpty()) {
                        isValid = false;
                        break;
                    } else {
                        stack.pop();
                    }
                }
            }

            if (!stack.isEmpty()) {
                isValid = false;
            }

            System.out.println(isValid ? "YES" : "NO");
        }
    }
}