function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var stack = [];
    var truck = [];
    
    for (var i = 0; i < truck_weights.length; i++) {
        truck[i] = {
            weight: truck_weights[i],
            time: bridge_length
        }
    }
    
    while (truck.length != 0 || stack.length != 0) {
        let sum = stack.reduce((acc, cur) => {
            return acc + cur.weight;
        }, 0);
        
        if (truck.length != 0 && (sum+truck[0].weight) <= weight) {
            stack.push(truck.shift())
        }
        
        answer += 1;
        
        for (var i = 0; i < stack.length; i++) {
            stack[i].time -= 1
        }
        
        if (stack[0].time == 0) {
            stack.shift()
        }
    }
    return answer+1;
}