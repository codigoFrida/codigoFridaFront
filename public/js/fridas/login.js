function loginUser() {
    $('#frmLogin').submit((e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            const dataArray = $("#frmLogin").serializeArray();
            const dataObject = serializedArrayToObject(dataArray);
            login(dataObject.usuario, dataObject.contrasena);
        }
    });
}

function login(username, password) {
    //TODO
    //POST function to login
    console.log(localStorage.baseUrl + '/fridas/modulos')
    location.href = localStorage.baseUrl + '/fridas/modulos';
}

$(document).ready(function() {
    loginUser();
})