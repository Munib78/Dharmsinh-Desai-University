function calc_days(str_exp_date)
{
    let exp_date = new Date(str_exp_date);

    let curr_date = new Date();

    let days = exp_date.getDate() - curr_date.getDate();

    return days; 
}

console.log(calc_days("2025-01-31"));
