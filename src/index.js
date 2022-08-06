
module.exports = function towelSort (matrix) {
    if(!matrix){return []}
    let resultArr = []
     if( arguments === undefined){  return []};
        for(let i = 1; i <= matrix.length; i++){
           let tempArr = i % 2 == 0? matrix[i-1].reverse(): matrix[i-1];
           console.log(tempArr);
           tempArr.forEach(element => {
              resultArr.push(element); 
           });
        }
        
    return resultArr;
}
