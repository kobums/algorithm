function solution(sizes) {
    var answer = 0;
    var w = [];
    var h = []
    for (var i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > sizes[i][1]) {
            w[i] = sizes[i][0]
            h[i] = sizes[i][1]
        } else {
            w[i] = sizes[i][1]
            h[i] = sizes[i][0]
        }
    }
    
    answer = Math.max(...w) * Math.max(...h)
    
    return answer;
}