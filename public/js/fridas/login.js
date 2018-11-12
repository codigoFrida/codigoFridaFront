function loginUser() {
    $('#frmLogin').submit((e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            const dataArray = $("#frmLogin").serializeArray();
            const dataObject = serializedArrayToObject(dataArray);
            login(dataObject);
        }
    });
}

function login(dataObject) {
    //TODO
    //POST function to login
    // console.log(localStorage.baseUrl + '/fridas/modulos')
    // location.href = localStorage.baseUrl + '/fridas/modulos';
    $.post('http://127.0.0.1:3000/fridas/iniciarSesion', dataObject)
    .done((result) => {
        console.log(result)
        sessionStorage.rol = 'fridas';
        location.href = result.targetUrl;
    })
}

$(document).ready(function() {
    loginUser();
})