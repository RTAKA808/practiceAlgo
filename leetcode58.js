let phrase = "   fly me   to   the moon  "


function lengthOfLastWord(phrase) {

  let array = phrase.trim().split(" ");
  let lastIndex= array.length-1
  let lastString=array[lastIndex]
  let splitString=lastString.split("")
  let lastLength=splitString.length
  console.log(lastLength)
};

lengthOfLastWord(phrase)