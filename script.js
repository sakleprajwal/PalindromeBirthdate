var dob = document.querySelector("#dob");
var checkBtn = document.querySelector("#checkBtn");
var outputArea = document.querySelector(".outputArea");
var nearestPalindromeDate;

checkBtn.addEventListener('click', function calculatePalindrome(){
  var flag = isPalindrome(dob.value)
  if(flag){
    outputArea.innerHTML = "Cheers!! You are one of the luckiest person in this world."
  }else{
    var nextDate = findNearestPalindromeDate(dob.value);
  outputArea.innerHTML = "Nearest palindrome date is "+ nearestPalindromeDate+" and you missed it by "+nextDate+" days."
  }
  
});

function isPalindrome(date){
  var straightString = reformatDate(date);
  var reversetString = straightString.split("").reverse().join("");
  if(straightString === reversetString){
    return true;
  }else{
    return false;
  }
}

function findNearestPalindromeDate(currentDate){
  var nextDate = currentDate;
  var previousDate = currentDate;
  for(var i=0;i>-1;i++){
    nextDate = findNextDate(nextDate);
    previousDate = findPreviousDate(previousDate);
    var flagNext = isPalindrome(nextDate);
    var flagPrevious = isPalindrome(previousDate);
    if(flagNext){
      nearestPalindromeDate = nextDate;
      return i;
    }else if(flagPrevious){
      nearestPalindromeDate = previousDate;
      return i;
    }
  }
}

function findNextDate(date){
  let d = new Date(date);
  // Adding one date to the present date
  d.setDate(d.getDate() + 1);
  let year = d.getFullYear()
  let month = String(d.getMonth() + 1)
  let day = String(d.getDate())
  // Adding leading 0 if the day or month
  // is one digit value
  month = month.length == 1 ? month.padStart('2', '0') : month;
  day = day.length == 1 ? day.padStart('2', '0') : day;
  // Printing the present date
  return (`${year}-${month}-${day}`);
}

function findPreviousDate(date){
  let d = new Date(date);
  // Adding one date to the present date
  d.setDate(d.getDate() - 1);
  let year = d.getFullYear()
  let month = String(d.getMonth() + 1)
  let day = String(d.getDate())
  // Adding leading 0 if the day or month
  // is one digit value
  month = month.length == 1 ? month.padStart('2', '0') : month;
  day = day.length == 1 ? day.padStart('2', '0') : day;
  // Printing the present date
  return (`${year}-${month}-${day}`);
}

function reformatDate(dateStr)
{
  dArr = dateStr.split("-");
  return dArr[2] +dArr[1] +dArr[0];
}