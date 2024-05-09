const { validateEmail } = require("./validator");





if(validateEmail(event.target.value) === false) {
    event.target.classList.add('outline-red-400');
    event.target.classList.add('border-red-400');
    event.target.classList.add('bg-red-200');
} else {
    event.target.classList.remove('outline-red-400');
    event.target.classList.remove('border-red-400');
    event.target.classList.remove('bg-red-200');
}