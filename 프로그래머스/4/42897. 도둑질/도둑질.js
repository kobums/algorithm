function solution(money) {
    const n = money.length;
    
    if (n === 1) return money[0];
    
    const rob = (arr) => {
        let prev2 = 0, prev1 = 0;
        
        for (const num of arr) {
            const temp = prev1;
            prev1 = Math.max(prev1, prev2 + num);
            prev2 = temp;
        }
        
        return prev1;
    };
    
    // 첫 집 포함 vs 마지막 집 포함
    return Math.max(
        rob(money.slice(0, -1)),  // 마지막 제외
        rob(money.slice(1))       // 첫 번째 제외
    );
}