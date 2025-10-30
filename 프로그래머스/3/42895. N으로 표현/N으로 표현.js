function solution(N, number) {
    // 같으면 1개 사용
    if (N === number) return 1;
    
    // dp[i] = N을 i개 사용해서 만들 수 있는 숫자들의 Set
    const dp = Array.from({ length: 9 }, () => new Set());
    
    // dp 초기화: dp[i]에 N을 i번 이어붙인 수 추가
    // dp[1] = {5}, dp[2] = {55}, dp[3] = {555}, ...
    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i)));
    }
    
    // i개 사용하는 모든 경우의 수 계산
    for (let i = 1; i <= 8; i++) {
        // i = j + k로 분할 (1+1, 1+2, 2+1, 1+3, 2+2, 3+1, ...)
        for (let j = 1; j < i; j++) {
            const k = i - j;
            
            // dp[j]의 모든 수와 dp[k]의 모든 수를 사칙연산
            for (const num1 of dp[j]) {
                for (const num2 of dp[k]) {
                    dp[i].add(num1 + num2);  // 덧셈
                    dp[i].add(num1 - num2);  // 뺄셈
                    dp[i].add(num1 * num2);  // 곱셈
                    if (num2 !== 0) {
                        dp[i].add(Math.floor(num1 / num2));  // 나눗셈
                    }
                }
            }
        }
        
        // i개 사용해서 number를 만들 수 있으면 반환
        if (dp[i].has(number)) {
            return i;
        }
    }
    
    // 8개까지 사용해도 못 만들면 -1
    return -1;
}