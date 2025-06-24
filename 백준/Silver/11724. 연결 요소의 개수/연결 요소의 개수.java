import java.io.*;
import java.util.*;

public class Main {
    static List<List<Integer>> graph;
    static boolean[] visited;

    public static void dfs(int v) {
        visited[v] = true;
        for (int u : graph.get(v)) {
            if (!visited[u]) dfs(u);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken()); // 정점 수
        int M = Integer.parseInt(st.nextToken()); // 간선 수

        graph = new ArrayList<>();
        for (int i = 0; i <= N; i++) graph.add(new ArrayList<>());
        visited = new boolean[N + 1];

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        int count = 0;
        for (int i = 1; i <= N; i++) {
            if (!visited[i]) {
                dfs(i);
                count++;
            }
        }

        System.out.println(count);
    }
}