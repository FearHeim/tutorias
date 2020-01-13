let email=document.getElementById('inputemail')
let password=document.getElementById('inputcontrasena')
let button=document.getElementById('buttonlogin')

button.addEventListener('click',()=>{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
})
