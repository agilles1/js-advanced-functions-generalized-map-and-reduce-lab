// Add your functions here
function map(array, f) {
    let m = []
    for (let i = 0; i < array.length; i++ ) {
        m.push(f(array[i]))
    }
    return m
  }

function reduce(array, f, start) {
    let s = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (i; i < array.length; i++ ) {
       s = f(array[i], s)
    }
    return s
}

