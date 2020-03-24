const rotateMatrix = (matrix) => {
    if(matrix.length === 0 || matrix.length !== matrix[0].length) return false;
    let n = matrix.length;
    for(let layer = 0 ; layer < n/2 ; layer++){
        let first = layer;
        let last = n - 1 - layer;
        for(let i=first ; i<last;i++){
            let offset = i-first;
            let top = matrix[first][i];
            matrix[first][i] = matrix[last-offset][first];
            matrix[last-offset][first] = matrix[last][last-offset];
            matrix[last][last-offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
}
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
for(let i=0 ; i<matrix[0].length;i++)
    console.log(matrix[i])
console.log('----------')
rotateMatrix(matrix);
for(let i=0 ; i<matrix[0].length;i++)
    console.log(matrix[i])