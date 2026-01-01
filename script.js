
var registerBtn = document.getElementById("button");
if(registerBtn){
  registerBtn.addEventListener("click", function(event){
    event.preventDefault();
    cheeckData();
  });
}
function cheeckData(){
  var username = document.getElementById("firstName")
  var usernameValue = username.value.trim();
  var email = document.getElementById("email")
  var emailValue = email.value.trim();
  var password = document.getElementById("password");
  var passwordValue = password.value.trim();
  var confirmPassword = document.getElementById("confirmPassword")
  var confirmPasswordValue = confirmPassword.value.trim();
  if(usernameValue == ""){
    showError(username,"First name is reqiured");
  }else{
    showSucces(username);
  }
  if (confirmPasswordValue !== passwordValue){
    alert("conform password is not valid");
  }else{

  }
  if(emailValue == ""){
    showError(email,"email  is also reqiured");
  }else{
    showSucces(email);
  }  
  if(passwordValue == ""){
    showError(password,"password  is also reqiured");
  }else{
    showSucces(password);
  }  
  if(confirmPasswordValue == ""){
    showError(confirmPassword,"conform the password")
  }else{
    showSucces(confirmPassword);
}

  // If there are no validation error classes on the form, save the user
  var form = document.getElementById("registerForm");
  var hasError = form.querySelector('.form-group-error');
  if(!hasError){
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    if(users.some(function(u){ return u.email === emailValue;})){
      alert('Email already registered. Please login.');
      return;
    }
    var user = { name: usernameValue, email: emailValue, password: passwordValue };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful. You can now login.');
    window.location.href = 'login.html';
  }
};
// Toggle password visibility on register page (guarded)
var eye = document.getElementById("fa-eye");
if(eye){
  var regPassword = document.getElementById("password");
  if(regPassword){
    eye.addEventListener("click",function(){
      if(regPassword.type === "password" && eye.className == "fa-solid fa-eye"){
        regPassword.type = "text";
        eye.className = "fa-solid fa-eye-slash";
      }else{
        regPassword.type = "password" ;
        eye.className = "fa-solid fa-eye";
      }
    });
  }
}
var nextEye = document.getElementById("fa-eye-");
if(nextEye){
  var regConfirm = document.getElementById("confirmPassword");
  if(regConfirm){
    nextEye.addEventListener("click",function(){
      if(regConfirm.type === "password" && nextEye.className == "fa-solid fa-eye"){
        regConfirm.type = "text";
        nextEye.className = "fa-solid fa-eye-slash";
      }else{
        regConfirm.type = "password" ;
        nextEye.className = "fa-solid fa-eye";
      }
    });
  }
}
var loginBtn = document.getElementById("login-button");
if(loginBtn){
  loginBtn.addEventListener("click", function(event){
    event.preventDefault();
    checkData();
  });
}
function checkData(){
  const emailadrees = document.getElementById("email-adrees");
  var emailadreesValue = emailadrees.value.trim();
  var password = document.getElementById("Password");
  var passwordValue = password.value.trim();
  if(emailadreesValue === ""){
    showError(emailadrees,"email is reqiured");
  }else{
    showSucces(emailadrees);
  }
  if(passwordValue === ""){
    showError(password,"password is reqiured");
  }else{
    showSucces(password);
  }
  // authenticate against stored users
  var users = JSON.parse(localStorage.getItem('users') || '[]');
  var user = users.find(function(u){ return u.email === emailadreesValue; });
  if(emailadreesValue && passwordValue){
    if(user && user.password === passwordValue){
      var sessionObj = { name: user.name, email: user.email };
      localStorage.setItem('currentUser', JSON.stringify(sessionObj));
      localStorage.setItem('userSession', JSON.stringify(sessionObj));
      sessionStorage.setItem('userSession', JSON.stringify(sessionObj));
      alert('Login successful. Welcome ' + user.name + '!');
      window.location.href = 'coustem.html';
    } else {
      alert('Invalid email or password');
    }
  }
};
function showError(u,msg){
  if(!u) return;
  var parentbox = u.parentElement;
  parentbox.className = "form-group-error";
  var fa = parentbox.querySelector(".fa-solid");
  if(fa) fa.className = "fa-solid fa-circle-xmark";
  var span = parentbox.querySelector("span");
  if(span) span.innerText = msg;
};
function showSucces(u){
  if(!u) return;
  var parentbox = u.parentElement;
  parentbox.className = "form-group-succes";
  var span = parentbox.querySelector("span");
  if(span) span.innerText = "";
  var fa = parentbox.querySelector(".fa-solid");
  if(fa) fa.className = "fa-solid fa-circle-check";
};
var eyes = document.getElementById("fa-eye-e");
if(eyes){
  var loginPassword = document.getElementById("Password");
  if(loginPassword){
    eyes.addEventListener("click", function(){
      if(loginPassword.type === "password" && eyes.className == "fa-solid fa-eye"){
        loginPassword.type = "text";
        eyes.className = "fa-solid fa-eye-slash";
      }else{
        loginPassword.type = "password" ;
        eyes.className = "fa-solid fa-eye";
      }
    });
  }
}