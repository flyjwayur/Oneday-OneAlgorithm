function palindrome(str) {
  // remove all non-alphanumeric characters
  var alphaStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
  // reverse the alphaStr
  var reverStr = alphaStr.split('').reverse().join('');
  
  if(alphaStr === reverStr){
     return true;
  }else{
    return false;
  }
 
}