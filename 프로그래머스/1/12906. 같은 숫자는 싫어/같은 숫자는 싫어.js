function solution(arr)
{
    var answer = [];

    for (var ar of arr) {
        if (answer.length == 0) {
            answer.push(ar)
            continue
        }
        if(answer[answer.length-1] !== ar) {
            answer.push(ar)
        }
    }
    
    return answer;
}