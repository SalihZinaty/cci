const Graph = require('./Graph');
const RouteBetweenNodes = (graph,node1,node2)=>{
    let nodes = Object.keys(graph.adjacentList);
    let mid;
    for(let node of nodes){
        if(graph.adjacentList[node][node2] === true){
            console.log('dest ' + node2 + ' is reachd by ' + node);
            mid = node;
            break;
        }
    }
    for(let node of nodes){
        if(graph.adjacentList[node][mid] === true){
            console.log('destination node: '+node2 + ' is reached')
            return true;
        }
    }
    return false;
}
let graph = new Graph();
graph.addVertex(1);
graph.addVertex(3);
graph.addVertex(5);
graph.addVertex(7);
graph.addVertex(9);
graph.addEdge(1,5);
graph.addEdge(1,3);
graph.addEdge(5,7);
graph.addEdge(3,7);
graph.addEdge(3,5);
graph.addEdge(7,9);
console.log(graph.adjacentList);
graph.showConnections();
RouteBetweenNodes(graph,1,9);