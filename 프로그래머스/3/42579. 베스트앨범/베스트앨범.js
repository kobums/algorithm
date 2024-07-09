function solution(genres, plays) {
    var answer = [];
    var playlist = {};
    var categoryArr = {};
    for (var i = 0; i < plays.length; i++) {
        if (!playlist[genres[i]]) {
            playlist[genres[i]] = {items: [], total: 0}
        }
        playlist[genres[i]].items.push({play: plays[i], index: i})
        playlist[genres[i]].total += plays[i]
    }
    
    let map = new Map(Object.entries(playlist));
    let newmap = new Map();

    map.forEach((value, key, map) => {
        key = value.total
        newmap.set(value.total, value.items);
    });
    
    var maptoArray = [...newmap].sort((a, b) => b[0] - a[0]);
    
    for(var i = 0; i < maptoArray.length; i++) {
        var newmaptoArray = maptoArray[i][1].sort((a, b) => b.play - a.play)
        answer.push(newmaptoArray[0].index)
        if (newmaptoArray.length > 1) {
            answer.push(newmaptoArray[1].index)
        }
    }
    return answer;
}