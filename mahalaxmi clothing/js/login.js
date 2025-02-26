document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "admin@example.com" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
});
