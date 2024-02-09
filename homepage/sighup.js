var google_btn = document.getElementById("google");
var text_gg = document.getElementById("span-gg");
console.log(text_gg)
console.log(google_btn)


function onmouseGG(){
    google_btn.style.backgroundColor = 'white';
    text_gg.style.color = 'black';
}

function onmouseleaveGG(){
    google_btn.style.backgroundColor = '#b6b8b9';
    text_gg.style.color = 'white';
}

function createdata(){
    var data = {}
    var emailvalue = document.getElementById("email").value;
    var passwordvalue = document.getElementById("password").value;
    var usernamevalue = document.getElementById("username").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var email_box = document.getElementById("email")
    var password_box = document.getElementById("password")

    if(emailPattern.test(emailvalue) && passwordvalue !== ""){
        data.Email = emailvalue;
        data.Username = usernamevalue;
        data.Password = passwordvalue;
        localStorage.setItem('data', JSON.stringify(data));
        console.log(data)
        window.location.href = "Login.html"
    }if(emailvalue === ""){
        email_box.style.border = "1px solid red";
        
        
        email_box.style.animation = 'shake 0.5s ease';
        
        
        email_box.addEventListener('animationend', function() {
            email_box.style.animation = '';
        });
    }if(passwordvalue === ""){
        password_box.style.border = "1px solid red";
        password_box.style.animation = 'shake 0.5s ease';
        
        password_box.addEventListener('animationend', function() {
            password_box.style.animation = '';
        });
    }
}

document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/?locale=th_TH', '_blank');
});

document.getElementById('google').addEventListener('click', function() {
    window.open('https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&dsh=-3059123689118422685', '_blank');
});

document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        this.textContent = 'Show Password';
    }
});
