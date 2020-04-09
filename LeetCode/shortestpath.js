var jump = function(nums) {
    let graph = new Graph();
    for(let i=0; i<nums.length;i++){
        for(let j=1 ; j <= nums[i] ; j++){
            if(i+j < nums.length)
                graph.addEdge(i,i+j);
        }
    }
    let path = graph.shortestPath(0,nums.length-1);
    return (path.length-1);
};

class Graph {
  constructor(props) {
    this.neighbors = {}
  }

  addEdge(u, v) {
    if (!this.neighbors[u]) this.neighbors[u] = []
    this.neighbors[u].push(v)
  }
  
  shortestPath(start, end) {
    if (start == end) {
      return [start, end]
    }

    var queue = [start],
        visited = {},
        predecessor = {},
        tail = 0,
        path

    while(tail < queue.length) {
      var u = queue[tail++]
      if (!this.neighbors[u]) {
        continue
      }

      var neighbors = this.neighbors[u]
      for(var i = 0; i < neighbors.length; ++i) {
        var v = neighbors[i]
        if (visited[v]) {
          continue
        }
        visited[v] = true
        if (v === end) {   // Check if the path is complete.
          path = [ v ]   // If so, backtrack through the path.
          while (u !== start) {
            path.push(u)
            u = predecessor[u]
          }
          path.push(u)
          path.reverse()
          return path
        }
        predecessor[v] = u
        queue.push(v)
      }
    }

    return path
  }
}

let arr = [1,2];
console.log(jump(arr));