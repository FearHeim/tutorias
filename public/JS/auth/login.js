//crear usuario

let singForm=document.querySelector('#sing__container')
singForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email=singForm['mail'].value;
        const password=singForm['contrasena'].value;


        auth.createUserWithEmailAndPassword(email, password)
} ) 