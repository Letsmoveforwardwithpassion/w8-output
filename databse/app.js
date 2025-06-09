const form = document.getElementById("contactForm");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

localStorage.setItem("savedEmail", email);
localStorage.setItem("savedPassword",password);

document.getElementById("email").value = ""
document.getElementById("password").value = ""


});

window.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");

    if (savedEmail){
        document.getElementById("email").value = savedEmail;
    }
    if (savedPassword){
        document.getElementById("password").value = savedPassword;
    }
});

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     const formData = {
//         email: form.email.value,
//         password: form.password.value
//     };
//     localStorage.setItem("formData", JSON.stringify(formData));
// });

const [a,b] = lines[0].split(" ").map(Number);
const c = Number(lines[1]);
for (let i = 0; i < c; i++){
    const [d,e] = lines[2 + i].split(" ").map(Number);
    if(a > d){
        console.log("High");
    }
    if(a === d){
        if(b > e){
            console.log("low");
        }
        else{
            console.log("High");
        }
    }
    else{
        console.log("Low");
    }
}