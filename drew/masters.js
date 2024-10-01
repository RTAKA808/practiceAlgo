//input Code or Corgis
//output CCoCodCode or CCoCorCorgCorgiCorgis

const input= 'Corgis'

function masters(input){
  //split the string into an array of letters
  let array=input.split('')
  //logs the output string1
  let output='';

  for(let i = 0; i < array.length; i++ ){
    //second loop adds the letters to the output string for every iteration up to i
    for(let j = 0; j <= i; j++ ){
      output+=array[j];
    }
  }
console.log(output)
}

masters(input)
