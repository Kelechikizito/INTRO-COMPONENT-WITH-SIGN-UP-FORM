
const firstName = $("input[name='firstName']");
const lastName = $("input[name='lastName']");
const email = $("input[name='email']");
const password = $("input[name='password']");
const btn = $('button');

const isFNameValid = firstName[0].validity;
const isLNameValid = lastName[0].validity;
const isEmailValid = email[0].validity;
const isPasswordValid = password[0].validity;

// const validateFname = () => {

// }

btn.click(function (e) {
    
    console.log(isFNameValid);
    console.log(isLNameValid);
    console.log(isEmailValid);
    console.log(isPasswordValid);

    e.preventDefault();
});
