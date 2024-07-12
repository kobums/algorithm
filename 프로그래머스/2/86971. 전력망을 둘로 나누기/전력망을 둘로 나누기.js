function solution(n, wires) {
    var answer = 1000;
    const grapf = Array.from(Array(n+1), () => [])
    
    for (const wire of wires) {
        let [from, to] = wire
        
        grapf[from].push(to)
        grapf[to].push(from)
    }
    
    function bfs(start, except) {
        let count = 0
        let queue = [start]
        let visited = Array.from(Array(n+1), () => false)
        
        visited[start] = true
        
        while(queue.length) {
            let index = queue.shift()
            grapf[index].forEach((element) => {
                if (element !== except && !visited[element]) {
                    visited[element] = true
                    queue.push(element)
                }
            })
            count++
        }
        return count
    }
    
    wires.forEach((element) => {
        let [from, to] = element
        answer = Math.min(answer, Math.abs(n - (2 * bfs(from, to))))
    })
    
    
    return answer;
}