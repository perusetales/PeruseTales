const auth = firebase.auth();

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Login successful!');
      // Redirect to homepage or dashboard after login
      window.location.href = 'index.html';
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
});
// Google Sign-In
const googleProvider = new firebase.auth.GoogleAuthProvider();
document.getElementById("google-login").addEventListener("click", function () {
  firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
      console.log("Google Sign-in Success:", result.user);
      window.location.href = "index.html"; // Redirect after login
    })
    .catch((error) => {
      document.getElementById("error-message").innerText = error.message;
    });
});
