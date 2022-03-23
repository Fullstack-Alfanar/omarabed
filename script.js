
function sendform(){
    let firstname=document.querySelector(".firstName");
    let lastname=document.querySelector(".lastName");
    let email=document.querySelector(".email");
    if(!firstname.value){
        document.getElementById("firstname1").innerHTML="Enter your firstname";
    }
    else{
        document.getElementById("firstname1").innerHTML="";
    }
    if(!lastname.value){
        document.getElementById("lastname1").innerHTML="Enter your lastname";
    }
    else{
        document.getElementById("lastname1").innerHTML="";
    }
    
    if(!email.value){
        document.getElementById("email1").innerHTML="Enter your email";
    }
    else{
        document.getElementById("email1").innerHTML="";
    }
    if(email.value&& lastname.value && firstname.value)
    {
        alert("thank you for comment "+firstname.value+" "+lastname.value);
    return true;
    }
    else 
    return false;
}


