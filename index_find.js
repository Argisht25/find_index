//find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.
function test(ind) {
    let res = false
    for (let i = 0; i < ind.length; i++) {
       if (ind[i] % 10 === 0) {
          return i
       }
    }
    return res
 }