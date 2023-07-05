const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confPassword = document.querySelector(".cpassword");

const fnameMsg = document.querySelector("#errorFirstName");
const lnameMsg = document.querySelector("#errorLastName");
const emailMsg = document.querySelector("#errorEmail");
const passwordMsg = document.querySelector("#passwordError");
const confpasswordMsg = document.querySelector("#cpasswordError");
const creatAccount = document.querySelector(".submit-form");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const flag = false;
// let atpos = email.value.indexOf("@");
// let dotpos  = email.value.lastIndexOf(".")

creatAccount.addEventListener('submit', (e) => {
    e.preventDefault();
    if (firstName.value == "") {
        fnameMsg.innerHTML = "**First name is required";
        // flag=true;
    } else if (firstName.value.length <= 3) {
        fnameMsg.innerHTML = "**First name is too short";
        // flag=0;
    } else {
        fnameMsg.innerHTML = null;
        // flag=1;
    }
    // ---------------------------------------------------------------------
    if (lastName.value == "") {
        lnameMsg.innerHTML = "**Last name is required..";
        // flag=0;

    } else {
        lnameMsg.innerHTML = null;
        // flag=1;

    }
    // ----------------------------------------------------------------------
    
    if (email.value === "") {
        emailMsg.innerHTML = "**Email is required";
        // flag=0;
        
    } else if (! email.value.match(validRegex)) {
        emailMsg.innerHTML = "*This is not a valid email";
        // flag=0;

    } else {
        emailMsg.innerHTML = null;
        // flag=1;

    }

    // --------------------------------------------------------------------

    if (password.value.length <= 5 && password.value != "") {
        passwordMsg.innerHTML = "**Password length must be atleast 6 characters";
        // flag=0;

    } else if (password.value === "") {
        passwordMsg.innerHTML = "**Password is empty";
        // flag=0;

    } else if (password.value.length > 15) {
        passwordMsg.innerHTML = "**Password length must not exceed 15 characters";
        // flag=0;

    } else {
        passwordMsg.innerHTML = null;
        // flag=1;

    }

    // -----------------------------------------------------------------------

    if (confPassword.value !== password.value) {
        confpasswordMsg.innerHTML = "**Password does not match.";
        // flag=0;

    } else if (confPassword.value === "") {
        confpasswordMsg.innerHTML = "**Password is empty";
        // flag=0;

    } else {
        confpasswordMsg.innerHTML = null;
        // flag=1;   
    }

    if(firstName.value !== "" && lastName.value !== "" && email.value !== "" && password.value !== "" &&  confPassword.value !== "" && firstName.value.length>= 3 && password.value.length>5 && password.value.length<15 && confPassword.value === password.value){
        creatAccount.submit();
        let myWindow = window.open("", "_blank",);
        myWindow.document.write(`<h2 style="color:blue">You clicked Sign up button</h2> <button style="padding:10px 20px; background-color:red; color:white; font-weight: 700; cursor: pointer;" > Back </button>`);

    }
    
    
});

document.querySelector(".help").addEventListener("click", () => {
    window.open("./index.html", "MsgWindow");
});
