function validation(){
    if(document.formfill.Username.value==""){
        document.getElementById("result2").innerHTML="Enter Username*";
        return false;
    }
    else if (document.formfill.Username.value.length<4){
        document.getElementById("result2").innerHTML="At least four letters*";
        return false;
    }
    else if (document.formfill.Email.value==""){
        document.getElementById("result2").innerHTML="Enter your email*";
        return false;

    }
    else if (document.formfill.Password.value==""){
        document.getElementById("result2").innerHTML="Enter your password*";
        return false;

    }
    else if (document.formfill.Password.value.length<6){
        document.getElementById("result2").innerHTML="Password must be 6-digits*";
        return false;

    }
    else if (document.formfill.Phone.value==""){
        document.getElementById("result2").innerHTML="Enter your phone*";
        return false;

    }
    else if (document.formfill.Password.value.length<11){
        document.getElementById("result2").innerHTML="At least 11-digits*";
        return false;

    }
    
}
