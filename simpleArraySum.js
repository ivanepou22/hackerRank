// Getting sum of the given array elements
function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    ar.forEach(elem => {
        sum+=elem;
    });
    return (sum);
}

arrayValue = [1,2,3,4,10,11];
simpleArraySum(arrayValue);