"use strict"

const fmath = (function() {
  const sum = (x, y) => x+y
  const square = x => x ** 2

function mean(data) {
  if(!Array.isArray(data)) throw new TypeError("Expected Array! Found " + typeof data)
  return data.reduce(sum) / data.length
}

function stdDev(data) {
  if(!Array.isArray(data)) throw new TypeError("Expected Array! Found " + typeof data)
  const meanValue = mean(data)
  return Math.sqrt((data.map(value => value - meanValue).map(square).reduce(sum)) / (data.length - 1))
}
return {mean, stdDev} // Export functions as properties of an object
}())

let data = [5, 10, 15, 20, 25, 30, 35]
console.log(`Mean: ${fmath.mean(data)}`)
console.log(`Standard Deviation: ${fmath.stdDev(data)}`)
