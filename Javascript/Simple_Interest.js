function Simple_Interest(amount, interest, year){

    if(isNaN(amount) || isNaN(interest)){
        return "Entr proprer amount and interest";
    }

    let total_interest = (amount * interest * year) / 100

    total_interest = total_interest.toFixed(2);

    return `The total interest earned on ${amount} at an annual rate of ${interest}% for ${year} years is: ${total_interest}`

}

console.log(Simple_Interest(1000, 5, 5));
