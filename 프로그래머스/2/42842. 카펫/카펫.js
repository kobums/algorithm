function solution(brown, yellow) {
    var answer = [];
    var all = brown + yellow;
    
    for (let i = 3; i < all; i++) {
        var j = all / i
        if (((i-2) * (j-2)) == yellow) {
            if (i > j) {
                answer[0] = i
                answer[1] = j
            } else {
                answer[0] = j
                answer[1] = i
            }
        }
    }
    
    return answer;
}

