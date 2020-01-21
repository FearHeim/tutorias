let loginForm=document.querySelector('#login__container')
loginForm.addEventListener('submit', (o)=>{
        o.preventDefault();
        const emailogin=loginForm['inputemail'].value;
        const password1=loginForm['inputcontrasena'].value;


        auth.signInWithEmailAndPassword(emailogin, password1).then(cred=>{
                location.href="main.html"
                console.log(cred)
        }) 
})

auth.onAuthStateChanged(user=>{
        console.log(user)
})