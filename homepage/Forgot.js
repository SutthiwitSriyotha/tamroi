var box_otp = document.getElementById("Box-otp");
var randomNumber = null;
box_otp.addEventListener('click',function(){
    randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    console.log(randomNumber);

    box_otp.style.backgroundColor = "gray"
})

function resetpassword(){
    // value
    var newpass = document.getElementById("Newpassword").value;
    var conpass = document.getElementById("Conpassword").value;
    var emailvalue = document.getElementById("email").value;
    var otpvalue = document.getElementById("otp").value;
    // box
    var box_newpass = document.getElementById("Newpassword");
    var box_conpass = document.getElementById("Conpassword");
    var box_email = document.getElementById("email");
    var box_otp = document.getElementById("otp");
    // import data
    var storedUserData = localStorage.getItem('data');
    var data = JSON.parse(storedUserData);

    if (otpvalue === randomNumber) {
        window.location.href = "Login.html"
        data.Password = newpass
        localStorage.setItem('data', JSON.stringify(data));
      } if(conpass === "") {
        
        box_conpass.style.border = "1px solid red";
      
        box_conpass.style.animation = 'shake 0.5s ease';

        box_conpass.addEventListener('animationend', function() {
          box_conpass.style.animation = '';
        });
    
      }if(newpass === ""){
        box_newpass.style.border = "1px solid red";
      
        box_newpass.style.animation = 'shake 0.5s ease';

        box_newpass.addEventListener('animationend', function() {
            box_newpass.style.animation = '';
        });
      }if(emailvalue === ""){
        box_email.style.border = "1px solid red";
      
        box_email.style.animation = 'shake 0.5s ease';

        box_email.addEventListener('animationend', function() {
            box_email.style.animation = '';
        });
      }if(otpvalue === ""){
        box_otp.style.border = "1px solid red";
      
        box_otp.style.animation = 'shake 0.5s ease';

        box_otp.addEventListener('animationend', function() {
            box_otp.style.animation = '';
        });
      }
    
}