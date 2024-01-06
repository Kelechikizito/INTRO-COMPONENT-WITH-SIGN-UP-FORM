
const form = $('form');
const inputs = {
  firstName: $("input[name='firstName']"),
  lastName: $("input[name='lastName']"),
  email: $("input[name='email']"),
  password: $("input[name='password']"),
};
const btn = $('button');
const errors = {
  first: $('.first'),
  second: $('.second'),
  third: $('.third'),
  fourth: $('.fourth'),
};

function validateInput(input, errorElement, placeholder = '') {
  const isValid = input[0].validity.valid;

  if (!isValid) {
    errorElement.css('display', 'inline-block');
    input.addClass('invalid-input');
    input.removeAttr('placeholder');
  } else {
    errorElement.css('display', 'none');
    input.removeClass('invalid-input');
    input.attr('placeholder', placeholder);
  }
}

function validateEmail() {
  const isValid = inputs.email[0].validity.valid;

  if (!isValid) {
    errors.third.css('display', 'inline-block');
    inputs.email.addClass('invalid-input invalid-email');
    inputs.email.attr('placeholder', 'name@host.tld');
  } else {
    errors.third.css('display', 'none');
    inputs.email.removeClass('invalid-input invalid-email');
  }
}

btn.click(function (e) {
  if (!form[0].checkValidity()) {
    validateInput(inputs.firstName, errors.first, 'First Name');
    validateInput(inputs.lastName, errors.second, 'Last Name');
    validateEmail();
    validateInput(inputs.password, errors.fourth, 'Password');
    e.preventDefault();
  }
});
