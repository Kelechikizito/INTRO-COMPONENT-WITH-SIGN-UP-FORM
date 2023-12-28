
const firstName = $("input[name='firstName']");
const lastName = $("input[name='lastName']");
const email = $("input[name='email']");
const password = $("input[name='password']");
const btn = $('button');


btn.click(function (e) { 

    const isFNameValid = firstName[0].checkValidity();
    const isLNameValid = lastName[0].checkValidity();
    const isEmailValid = email[0].checkValidity();
    const isPasswordValid = password[0].checkValidity();
    
    if (!isFNameValid && !isLNameValid && !isEmailValid && !isPasswordValid) {
        firstName.addClass('invalid-input');
        firstName.attr('placeholder', '');
        lastName.addClass('invalid-input');
        lastName.attr('placeholder', '');
        email.addClass('invalid-input update-placeholder');
        email.attr('placeholder','name@host.tld');
        password.addClass('invalid-input');
        password.attr('placeholder', '');
    }else if (!isFNameValid) {
        firstName.addClass('invalid-input');
        firstName.attr('placeholder', '');
    }else if (!isLNameValid) {
        lastName.addClass('invalid-input');
        lastName.attr('placeholder', '');
    }else if (!isEmailValid) {
        email.addClass('invalid-input update-placeholder');
        email.attr('placeholder','name@host.tld');
    }else if (!isPasswordValid) {
        password.addClass('invalid-input');
        password.attr('placeholder', '');
    }
    if (isFNameValid && isLNameValid && isEmailValid && isPasswordValid) {

    }
    
});
