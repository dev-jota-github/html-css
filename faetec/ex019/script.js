function validateForm() {
    let isValid = true;

    // Nome
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Email
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Telefone
    const phone = document.getElementById("phone").value;
    if (phone.length !== 11 || isNaN(phone)) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    // Senha
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Confirmar Senha
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").style.display = "none";
    }

    return isValid;
}