// Initialize Firebase app is already in firebase.js, so just get auth
const auth = firebase.auth();

const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to login page on success
      window.location.href = 'login.html';
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
