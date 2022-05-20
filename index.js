let fullname= document.getElementById('fullname')
let email= document.getElementById('email')
let passwords= document.getElementById('passwords')
let confirmpass= document.getElementById('confirmpass')


let validation = document.getElementById('validation')







    // fullname.value = localStorage.getItem("fullname");
    // email.value = localStorage.getItem("email");
    // passwords.value = localStorage.getItem("passwords");
    // confirmpass.value = localStorage.getItem("confirmpass");
    


function validate() {
    if(fullname.value !=="" && email.value !=="" 
    && passwords.value !=="" 
    && confirmpass.value !=="" 
    && confirmpass.value === passwords.value) {
        
         alert("fields are full");
         
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("passwords", passwords.value);
    localStorage.setItem("confirmpass", confirmpass.value);
         return true;
    } else {
        return false;
    }
}
let status = true;
function Changer(){
    if(status === true){
        passwords.setAttribute("type","text");
        document.getElementById('eye').src="images/eye.png";
        status = false;
    }
    else {
        passwords.setAttribute("type","password");
        document.getElementById('eye').src="images/eyeslash.png";
    }
}

let status1 = true;
function ChangerConfirm(){
    if(status1 === true){
        confirmpass.setAttribute("type","text");
        document.getElementById('eye1').src="images/eye.png";
        status1 = false;
    }
    else {
        confirmpass.setAttribute("type","password");
        document.getElementById('eye1').src="images/eyeslash.png";
    }
}