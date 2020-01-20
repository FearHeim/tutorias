//crear usuario

let singForm=document.querySelector('#sing__container')
singForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email=singForm['mail'].value;
        const password=singForm['contrasena'].value;


        auth.createUserWithEmailAndPassword(email, password)
} ) 

let loginForm=document.querySelector('#login__container')
loginForm.addEventListener('submit', (o)=>{
        o.preventDefault();
        const emailogin=loginForm['inputmail'].value;
        const password1=loginForm['inputcontrasena'].value;


        auth.(emailogin, password1).then(a=>{
                location.href="main.html"
        })
})