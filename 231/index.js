let n=4
var isPowerOfTwo = function(n) {
    if (n==0){
      return false
    }
    while(n % 2==0){
      n /= 2
    }
    return n==1
};

console.log(isPowerOfTwo(n))