function solution(clothes) {
    var answer = 1;
    var map = {};
    var categoryArr = [];
    
    for (var i = 0; i < clothes.length; i++) {
        var category = clothes[i][1]
        if (!map[category]) {
            map[category] = [];
            categoryArr.push(category);
        }
        map[category].push(clothes[i][0])
    }
    
    for (var i = 0; i < categoryArr.length; i++) {
        var category = categoryArr[i]
        answer = answer * (map[category].length + 1)
    }
    
    return answer - 1;
}