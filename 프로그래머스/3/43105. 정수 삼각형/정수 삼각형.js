function solution(triangle) {
    const height = triangle.length;
    
    // 아래에서 위로 (원본 배열 직접 수정)
    for (let i = height - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(
                triangle[i + 1][j],
                triangle[i + 1][j + 1]
            );
        }
    }
    
    return triangle[0][0];
}