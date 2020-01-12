$(() => {    

    //$("#authFB").click(() => );

    $("#btnRegistroEmail").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();
        const auth = new Autenticacion()
        auth.crearCuentaEmailPass(email, password, nombres)
    });

    $("#button").click(() => {
        const email = $('#inputlogin').val();
        const password = $('#inputcontra').val();
        const auth = new Autenticacion()
        auth.autEmailPass(email, password)
    });

    
});