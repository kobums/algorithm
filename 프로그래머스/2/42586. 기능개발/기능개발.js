function solution(progresses, speeds) {
    var answer = [];
    var finish = [];
    for (let i = 0; i < progresses.length; i++) {
        var hmp = 100 - progresses[i]
        finish.push(Math.ceil(hmp / speeds[i]))
    }

    let re = 0;
    var stack = finish[0];
    finish.forEach((fi, i) => {
        if(stack < finish[i+1] || i == (finish.length -1)) {
             answer.push(i+1 - re)
             re = i + 1
             stack = finish[i+1]
        }
    })
    
    return answer;
}