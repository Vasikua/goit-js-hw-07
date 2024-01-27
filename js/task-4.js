
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
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
