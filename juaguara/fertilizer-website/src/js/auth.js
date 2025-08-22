function loginUser(username, password) {
    // Simulate an API call for user authentication
    if (username === "admin" && password === "password") {
        localStorage.setItem("user", JSON.stringify({ username }));
        alert("Login successful!");
        window.location.href = "products.html"; // Redirect to products page
    } else {
        alert("Invalid username or password.");
    }
}

function logoutUser() {
    localStorage.removeItem("user");
    alert("Logout successful!");
    window.location.href = "login.html"; // Redirect to login page
}

function isLoggedIn() {
    return localStorage.getItem("user") !== null;
}

export { loginUser, logoutUser, isLoggedIn };