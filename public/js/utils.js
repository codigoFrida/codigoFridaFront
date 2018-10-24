function setActiveNavbarOption(actualPage) {
    $(`li[data-section="${actualPage}"]`).addClass('active');
}


$(document).ready(() => {
    setActiveNavbarOption(actualPage);
});