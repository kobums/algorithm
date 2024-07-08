function solution(prices) {
    var answer = [];
    var stack = [];
    var tf = true;
    
    prices.push(0);
    
    for (var i = 0; i < prices.length; i++) {
        for (;tf;) {
            if (prices[stack[stack.length-1]] > prices[i]) {
                if (prices[i] !== 0) {
                    answer[stack[stack.length-1]] = i - stack[stack.length-1]   
                } else {
                    answer[stack[stack.length-1]] = i - stack[stack.length-1] -1
                }
                stack.pop()
            } else {
                tf = false;
            }
        }
        stack.push(i)
        tf = true;
    }
    
    
    return answer;
}