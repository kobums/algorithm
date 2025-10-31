function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 좌표를 2배로 확대 (최대 50 → 100)
    const MAX = 101;
    const board = Array.from({ length: MAX }, () => Array(MAX).fill(0));
    
    // 1. 모든 직사각형을 채우기 (내부 포함)
    for (const [x1, y1, x2, y2] of rectangle) {
        fillRectangle(board, x1 * 2, y1 * 2, x2 * 2, y2 * 2);
    }
    
    // 2. 각 직사각형의 내부를 제거 (테두리만 남김)
    for (const [x1, y1, x2, y2] of rectangle) {
        removeInside(board, x1 * 2, y1 * 2, x2 * 2, y2 * 2);
    }
    
    // 3. BFS로 최단거리 찾기
    const distance = bfs(
        board,
        characterX * 2,
        characterY * 2,
        itemX * 2,
        itemY * 2
    );
    
    // 4. 2배 확대했으므로 2로 나누기
    return distance / 2;
}

// 직사각형 채우기
function fillRectangle(board, x1, y1, x2, y2) {
    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            board[x][y] = 1;
        }
    }
}

// 직사각형 내부 제거 (테두리만 남기기)
function removeInside(board, x1, y1, x2, y2) {
    for (let x = x1 + 1; x < x2; x++) {
        for (let y = y1 + 1; y < y2; y++) {
            board[x][y] = 0;
        }
    }
}

// BFS로 최단거리 찾기
function bfs(board, startX, startY, endX, endY) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[startX, startY, 0]]; // [x, y, 거리]
    const visited = Array.from({ length: 101 }, () => Array(101).fill(false));
    visited[startX][startY] = true;
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        // 목적지 도착
        if (x === endX && y === endY) {
            return dist;
        }
        
        // 4방향 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 범위 체크 및 테두리인지 확인
            if (nx >= 0 && nx < 101 && ny >= 0 && ny < 101 &&
                board[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1; // 도달 불가능 (문제에서는 항상 도달 가능)
}