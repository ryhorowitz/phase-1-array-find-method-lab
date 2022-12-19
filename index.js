// code your solution here

function wonSuperBowl(elem, index, array) {
  return (elem.result === "W") 
}
//   The function should receive 1 argument, an Array of JavaScript Objects
function superbowlWin(array) {
// Each object has two properties: year and result
console.log('console.log', array.find(wonSuperBowl))
  const record = array.find(wonSuperBowl)
  if (record === undefined) {
    return undefined
  }
  return record.year
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined
}