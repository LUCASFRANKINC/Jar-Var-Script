const typedArray1 = new Int8Array(8);
typedArray1[5] = 40;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[6] = 41;

console.log("Array 1: " + typedArray1);
console.log("Array 2:" + typedArray2);

//Created as a resizable buffer without a specified length 

const buffer = new ArrayBuffer(8, {maxByteLength : 16});
const float32 = new Float32Array(buffer);

console.log("byteLength: " + float32.byteLength);
console.log(`length: ${float32.length}`);
