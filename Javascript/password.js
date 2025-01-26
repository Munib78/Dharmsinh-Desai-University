
function password_match(password){
    
    let match1 = /^(?:[0-9]{4}|[0-9]{6})$/

    if(match1.test(password) ){
        return "Password is valid";
    }
    else{
        return "Password is not valid";
    }
}

console.log(password_match(1234));
console.log(password_match(12345));
console.log(password_match(123456));