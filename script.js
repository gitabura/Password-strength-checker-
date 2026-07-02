const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", checkStrength);

function checkStrength() {
    let pass = password.value;

    if (pass.length < 6) {
        strength.textContent = "Weak Password";
        strength.style.color = "red";
    }
    else if (
        pass.match(/[A-Z]/) &&
        pass.match(/[a-z]/) &&
        pass.match(/[0-9]/) &&
        pass.match(/[@$!%*?&]/)
    ) {
        strength.textContent = "Strong Password";
        strength.style.color = "green";
    }
    else {
        strength.textContent = "Medium Password";
        strength.style.color = "orange";
    }
}

function togglePassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}