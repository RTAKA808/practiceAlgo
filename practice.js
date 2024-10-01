
array=[0,0,0,1,2,3]

function switchIt(array){
  let temp=0;
  for(let i=0;i<array.length;i++){
    if(array[i]!==0){
      array[temp]=array[i];
      temp++;
    }
  }
  for (let i=temp; i<array.length;i++){
    array[i]=0;
  }
  return array
}

console.log(switchIt(array));