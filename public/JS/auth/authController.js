$(() => {    

    //$("#authFB").click(() => );

    $("#buttonlogin").click(() => {
        const email = $('#inputemail').val();
        const password = $('#inputcontrasena').val();
        const auth = new Autenticacion()
        auth.autEmailPass(email, password)
        
    });


});