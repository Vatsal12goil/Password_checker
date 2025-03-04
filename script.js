document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");

    // Placeholder handling
    passwordInput.addEventListener("focus", function () {
        passwordInput.placeholder = ""; // Remove placeholder on focus
    });

    // Create a new div to show strength feedback
    const strengthIndicator = document.createElement("div");
    strengthIndicator.style.marginTop = "10px";
    strengthIndicator.style.fontSize = "18px";
    strengthIndicator.style.fontWeight = "bold";
    passwordInput.insertAdjacentElement("afterend", strengthIndicator);

    // Function to check password strength
    function checkPasswordStrength(password) {
        if (password.trim() === "") {
            strengthIndicator.textContent = ""; // Hide when empty
            return;
        }

        let strength = "";
        let color = "";

        if (password.length < 5) {
            strength = "Weak ❌";
            color = "red";
        } else if (/^[a-zA-Z0-9]+$/.test(password) && password.length >= 8) {
            strength = "Moderate ⚠️";
            color = "orange";
        } else if (/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password) && password.length >= 8) {
            strength = "Strong ✅";
            color = "green";
        } else {
            strength = "Weak ❌";
            color = "red";
        }

        strengthIndicator.textContent = "Strength: " + strength;
        strengthIndicator.style.color = color;
    }

    // Add event listener for real-time feedback
    passwordInput.addEventListener("input", function () {
        checkPasswordStrength(passwordInput.value);
    });

    // Hide strength indicator initially
    strengthIndicator.textContent = "";
});
