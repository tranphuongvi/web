document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the login link
    document.getElementById('login-link').addEventListener('click', function (event) {
        event.preventDefault();
        showLoginSection();
    });

    // Add click event listener to the register link
    document.querySelector('.register-link').addEventListener('click', function (event) {
        event.preventDefault();
        hideLoginSection();
    });
});

function showLoginSection() {
    document.querySelector('.wrapper_login').style.display = 'grid';
}

function hideLoginSection() {
    document.querySelector('.wrapper_login').style.display = 'none';
}