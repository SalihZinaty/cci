function Node(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
     };

var cloneGraph = function(node) {
       let cloned = [];
       for(let i=0 ; i< node.length ; i++){
           let start = new Node(i+1,[...node[i]]);
           cloned.push(start);
       }
       return cloned;
   };

let adjList = [[2,4],[1,3],[2,4],[1,3]];
console.log(cloneGraph(adjList));

