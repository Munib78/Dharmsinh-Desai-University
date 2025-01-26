
function email_verification(email)
{
    let email_regex = /[0-9]*[a-z]+\.*[a-z]*[0-9]*@[a-z]*\.[a-z]*\.*[a-z]*$/ ;

    return email_regex.test(email);
    
}

console.log(email_verification("munib.bakrawala@radixweb.com"));

// email_verification("munib.bakrawala@radixweb.com");