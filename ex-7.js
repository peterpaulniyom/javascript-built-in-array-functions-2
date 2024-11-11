function isPalindrome(string) {
  const stringArray = string.split("");
  // const stringArrayReverse = stringArray.reverse();
  console.log(stringArray === stringArray.reverse());

  const reversedArray = [...stringArray].reverse(); // create a reversed copy of array
  if (stringArray.join("")===reversedArray.join("")){
    return true;
  }else{
    return false;
  }

}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false