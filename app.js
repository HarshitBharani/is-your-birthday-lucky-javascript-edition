var dobInput = document.querySelector("#dob-input");
var luckyNumber = document.querySelector("#lucky-number");
var btn = document.querySelector("#btn");
 var output = document.querySelector("#output")

 var result = 0 ;
function clickHandler(){
    var dat= dobInput.value;
   var dateAdd = 0 ;
 while(dat>0){
     dateAdd = dateAdd + Math.floor(dat%10);
     dat = dat/10;
 }
  result= dateAdd%luckyNumber.value;
  if(result===0){
    output.innerHTML = "hey you date of birth is lucky"

  }else{
    output.innerHTML = "sorry your date of birth is not lucky"
  }
  
}





btn.addEventListener('click', clickHandler);