class Autenticacion{
    autEmailPass (email, password){
        firebase.auth().singInWithEmailAndPassword(email, password)
            .then(result=>{
                if(result.user.sendEmailVerified){
                    Materialize.toast('Bienvenido ${result.user.displayname}', 5000)

                }else{
                    firebase.auth().signOut()
                    Materialize.toast('Chale')
                }
            })
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