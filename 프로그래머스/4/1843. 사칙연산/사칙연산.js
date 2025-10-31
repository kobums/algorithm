function solution(arr) {
    // 숫자만 추출
    const numbers = arr.filter((_, i) => i % 2 === 0).map(Number);
    // 연산자만 추출
    const operators = arr.filter((_, i) => i % 2 === 1);
    
    const n = numbers.length;
    
    // DP 테이블 초기화
    const maxDp = Array.from({ length: n }, () => 
        new Array(n).fill(-Infinity)
    );
    const minDp = Array.from({ length: n }, () => 
        new Array(n).fill(Infinity)
    );
    
    // 초기값: 숫자 하나만 있을 때
    for (let i = 0; i < n; i++) {
        maxDp[i][i] = numbers[i];
        minDp[i][i] = numbers[i];
    }
    
    // 구간 길이를 늘려가며 계산
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            
            // i~j 구간을 k 지점에서 나누기
            for (let k = i; k < j; k++) {
                const op = operators[k]; // k번째 연산자
                
                if (op === '+') {
                    // 덧셈: 최대 + 최대, 최소 + 최소
                    maxDp[i][j] = Math.max(
                        maxDp[i][j],
                        maxDp[i][k] + maxDp[k + 1][j]
                    );
                    minDp[i][j] = Math.min(
                        minDp[i][j],
                        minDp[i][k] + minDp[k + 1][j]
                    );
                } else { // op === '-'
                    // 뺄셈: 최대 - 최소, 최소 - 최대
                    maxDp[i][j] = Math.max(
                        maxDp[i][j],
                        maxDp[i][k] - minDp[k + 1][j]
                    );
                    minDp[i][j] = Math.min(
                        minDp[i][j],
                        minDp[i][k] - maxDp[k + 1][j]
                    );
                }
            }
        }
    }
    
    return maxDp[0][n - 1];
}