let form = document.getElementById("login");
let err = document.getElementById("err");

err.style.visibility = "hidden";

form.addEventListener("submit",function(event){
    event.preventDefault();

    let password = document.getElementById("pass").value;
    // console.log(password);
    if(password=="yeeshbudday23"){
        window.location.href = `../discRocket.html`;
    }
    else{
        err.style.visibility = "visible";       
    }
});

