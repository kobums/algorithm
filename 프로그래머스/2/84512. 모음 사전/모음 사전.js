function solution(word) {
    var alphabet = ["A", "E", "I", "O", "U"]
    var dictionary = []
    
    function dfs(cur, len) {
        if (len > 5) return
        
        dictionary.push(cur)
        
        for (var i = 0; i < alphabet.length; i++) {
            dfs(cur + alphabet[i], len+1)
        }
    }
    
    dfs("", 0)
    
    return dictionary.indexOf(word)
    
}