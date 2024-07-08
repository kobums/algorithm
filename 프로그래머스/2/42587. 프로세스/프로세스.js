function solution(priorities, location) {
    var loarr = []
    var answer = 0;
    var max = 0;
    
    for (var i = 0; i < priorities.length; i++) {
        loarr[i] = i
    }
    
    while (priorities.length != 0) {
        max = Math.max(...priorities)
        if (priorities[0] < max) {
            priorities.push(priorities.shift())
            loarr.push(loarr.shift())
        } else {
            answer += 1
            priorities.shift()
            if (loarr.shift() == location) {
                return answer
            }
        }
        
    }
    
    
    
    
    
    
}