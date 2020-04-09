var maxArea = function(height) {
    let max=Math.min(height[0],height[1]);
    for(let i=0; i<height.length ; i++){
        for(let j=0 ; j<height.length ; j++){
            if(i !==j){
                let tmpmax = (Math.abs(j-i))*(Math.min(height[i],height[j]));
                if(tmpmax > max) max = tmpmax;
            }
        }
    }
    return max;
};

let arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));