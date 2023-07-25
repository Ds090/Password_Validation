function checkPassword() {
    let password = document.getElementById("password").value;
    let confrmPassword = document.getElementById("confrm-password").value;

    console.log(password,confrmPassword);

    let message = document.getElementById("message");

// Password Validation Logic

    if (password.length != 0) {
        if (password == confrmPassword) {
            message.textContent = "Password Matched. Password validation Successful"
            message.style.backgroundColor = "rgb(141, 178, 210";
        }
        else{
            message.textContent = "Password didn't match. Password validation unsuccessful";
            message.style.backgroundColor = "red"
        }
        
    }

    else{
        alert("Password can\'t be empty!")
        message.textContent = "";
    }

}

