function setActiveNavbarOption(actualPage) {
    $(`li[data-section="${actualPage}"]`).addClass('active');
}
function validateForm() {
    const forms = document.getElementsByClassName('needs-validation');
    const validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
}

function serializedArrayToObject(serializedArray) {
    // Create an object without prototype.
    let dataObject = Object.create(null, {});
    serializedArray.map(({name, value}) => {
        dataObject[name] = value;
    })
    return dataObject;
} 

$(document).ready(() => {
    setActiveNavbarOption(actualPage);
    validateForm();
});