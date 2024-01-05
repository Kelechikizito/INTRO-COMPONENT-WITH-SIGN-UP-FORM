# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Screenshot](./Screenshot(54).png)
![Screenshot](./Screenshot(55).png)


### Links

- Solution URL: (https://github.com/Kelechikizito/INTRO-COMPONENT-WITH-SIGN-UP-FORM)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JQuery
- Javascript


### What I learned

I learnt how to develop Client-side form validation forms using Javascript.
I used JavaScript to take control over the look and feel of native error messages.  

```css
span.error, .first, .second, .third, .fourth {
    font-style: italic;
    font-size: x-small;
    text-align: right;
    margin: 0 2rem;
    color: hsl(0, 100%, 74%);
    position: relative;
    bottom: 0.3rem;
    display: none;
}
```
```js
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

btn.click(function (e) { 
    if (!form[0].checkValidity()) {
        validateFName();
        validateLName();
        validateEmail();
        validatePassword();
        e.preventDefault();     
    } 
});
```


### Continued development

Moving forward, I'd be learning Server-side Form Validation.

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#different_types_of_client-side_validation) - This helped to understan how HTML forms are validated. I really liked this article beacause of the followig reasons:
-Accuracy
-It uses good examples and code snippets

## Author

- Website - [Kelechi Kizito Ugwu](https://github.com/Kelechikizito)
- Frontend Mentor - [@kelechikizto](https://www.frontendmentor.io/profile/Kelechikizito)
- Twitter - [@kelechiikizito](https://www.x.com/kelechiikizito)


## Acknowledgments

