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


data = {
    "Email" : "TZER",
    "Password" : "asd"
}


function checkdata(){
    var emailvalue = document.getElementById("email").value;
    var passwordlvalue = document.getElementById("password").value;

    if (emailvalue === data.Email && passwordlvalue === data.Password){
        window.location.href = "index.html"
        console.log("เข้าสู่ระบบสำเร็จ")
    }else{
        console.log("ไม่ผ่าน")
    }
}


document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/?locale=th_TH', '_blank');
});

document.getElementById('google').addEventListener('click', function() {
    window.open('https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&dsh=-3059123689118422685', '_blank');
});