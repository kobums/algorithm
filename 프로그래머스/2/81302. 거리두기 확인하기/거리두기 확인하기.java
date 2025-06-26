import java.util.*;

class Solution {
    public int[] solution(String[][] places) {
        int[] answer = new int[places.length];

        for (int i = 0; i < 5; i++) {
            answer[i] = isValid(places[i]) ? 1 : 0;
        }

        return answer;
    }

    private boolean isValid(String[] place) {
        int[][] dir = {{-1,0},{1,0},{0,-1},{0,1}};

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (place[i].charAt(j) != 'P') continue;

                Queue<int[]> q = new LinkedList<>();
                boolean[][] visited = new boolean[5][5];
                q.offer(new int[]{i, j, 0});
                visited[i][j] = true;

                while (!q.isEmpty()) {
                    int[] curr = q.poll();
                    int x = curr[0], y = curr[1], d = curr[2];

                    if (d >= 2) continue;

                    for (int[] move : dir) {
                        int nx = x + move[0], ny = y + move[1];
                        if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
                        if (visited[nx][ny] || place[nx].charAt(ny) == 'X') continue;

                        if (place[nx].charAt(ny) == 'P') return false;

                        visited[nx][ny] = true;
                        q.offer(new int[]{nx, ny, d + 1});
                    }
                }
            }
        }

        return true;
    }
}