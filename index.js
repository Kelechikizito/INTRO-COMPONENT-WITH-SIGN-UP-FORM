
const form = $('form');
const firstName = $("input[name='firstName']");
const lastName = $("input[name='lastName']");
const email = $("input[name='email']");
const password = $("input[name='password']");
const btn = $('button');
const firstErr = $('.first');
const secondErr = $('.second');
const thirdErr = $('.third');
const fourthErr = $('.fourth');

function validateFName() {
    const isFNameValid = firstName[0].validity.valid;

    if (!isFNameValid) {
        firstErr.css('display', 'inline-block');
        firstName.addClass('invalid-input');
        firstName.removeAttr('placeholder');
    } else {
        firstErr.css('display', 'none');
        firstName.removeClass('invalid-input');
        firstName.attr('placeholder', 'First Name');
    }
}

function validateLName() {
     const isLNameValid = lastName[0].validity.valid;

     if (!isLNameValid) {
        secondErr.css('display', 'inline-block');
        lastName.addClass('invalid-input');
        lastName.removeAttr('placeholder');
     } else {
        secondErr.css('display', 'none');
        lastName.removeClass('invalid-input');
        lastName.attr('placeholder', 'Last Name');
     }
}

function validateEmail() {
    const isEmailValid = email[0].validity.valid;

    if (!isEmailValid) {
        thirdErr.css('display', 'inline-block');
        email.addClass('invalid-input');
        email.attr('placeholder', 'name@host.tld');
        email.addClass('invalid-email');
    } else {
        thirdErr.css('display', 'none');
        email.removeClass('invalid-input invalid-email');
    }
}

function validatePassword() {
    const isPasswordValid = password[0].validity.valid;

    if (!isPasswordValid) {
        fourthErr.css('display', 'inline-block');
        password.addClass('invalid-input');
        password.removeAttr('placeholder');
    } else {
        fourthErr.css('display', 'none');
        password.removeClass('invalid-input');
        password.attr('placeholder', 'Password');
    }
}

btn.click(function (e) { 
    if (!form[0].checkValidity()) {
        validateFName();
        validateLName();
        validateEmail();
        validatePassword();
        e.preventDefault();     
    } 
});