function solution(answers) {
    var answer = [];
    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var re1 = [1, 2, 3, 4, 5];
    var re2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var re3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] == re1[i%5]) {
            answer1++
        }
        if (answers[i] == re2[i%8]) {
            answer2++
        }
        if (answers[i] == re3[i%10]) {
            answer3++
        }
    }
    
    var k = [answer1, answer2, answer3]
    var max = 0;
    for (var i = 0; i < k.length; i++) {
        if (max < k[i]) {
            answer = [i+1]
            max = k[i]
        } else if (max == k[i]) {
            answer.push(i+1)
        }
    }
    
    return answer;
}