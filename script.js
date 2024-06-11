// Toggle Additional Information
document.getElementById('knowMoreBtn').addEventListener('click', function() {
    var additionalInfo = document.getElementById('additionalInfo');
    if (additionalInfo.style.display === 'none') {
      additionalInfo.style.display = 'block';
    } else {
      additionalInfo.style.display = 'none';
    }
  });
  // Form Validation
function validation() {
   let username = document.contact.username.value;
   let userstatus = (emailstatus = mobilestatus = false);
   const alphaexp = /^[a-z]+$/;

   let mobile = document.contact.mobile.value;
   const numexp = /^[0-9]+$/

   let email = document.contact.email.value;
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;



   //name validation
   if (username === "") {
      document.getElementById("usernote").innerHTML = "Name is mandatory";
   }
   else {
      if (username.match(alphaexp)) {
         document.getElementById("usernote").innerHTML = "";
         userstatus = true;
      }
      else {
         document.getElementById("usernote").innerHTML = "only charcters";
      }
   }




   //mobile validation
   if (mobile === "") {
      document.getElementById("mobilenote").innerHTML = "Number is mandatory";

   }
   else {
      if (mobile.match(numexp)) {
         if (mobile.length === 10) {
            document.getElementById("mobilenote").innerHTML = "";
            mobilestatus = true;
         }
         else {
            document.getElementById("mobilenote").innerHTML = "10 digit number";
         }
      }
      else {
         document.getElementById("mobilenote").innerHTML = "only digits";
      }
   }
   //return value
   if (userstatus === true && mobilestatus === true && emailstatus === true) {
      return true;
   }
   else {
      return false;
   }
}





