let button = document.getElementById("button")
let email = document.getElementById("email")
let password = document.getElementById("password")

button.addEventListener("click", validation = () => {

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const caseRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/

    if (email.value.match(regex)) {
        email.style.borderColor = "green"

        if (password.value.match(caseRegex)) {
            password.style.borderColor = "#00d82f"

        }

        if (password.value.length < 8) {
            password.style.borderColor = "#ff0000"
            alert("Password must contain at least 8 characters & Password must contain at least one uppercase, one lowercase symbol. ")
        }

    } else {
        email.style.borderColor = "#ff0000"
        alert("Email must contain  @")
    }

})


