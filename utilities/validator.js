




// const addClasses = (event) => {
   
//         event.target.classList.replace('outline-blue-400', 'outline-red-300');

//         event.target.classList.replace('bg-blue-50', 'bg-red-100')


// }

// const removeClasses = (event) => {
//     event.target.classList.replace('outline-red-300', 'outline-blue-400');
//     //event.target.classList.remove('border-red-400');
//     event.target.classList.replace('bg-red-100', 'bg-blue-50');
// }








export const validateName = (event) => {
    const value = event.target.value;
    if (value.trim() === '' || value.length > 25 ) {
        ///addClasses(event);
        return false;
    } else {
       //removeClasses(event)
       return true
    }
    
}

export const validateEmail = (event) => {
    const value = event.target.value;
    if (value.trim() === '' || value.length > 30) {
       // addClasses(event);
        return false;
    } else {
        //removeClasses(event)
        return true;
    }
}

export const validatePhone = (event) => {
    const value = event.target.value;
    if (value.trim() === '' || value.length > 15) {
        //addClasses(event);
        return false;
    } else{
        //removeClasses(event)
        return true;
    }
}

export const validatePassword = (event) => {
    const value = event.target.value;
    if (value.trim() === '' || value.length < 8) {
       // addClasses(event);
        return false;
    } else {
       // removeClasses(event)
        return true;
    }
}



// const validateAddress = (value) => {
//     if (value.trim() === '') {
//         addClasses(event);
//         return false;
//     }
//     return true;
// }



// const validateCity = (value) => {
//     if (value.trim() === '' ) {
//         addClasses(event);
//         return false;
//     }
//     return true;
// }


// export const validateInput = (inputName, value) => {
//     switch (inputName) {
//         case 'name': return validateName(value);
//         case 'email': return validateEmail(value);
//         case 'phone': return validatePhone(value);
//         case 'password': return validatePassword(value);
//         case 'address': return validateAddress(value);
//         case 'city': return validateCity(value);
        
//         default:
//             break;
//     }
// }