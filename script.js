var entercabin = confirm("You come across a strange house in the woods,do you want to go inside?");

if (entercabin == true) {

   var porridgechoice = prompt("you decide to enter the cabin and find some delicious bowls of oatmeal, do you try bowl 1, 2 or 3?");
    
   if (porridgechoice == 1) {
alert("this one is to hot! the end.")

   }
   else if (porridgechoice == 2){
alert("this one is to cold! the end.")
   }
   else  {
      alert("this one is just right!")

var charchoice = prompt(" you walk into the living room and you see 3 chairs, a big one, a medium one and a small one, which one do you choose?");
if(charchoice== "big") {

   alert("this cchair is way to big! the end.");

}
else if(charchoice == "medium") {

   alert("this chair is just to big for you! the end.");
}
else {   alert("this chair is just right!");
   
var bedchoice = prompt(" in the next room you see three beds, a big one, a medium sized one and a small one, which do you choose?");
   if (bedchoice== "big") {
      alert("this bed is way to hard! the end");
   }
   else if(bedchoice== "medium"){

      alert("this bed is way to soft! the end");
   }
   else { alert("this bed is just right, and you fall asleep");
      alert("you wake up and see three bears looking at you!");
      alert("you run out of the cabin to never return again.");}
      
}
}
   }
else {
   alert ("you don't go in the cabin so this adventure is over");
   
}