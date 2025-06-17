import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken()); // 포켓몬 수
        int M = Integer.parseInt(st.nextToken()); // 질문의 수

        Map<String, Integer> nameToNum = new HashMap<>();
        Map<Integer, String> numToName = new HashMap<>();

        for (int i = 1; i <= N; i++) {
            String name = br.readLine();
            nameToNum.put(name, i);
            numToName.put(i, name);
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < M; i++) {
            String query = br.readLine();

            if (isNumeric(query)) {
                int num = Integer.parseInt(query);
                sb.append(numToName.get(num)).append("\n");
            } else {
                sb.append(nameToNum.get(query)).append("\n");
            }
        }

        System.out.print(sb.toString());
    }

    // 숫자인지 판별하는 함수
    private static boolean isNumeric(String s) {
        return s.chars().allMatch(Character::isDigit);
    }
}