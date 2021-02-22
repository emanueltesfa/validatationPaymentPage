
function validateForm(){
    let form = document.querySelector("#form");

    if(validateState(form.state.value)){
        if (validateEmail(form.email.value)){
            if(validateCreditCard(form.cardNum.value)){
                if(validateControl(form.cvv.value,"cvv", 3)) {
                    if (validateControl(form.zip.value, "zip", 5)){
                        if(validateDate(form.expire.value)){
                            alert("Submitted");
                        }
                    }
                }
            }
        }
    }
    return false;
}

function validateControl(control, name, length){
    if( testLength(control, length)){
        if (testNumber(control)) {
           return true;
        }else {
            alert("Invalid " +name);
            return false;
        }
    }else{
        alert("Invalid " +name);
        return false;
    }
}

function validateState (value){
    if(value===""){
        alert("Invalid State Choice, please choose other than 'Select State'");
        return false;
    }else{
        return true;
    }
}

function validateEmail (value){
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if( !(re.test(value))){
        alert(value +" is an invalid email, please try again");
        return false;
    }else{
        return true;
    }
}

function validateCreditCard (value){
    var cardNum= value.toString().replace(/\s/g, '');

    if (testNumber(cardNum) === true) {
        if (cardNum.charAt(0) === "3") {
            if (!testLength(cardNum, 15)) {
                alert("Not a proper length for credit/debit card");
                return false;
            } else {
                return true;
            }
        } else if (cardNum.charAt(0) === "4" || cardNum.charAt(0) === "5" || cardNum.charAt(0) === "6") {
            if (!testLength(cardNum, 16)) {
                alert("Not a proper length for credit/debit card");
                return false;
            } else {
                return true;
            }
        } else {
            alert("Not a valid first digit of Debit/Credit card number")
            return false;
        }
    }else{
        return false;
    }

}

function validateDate (value){

    if(isFutureDate(value) === false){
        alert("Date is not valid");
        return false;
    }else{
        return true;
    }
}

function isFutureDate(userDate){
    var curYear = new Date().getFullYear();
    var curMonth = new Date().getMonth()+1;

    userDate = userDate.split("-");

    if (curYear<=userDate[0]){
        if (curMonth < userDate[1]) {
            return true;
        }
        return false;
    }else{
        return false;
    }
}

function testLength(value,length) {
    var str = value.toString().length;
    if (str !== length) {
        alert("Not correct length");
        return false;
    } else {
        return true;
    }
}

function testNumber(value){
    const val = value;
    if(isNaN(val) === false){
        return true;
    }else{
        alert("Is not a number");
        return false;
    }
}
