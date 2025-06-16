import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int T = Integer.parseInt(br.readLine()); // 테스트 케이스 수

        for (int i = 0; i < T; i++) {
            String line = br.readLine();
            int score = 0;
            int streak = 0;

            for (int j = 0; j < line.length(); j++) {
                if (line.charAt(j) == 'O') {
                    streak++;
                    score += streak;
                } else {
                    streak = 0;
                }
            }
            System.out.println(score);
        }
    }
}