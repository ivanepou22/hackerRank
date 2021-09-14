function birthdayCakeCandles(candles) {
    // Write your code here
    let maxArray = [];
    let tallestCandles = 0;
    let maxValue = Math.max(...candles);
    for (let index = 0; index < candles.length; index++) {
        if (candles[index] === maxValue){
            maxArray.push(candles[index]);
        }
    }
    tallestCandles = maxArray.length;
    return tallestCandles
}

let candle = [3,2,1,3];
birthdayCakeCandles(candle);

/**
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */