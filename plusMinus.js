function plusMinus(arr) {
    // Write your code here
    let negativeArray = [];
    let positiveArray = [];
    let zeroArray = [];
    let negativeRatio = 0;
    let positiveRatio = 0;
    let zeroRatio = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element > 0) {
            positiveArray.push(element);
        } else if (element === 0){
            zeroArray.push(element);
        } else if (element < 0) {
            negativeArray.push(element);
        }
    }

    positiveRatio = Number.parseFloat(positiveArray.length/arr.length).toFixed(6);
    zeroRatio = Number.parseFloat(zeroArray.length/arr.length).toFixed(6);
    negativeRatio = Number.parseFloat(negativeArray.length/arr.length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

//let arr = [1,1,0,-1,-1];
let arr = [-4,3,-9,0,4,1];
plusMinus(arr);
/*
    Follow the link below for instructions
    https://www.hackerrank.com/challenges/plus-minus/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/