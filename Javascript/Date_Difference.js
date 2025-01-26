function date_diff(str_date1, str_date2)
{
    let date1 = new Date(str_date1);
    let date2 = new Date(str_date2);

    return date1.getDate() - date2.getDate();

}

console.log(date_diff("2025-01-31", "2025-01-10"));
