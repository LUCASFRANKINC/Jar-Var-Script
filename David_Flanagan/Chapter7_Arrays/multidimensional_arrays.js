/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

// 2D array creation

let array2D = new Array(5);

//Create an array inside every index
for(let i = 0; i < array2D.length; i++) {
    array2D[i] = new Array(5);
}

//Initialize the array
for(let i = 0; i < array2D.length; i++) {
    // loop inner array
    for(let j = 0; j < array2D[i].length; j++) {
        array2D[i][j] = ((i+1)*(j+1)) ** 2;
    }
}

// print the values
for(let i of array2D) {
    let string = "| ";
    for(let j of i) {
        string += `${j.toString().padStart(3)} |`; // Use padStart to ensure the layout is perfect
    }
    console.log(string);
}
/* output
|   0 |  0 |  0 |  0 |  0 |
|   0 |  1 |  4 |  9 | 16 |
|   0 |  4 | 16 | 36 | 64 |
|   0 |  9 | 36 | 81 |144 |
|   0 | 16 | 64 |144 |256 |
 */

console.log("\n\n");
//Implement 3-D arrays => [[[x, y, z], [a,b,c]]]
const array3D = new Array(3); // [,,,,,]

//create the 3D array
for(let i = 0; i < array3D.length; i++) {
    array3D[i] = new Array(3)
    //loop created array
    for(let j = 0; j < array3D[i].length; j++) {
        array3D[i][j] = new Array(3); //New array at 3rd-layer depth
        //loop new array, initialize it :)
        let stringStore = "|"
        for(let val = 0; val < array3D[i][j].length; val++) {
            let indexValue = array3D[i][j][val] = ((i+1) * (j+1) * (val+1)) ** 3; // added 1 to get rid of 0 values in index
            stringStore += `${indexValue.toString().padStart(7)} |` //highest value has a 7 figure
        }
        // Print the values here, formatted
        console.log(stringStore);
    }
}
/* Output ⬇
|      1 |      8 |     27 |
|      8 |     64 |    216 |
|     27 |    216 |    729 |
|      8 |     64 |    216 |
|     64 |    512 |   1728 |
|    216 |   1728 |   5832 |
|     27 |    216 |    729 |
|    216 |   1728 |   5832 |
|    729 |   5832 |  19683 |
*/
