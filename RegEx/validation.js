let reg = /[a-z]/gi;

let reg2 = newRegExp(/[a-z]/,'i');

//including this after telephone section
const inputs = document.querySelectorAll('input');

//telephone number
const patterns = {
    telephone: /^[\d]{10}$/
};

//validation function
function validate(field, regex){
    console.log(regex.test(value));
}

//input I have no idea what it does
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) =>{
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });

});