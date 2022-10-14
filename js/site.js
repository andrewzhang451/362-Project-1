function correctForm() {
    let w = document.forms["registerForm"]["firstname"].value;
    let x = document.forms["registerForm"]["lastname"].value;
    let y = document.forms["registerForm"]["email"].value;
    let z = document.forms["registerForm"]["phone"].value;


    if (w == "" && x == "" && y == "" && z == "") {
        alert("Please insert your first name");
        return false;
    }
    else if (x == "") {
        alert("Please insert your last name");
        return false;
    }
    else if (y == "") {
        alert("Please insert your email");
        return false;
    }
    else if (z == "") {
        alert("Please insert your phone number");
        return false;
    }
}