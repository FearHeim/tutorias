$(() => {    

    //$("#authFB").click(() => );

    $("#btnRegistroEmail").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();
        const auth = new Autenticacion()
        auth.crearCuentaEmailPass(email, password, nombres)
    });

    $("#button1").click(() => {
        const email = $('#inputlogin').val();
        const password = $('#inputcontra').val();
        const auth = new Autenticacion()
        auth.autEmailPass(email, password)
    });

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');        
    });

    $('#button').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

    
});