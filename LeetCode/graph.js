var networkDelayTime = function(times, N, K) {
    //check if there is a path
    let hash= {};
    let origin = [];
    let sources ={};
    //find the origin
    for(let node of times){
        let source = node[0];
        if(source === K) {
            origin.push(node);
            hash[node[1]] = node[2];
        }
    }
    for(let node of times){
        let source = node[0];
        if(sources[source] === undefined){
        for(let i=0 ; i<times.length ; i++){
            if(times[i][0] === source){
                if(sources[source] === undefined) sources[source] = [times[i][1]];
                else sources[source].push(times[i][1]);
            }
        }
    }
    }
    
    for(let i=0 ; i<origin.length ; i++){
        let dest = origin[i][1];
        let tmpdest = dest;
        let time = origin[i][2];
        for(let j=0 ; j<times.length ; j++){
            if(times[j][0] === tmpdest && times[j][0]!==origin[i][0] && times[j][1] !==origin[i][0]){
                time += times[j][2];
                tmpdest = times[j][1];
                if(hash[tmpdest] === undefined) hash[tmpdest] = time;
                else if(hash[tmpdest] > time) hash[tmpdest] = time;
            }
        }
    }
    if(Object.keys(hash).length === N-1 && Object.keys(hash).length !==0){
        let max=0;
        for(let set in hash){
            if(hash[set] > max) max=hash[set]; 
        }
        return max;
    }
    else return -1;
};
let times = [[1,2,1],[1,4,1],[2,3,1],[3,5,1],[4,3,3],[4,5,3]];

console.log(networkDelayTime(times,5,1))
