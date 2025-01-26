function str_methods(name){
    let splitted_name = name.split(" ");

    const fname=  splitted_name[0]
    const lname = splitted_name[1]

     let cap_fname=  fname.toUpperCase();    
     let cap_lname=  lname.toUpperCase();

    if(lname.includes("son"))
    {
        return  `First Name: ${cap_fname}, Last Name: ${cap_lname}, Contains 'son': true`
    }

    else{
        return  `First Name: ${cap_fname}, Last Name: ${cap_lname}, Contains 'son': false`
    }

    }


console.log(str_methods("Munib Bakrawala"));

    