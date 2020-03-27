//this is a class for a directed Graph
class Graph {
    constructor(){
        this.NumberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = []
        this.NumberOfNodes++;
    }
    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
    }
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for(vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
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
graph.addEdge(3,9);
graph.addEdge(3,5);
graph.showConnections();