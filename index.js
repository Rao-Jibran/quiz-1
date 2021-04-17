
function signUP(){
    var emailId=document.getElementById("email").value 
    var password=document.getElementById("pass").value

    localStorage.setItem("userId",emailId)
    localStorage.setItem("userPass",password)

    window.location.href="login.html"
   
}

function back(){
    window.location.href="signup.html"
}

function signIn(){
    var userEmail=document.getElementById("userEmail").value
    var userPass=document.getElementById("userPass").value
    console.log(userEmail)
    console.log(userPass)
    var id= localStorage.getItem("userId")
    var pass= localStorage.getItem("userPass")
    if(userEmail===id && userPass===pass){
        window.location.href="index.html"

    }
    else{
        alert("invalid")
    }
    
}


