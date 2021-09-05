let f1 = document.forms.f1;
let fullnameRegExp = /^[a-zA-Z]{2,20}$/
let checkName

f1.fName.addEventListener('input', checkFirstName)

function checkFirstName() {
    checkName = fullnameRegExp.test(this.value);
    if (checkName) {
        this.style.border = '3px solid green'
    } else {
        this.style.border = '3px solid red'
    }
}

let checkSecondName
f1.lName.addEventListener('input', checkLastName)

function checkLastName() {
    checkSecondName = fullnameRegExp.test(this.value);
    if (checkSecondName) {
        this.style.border = '3px solid green'
    } else {
        this.style.border = '3px solid red'
    }
}
let checkEmail
f1.eAdress.addEventListener('input', emailCheck)

function emailCheck() {
    let emailRegExp = /^[a-zA-Z0-9.-]+\@\w+\.\w+$/;
    checkEmail = emailRegExp.test(this.value);
    if (checkEmail) {
        this.style.border = '3px solid green'
    } else {
        this.style.border = '3px solid red'
    }
}

let checkPass
f1.password.addEventListener('input', checkPassword)

function checkPassword() {
    let passRegExp = /^\w{8,15}$/;
    checkPass = passRegExp.test(this.value);
    if (checkPass) {
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }
}



f1.check.addEventListener('click', function() {
    if (checkPass && checkEmail && checkSecondName && checkName) {
        f1.submit.removeAttribute("disabled");
    } else {
        alert('wrong');
        f1.check.checked = false;
    }
})

f1.submit.addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
})

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
    f1.password.value = '';
    f1.eAdress.value = '';
    f1.lName.value = '';
    f1.fName.value = '';
    f1.check.checked = false;
    f1.submit.disabled = true;
    f1.fName.style.border = '1px solid black';
    f1.lName.style.border = '1px solid black';
    f1.eAdress.style.border = '1px solid black';
    f1.password.style.border = '1px solid black';
    checkPassword();
    emailCheck();
    checkLastName();
    checkFirstName();
})