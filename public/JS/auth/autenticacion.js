class Autenticacion{
    autEmailPass (email, password){

    }
    crearCuentaEmailPass(email, password, nombres){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result=>{
                result.user.updateProfile({
                    displayName : nombres
                })

                const configuracion={
                    url:'https://tutorias-1bc4f.web.app'
                }
                result.user.sendEmailVerification()
                .catch(error=>{
                    console.error(errror)
                    Materialize.toast(error.message, 4000)
                })
                firebase.auth().signOut();
            })
            .catch(error=>{
                console.error(errror)
                Materialize.toast(error.message, 4000)
            })

    }
}