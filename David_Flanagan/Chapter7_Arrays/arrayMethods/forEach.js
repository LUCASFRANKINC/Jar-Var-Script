let cpyArr = [1, 2, 3, 4, 5]
cpyArr.copyWithin(1)
console.log(cpyArr) // the output is [ 1, 1, 2, 3, 4 ]
cpyArr.copyWithin(2, 3, 5); // the output is [ 1, 1, 3, 4, 4 ]
console.log(cpyArr)
cpyArr.copyWithin(-2, -3, -1); // the output is [ 1, 1, 3, 3, 4 ]
console.log(cpyArr) // the output is [ 1, 1, 3, 3, 4 ]
cpyArr.copyWithin(-4, -5, -2);
console.log(cpyArr) // the output is [ 1, 1, 1, 3, 4 ]
cpyArr.copyWithin(2, 1)
console.log(cpyArr) // the output is [ 1, 1, 1, 1, 3 ]
cpyArr.copyWithin(0, -2, 5);
console.log(cpyArr) // the output is [ 1, 3, 1, 1, 3 ]