let loginForm=document.querySelector('#login__container')
loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email=loginForm['inputemail'].value;
        const contrasenia=loginForm['inputcontrasena'].value;

        console.log(email, contrasenia);
} ) 