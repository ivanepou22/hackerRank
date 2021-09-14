function miniMaxSum(arr) {
    // Write your code here
    let sums = []; //empty array to contain sums
    let removedElement = 0;
    let newArray = [];
    let minValue = 0;
    let maxValue = 0;
    for (let index = 0; index < arr.length; index++) {
        let sum = 0;
        removedElement = arr[index];
        arr.splice(index,1);
        newArray = arr;
        for (let i = 0; i < newArray.length; i++) {
            const element = newArray[i];
            sum+=element;
        }
        sums.push(sum)
        arr.splice(index, 0, removedElement);
    }

    //find max sum
    maxValue = Math.max(...sums);
    //find min sum
    minValue = Math.min(...sums);

    console.log(minValue,maxValue);
}

let values = [1,2,3,4,5];
miniMaxSum(values);

/*
https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/