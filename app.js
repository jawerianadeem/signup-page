var signup=document.getElementById("signupBtn");
var signin=document.getElementById("signinBtn");
var namefield=document.getElementById("namefield");
var title=document.getElementById("title");

signinBtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add=("disable");
    signinBtn.classList.remove=("disable");
}

signupBtn.onclick=function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove=("disable");
    signinBtn.classList.add=("disable");
}
