const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const userNameMsg = document.querySelector("#errorUserName");
const userPasswordMsg = document.querySelector("#passwordError");
const submitForm = document.querySelector(".login-form");



submitForm.addEventListener('submit', (e) =>{
     e.preventDefault();
 
  });

function validateForm() {
   
   if(userName.value == ""){
      userNameMsg.innerHTML ="* Username is empty..";

   }else if(userName.value.length <=3){
      userNameMsg.innerHTML = "* Username is too short";
   
   }else{
      userNameMsg.innerHTML = null;
      // console.log("Heyyyyy")

   }

   if(password.value == ""){
      userPasswordMsg.innerHTML = "* Password is empty..";

   }else if (password.value !="Thinkflair"){
      userPasswordMsg.innerHTML = "* Wrong Password";

   }else{
      userPasswordMsg.innerHTML = null;
      submitForm.submit();
      let myWindow = window.open("", "_blank");
      myWindow.document.write("<h2>You clicked login button</h2>");

      
   }
}

    document.querySelector(".singup-btn").addEventListener("click", function() {
      window.open("./page.html", "MsgWindow");
      // myWindow.document.write("<h2>You clicked Sign up button</h2>");
    });
