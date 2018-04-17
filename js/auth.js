  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyA6odwHByrJOCfmxvFuwZJ8LfQQ3HsirsI",
    authDomain: "paulemploi-f88b4.firebaseapp.com"
  };
  firebase.initializeApp(config);

function auth(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(email);

// Sign in with email and pass.
// [START createwithemail]
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// [START_EXCLUDE]
if (errorCode == 'auth/weak-password') {
alert('The password is too weak.');
} else {
alert('hola');
alert(errorMessage);
}
console.log(error);
// [END_EXCLUDE]
});
}
