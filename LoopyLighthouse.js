for (var x = 100; x <= 200; x++) {
  //condition 3: number is multiple of both 3 and 4. print "LoopyLighthouse"
  if ((x % 3 === 0) && (x % 4 === 0)) {
    console.log("LoopyLighthouse");
  }
  //condition 1: number is a multiple of 3. print "Loopy" instead
  else if (x % 3 === 0) {
    console.log("Loopy");
  }
  //condition 2: number is multiple of 4. Print "Lighthouse" instead
  else if (x % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    //no exception. normal condition. simply prints value of x.
    console.log(x);
  }
}
