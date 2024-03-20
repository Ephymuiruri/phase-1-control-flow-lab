function scuberGreetingForFeet(feet){
  // Write your code here!
   if (feet<=400){
   feet = 'This one is on me!'}
   else if (feet<=2000){
    feet = 'That will be twenty bucks.'
   }
   else if(feet<2500){
    feet='I will gladly take your thirty bucks.'
   }
   else {
    feet='No can do.'
   }
   return(feet)
}
console.log(scuberGreetingForFeet(2501))

function ternaryCheckCity(city){
  // Write your code here!
  city==='NYC' ? (city='Ok, sounds good.'):(city="No go.")
  return(city)
}
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
   case 'generous'
  : tip = 'Thank you so much.'
  break
  case 'not as generous'
  : tip= 'Thank you.'
  break
  default
  :tip ='Bye.'
  break
  }
  return(tip)
}