//A Sorting Algo where the largest values bubble up at the top

function Sort(array){
    for(let i=array.length; i>0; i--){
        for(let j=0 ; j<i-1 ; j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];
            }
        }

    }
    return array;
    
}

let res = Sort([5,4,3,2,1,7,6,9,8]);
console.log(res);

//Time Complexity - O(N^2)