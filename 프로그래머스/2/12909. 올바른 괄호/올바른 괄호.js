function solution(s){
    var answer = true;
    var res = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == "(") {
            res = res +1
        } else {
            res = res -1
        }
        
        if (res < 0) {
            return false;
        }
    }

    
    if (res !== 0) {
        return false;
    } else {
        return true;
    }
}