
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const baseEmail = {};
        if (email !== "" || password !== "") {
            baseEmail.email = email.trim();
            baseEmail.password = password;
            console.log(baseEmail);
        } else {
        
            return console.log("All form fields must be filled in")
        };
    
    form.reset();
}
