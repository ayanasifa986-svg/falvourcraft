
document.getElementById("login-button").addEventListener("click",function(event){
  event.preventDefault();

  checkData();
});
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
};
function showError(u,msg){
  var parentbox = u.parentElement;
  parentbox.className = "form-group-error";
  var fa = parentbox.querySelector(".fa-solid");
  fa.className = "fa-solid fa-circle-xmark";
  var span = parentbox.querySelector("span");
  span.innerText = msg;
};
function showSucces(u){
  var parentbox = u.parentElement;
  parentbox.className = "form-group-succes";
  var span = parentbox.querySelector("span");
  span.innerText = "";
  var fa = parentbox.querySelector(".fa-solid");
  fa.className = "fa-solid fa-circle-check";
};
const eyes = document.getElementById("fa-eye-e");
const Password = document.getElementById("Password");
eyes.addEventListener("click",function(){
    if(Password.type === "password",eyes.className == "fa-solid fa-eye"){
      Password.type = "text";
      eyes.className = "fa-solid fa-eye-slash";
    }else{
      Password.type = "password" ;
      eyes.className = "fa-solid fa-eye";
    }
});