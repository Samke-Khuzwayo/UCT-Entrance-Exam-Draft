// Setting up the MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Makhuzwayo2705*', // MySQL password
    database: 'my_Electionsweb_app' // database name
});

// Function to handle login
const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log("Login successful:", user);
            alert("Welcome back!");
            // Redirect the user to dashboard or home page 
            window.location.href = "/index.html"; 
        })
        .catch((error) => {
            // Handle errors
            if (error.code === "auth/user-not-found") {
                alert("No user found with this email. Please sign up first.");
            } else if (error.code === "auth/wrong-password") {
                alert("Incorrect password. Please try again.");
            } else {
                alert("Login failed: " + error.message);
            }
            console.error("Login failed:", error.message);
           
        });
};

// Attaching this function to the login page
document.getElementById("pages-login").addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing the form from refreshing the page

    const email = document.getElementById("emailAddress").value; // Get email from input field
    const password = document.getElementById("password").value; // Get password from input field
    if (email && password) {
        loginUser(email, password);
    } else {
        alert("Please fill in both email and password fields.");}

    loginUser(email, password);
});
