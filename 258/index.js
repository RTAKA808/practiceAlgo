const num=38;

var addDigits = function(num) {
  //turn number into string and split it 
  let splitArray=num.toString().split('')
  //add the elements ['3','8'] and convert it back to a number
  let sumOne=splitArray.reduce((accumulator,element)=> accumulator+parseInt(element),0);
  // we get 11, now do a check to see if it is one digit
  while(sumOne.toString().length>1){
    splitArray = sumOne.toString().split('');
    sumOne = splitArray.reduce((accumulator, element) => accumulator + parseInt(element), 0);
  }
  return sumOne
  
};
console.log(addDigits(num))
