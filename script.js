const button = document.getElementById("button");
const firstName = document.getElementById("first-name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const linkedin = document.getElementById("linkedin");


button.addEventListener("mouseover", function changeColor(){
    button.style.backgroundColor="orange";
    button.style.color="black";
});

button.addEventListener("mouseout", function changeColor(){
    button.style.backgroundColor="rgb(43, 43, 142)";
    button.style.color="white";
});

button.addEventListener("click",function(e){
    
    if(surname.value !== "" && email.value !== ""  && textarea1.value !==""  && textarea2.value !==""){
        alert(
`${firstName.value}, thank you for submitting your Application!
        
    You are submitting the following information:
    Name: ${firstName.value} ${surname.value}
    Your email: ${email.value}
    Your LinkedIn: ${linkedin.value}
    Your reason to join: ${textarea1.value}    
    Why are you the best candidate: ${textarea2.value}

We will be in touch soon.
        `);
    }else {
        alert( "Please fill in the missing details.")
    }
}
);


