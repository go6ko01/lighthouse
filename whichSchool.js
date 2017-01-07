function whichSchool(age){
  var elemSchool = "Elementary School"
  var secSchool = "Secondary School"
  var LightLabs = "Lighthouse Labs"

  var a = " "
  if (age < 13) {
    return "Go to "+elemSchool
  }else if(age >= 13 && age <= 18) {
    return "Go to "+secSchool
  }else if (age >= 19 && age <= 125) {
    return "Go to "+LightLabs
  }else {
    return "You are late again!"
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
