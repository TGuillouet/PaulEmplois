  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
    // Initialize Firebase
(function(){
  var config = {
    apiKey: "AIzaSyA6odwHByrJOCfmxvFuwZJ8LfQQ3HsirsI",
    authDomain: "paulemploi-f88b4.firebaseapp.com",
    databaseURL: "https://paulemploi-f88b4.firebaseio.com",
    projectId: "paulemploi-f88b4",
    storageBucket: "paulemploi-f88b4.appspot.com",
    messagingSenderId: "625897511543"
  };
  firebase.initializeApp(config);

//Element

const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnLogin = document.getElementById('createUser');
const btnSignIN = document.getElementById('signIN');
const btnLogOut = document.getElementById('logOut');

//login even
btnLogin.addEventListener('click', e =>{
  //get Email et password
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();

//sign In
const promise = auth.signInWithEmailAndPassword(email, pass);
promise.catch(e => console.log(e.message));


});

//add SignUp even
btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  console.log(email);
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //sign In
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

//voir si connecter
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogOut.classList.remove('hide');
  } else {
    console.log('pas auth');
    btnLogOut.classList.add('hide');
  }
});

}());





/*
    //var database = firebase.database();

//Nouveau utilisateurs
function createUser(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(email);
// [START createwithemail]
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;

if (errorCode == 'auth/weak-password') {
//alert('The password is too weak.');
} else {
//alert(errorMessage);
}
console.log(error);

});
}//[END_Func]

//signIN function
function signIN() {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
    } else {
    alert(errorMessage);
    alert("non");
    }
    console.log(error);
    alert("couc");
  });
}

//qui est co
function connecte() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}

//Information utilisateurs
function utilisateursInfo() {
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
  }
}
*/
