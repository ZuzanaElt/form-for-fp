const button = document.getElementById("button");
const applicationForm = document.getElementById("applicationForm")
const firstName = document.getElementById("firstName")
const surname = document.getElementById("surname")
const email = document.getElementById("email")


button.addEventListener("mouseover", function changeColor(){
    button.style.backgroundColor="orange";
});

button.addEventListener("mouseout", function changeColor(){
    button.style.backgroundColor="blue";
});



button.addEventListener("click",function(e){
       //stops deleting the form details after click
    //    e.preventDefault()
    
    if(surname.value !== "" && email.value !== "" && linkedin.value !=="" ){
        alert('Thank you for submitting your Application')
    }
}
)

;


