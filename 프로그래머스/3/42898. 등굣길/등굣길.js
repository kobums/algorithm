function solution(m, n, puddles) {
    const MOD = 1000000007;
    
    // DP 테이블 생성 (1-indexed를 위해 +1)
    const dp = Array.from({ length: n + 1 }, () => 
        new Array(m + 1).fill(0)
    );
    
    // 물웅덩이 표시
    for (const [x, y] of puddles) {
        dp[y][x] = -1;  // 주의: puddles는 [x, y] 형식
    }
    
    // 시작점 초기화
    dp[1][1] = 1;
    
    // DP 계산
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 시작점은 건너뛰기
            if (i === 1 && j === 1) continue;
            
            // 물웅덩이면 건너뛰기
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            
            // 위쪽에서 오는 경로
            const fromTop = dp[i - 1][j] === -1 ? 0 : dp[i - 1][j];
            // 왼쪽에서 오는 경로
            const fromLeft = dp[i][j - 1] === -1 ? 0 : dp[i][j - 1];
            
            dp[i][j] = (fromTop + fromLeft) % MOD;
        }
    }
    
    return dp[n][m];
}