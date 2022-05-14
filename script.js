//Responsive Header
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Validation
function validateForm() {
  let x = document.forms["myForm"]["username"]["mail"]["pnumber"]["pwd"].value;
  if (x == "") {
    alert("Name must be filled out");
    returnToPreviousPage();
    return false;
  }
}


//Password Visibility
var inputPass1 = document.getElementById('pass1'),
    icon1 = document.getElementById('icon1');
 
   icon1.onclick = function () {
 
     if(inputPass1.className == 'active') {
        inputPass1.setAttribute('type', 'text');
        icon1.className = 'fa-solid fa-eye';
       inputPass1.className = '';
 
     }
     else {
        inputPass1.setAttribute('type', 'password');
        icon1.className = 'fa-solid fa-eye-slash';
       inputPass1.className = 'active';
    }
   }

var inputPass2 = document.getElementById('pass2'),
    icon2 = document.getElementById('icon2');
 
   icon2.onclick = function () {
 
     if(inputPass2.className == 'active') {
        inputPass2.setAttribute('type', 'text');
        icon2.className = 'fa-solid fa-eye';
       inputPass2.className = '';
 
     }
     else {
        inputPass2.setAttribute('type', 'password');
        icon2.className = 'fa-solid fa-eye-slash';
       inputPass2.className = 'active';
    }
   }