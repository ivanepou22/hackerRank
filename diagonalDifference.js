function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;
    let difference = 0;
    for (let index = 0; index < arr.length; index++) {
        const element1 = arr[index][index];
        let reverse1 = (arr.length - 1) - index;
        const element2 = arr[reverse1][index];
        sum1 = element1 + sum1;
        sum2 = element2 + sum2;
    }
    difference = sum1 - sum2;
    return (Math.abs(difference));
}

let myArray = [[11,2,4],
                [4,5,6],
                [10,8,-12]];
console.log(diagonalDifference(myArray));

//https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen