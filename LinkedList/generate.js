var generateMatrix = function(n) {
    let matrix = [];
    let row=0,col=0;
    for(let i=0 ; i<n ; i++){
        matrix[i] = new Array(n);
    }
    let num = 1;
    let colN = n;
    let rowN = n;
    let step = 1;
    let round = 0;
    while (num <=n*n){
        // left
        while(col < colN){
            if(matrix[row][col] === undefined){
                matrix[row][col] = num;
                num++;
            }
            col++;
        }
        col--;
        colN--;
        //down
        while(row+1 < rowN){
            if(matrix[row+1][col] === undefined){
                matrix[row+1][col] = num;
                num++;
            }

            row++;
        }
        rowN--;
        //right
        while(step <= colN){
            if(matrix[row][col -1] === undefined){
                matrix[row][col -1] = num;
                num++;
                col--;
            }
            step++;
        }
        step=1;
        //up
        while(step <= rowN){
            if(matrix[row-1][col] === undefined){
                matrix[row-1][col]= num;
                num++;
                row--;
            }
            step++;
        }
        round++;
        step=1;
        col=0;
        row=round;
        
    }
    
    return matrix;
    
};

console.log(generateMatrix(5));
