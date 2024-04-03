
const pass = document.querySelector("#password")
const passrep = document.querySelector("#password-rep")

pass.addEventListener("change", function(){
    checkPasswordEquality(1);
})

passrep.addEventListener("input", function(){
    checkPasswordEquality();
})

passrep.addEventListener("change", function(){
    checkPasswordEquality(2);
})


function checkPasswordEquality(flag){
    if(pass.value === passrep.value){
        toggleValid();
        return;
    } else if(!pass.value.includes(passrep.value)){
        toggleInvalid(); 
        return;
    } else if(pass.value.length > passrep.value.length && (flag == 1 || flag == 2)){
        toggleInvalid();
        return;
    }
}

function toggleValid(){
    passrep.classList.remove("invalid");
}
function toggleInvalid(){
    passrep.classList.add("invalid");
    passrep.setCustomValidity('Οι κωδικοί πρέπει να ταιριάζουν!')
    passrep.reportValidity(); 
}