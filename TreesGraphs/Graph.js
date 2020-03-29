//this is a class for a directed Graph
class Graph {
    constructor(){
        this.NumberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = {};
        this.NumberOfNodes++;
    }
    addEdge(node1,node2){
        this.adjacentList[node1][node2]=true;
    }
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for(let i=0 ; i<allNodes.length ; i++){
            let node = allNodes[i];
            let printed = node + " --> ";
            for(let j=0 ; j < allNodes.length ; j++ ){
                if(this.adjacentList[node][allNodes[j]] === true)
                printed = printed + allNodes[j] + " ";
            }
            console.log(printed);
        }
    }
}
module.exports = Graph;