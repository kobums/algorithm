import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();

        int[] pos = new int[26]; // 알파벳 개수만큼 배열 생성
        for (int i = 0; i < 26; i++) {
            pos[i] = -1; // 초기값은 -1로 설정
        }

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            int index = c - 'a'; // 'a' = 0, 'b' = 1, ..., 'z' = 25

            if (pos[index] == -1) {
                pos[index] = i; // 처음 등장한 위치만 저장
            }
        }

        for (int i = 0; i < 26; i++) {
            System.out.print(pos[i] + " ");
        }
    }
}