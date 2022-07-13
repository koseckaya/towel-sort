
// You should implement your task here.

module.exports = function towelSort (arr) {
    let answ = []
    if ( !arr) return answ=[];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            let colIndx = i%2 === 0 ? j :
                (arr[i].length - j - 1)
            answ.push(arr[i][colIndx])
        }
    }
  return answ
}
