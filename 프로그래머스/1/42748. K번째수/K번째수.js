function solution(array, commands) {
    var answer = [];
    
    for (var i = 0; i < commands.length; i++) {
        var newarray = array.slice(commands[i][0]-1, commands[i][1])
        var sortNewArray = newarray.sort((a, b) => a-b)
        answer.push(sortNewArray[commands[i][2] -1])
        
    }
    return answer;
}