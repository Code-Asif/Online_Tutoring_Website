// form-validation.js

function validateForm() {
    var name = document.forms["registrationForm"]["uname1"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["psw"].value;
    var mobile = document.forms["registrationForm"]["mob"].value;
    var birthdate = document.forms["registrationForm"]["birthdate"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (password === "") {
        alert("Password must be filled out");
        return false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        alert("Password must contain at least one number and one uppercase and lowercase letter, and be at least 8 characters long");
        return false;
    }

    if (mobile === "") {
        alert("Mobile must be filled out");
        return false;
    } else if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Invalid mobile number. It should have 10 digits.");
        return false;
    }

    if (birthdate === "") {
        alert("Date of Birth must be filled out");
        return false;
    }

    return true;
}
