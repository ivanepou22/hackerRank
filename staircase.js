function staircase(n) {
    // Write your code here
    let value =''; //declare empty string
    for (let x = 1; x <= n; x++) {
        // spaces in the beging of each row
        for (let y = 0; y < n - x; y++) {
            value += ' ';
        }
        // printing pattern
        for (let z = 0; z < x; z++) {
            value += '#';
        }
        //avoid creating a new empty line in the final iteration
        if (x < n) {
            value += '\n';
        }
      }
      console.log(value);
}

let arrr = 6;
staircase(arrr);

/*
https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/