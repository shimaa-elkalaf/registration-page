
let signinMail = document.getElementById("signinemail");
let signinpass = document.getElementById("signinpassword");
let loginBtn = document.querySelector(".Login button");
let signupMail = document.getElementById("signupemail");
let signupName = document.getElementById("signupname");
let signuppass = document.getElementById("signuppassword");
let signupBtn = document.querySelector(".signup button");
let logoutBtn = document.getElementById("logoutBtn");
let signupArray = [];

if (localStorage.getItem('data') == null) {
  signupArray = [];
} else {
  signupArray = JSON.parse(localStorage.getItem('data'));
}

function isEmpty(inputs) {
  return inputs.every(input => input.value.trim() !== "");
}

function existEmail() {
  for (let i = 0; i < signupArray.length; i++) {
    if (signupArray[i].mail.toLowerCase() === signupMail.value.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function signupMsg() {
  let existMsg = document.getElementById("exist");

  if (!isEmpty([signupName, signupMail, signuppass])) {
    existMsg.innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
    return false;
  }

  if (existEmail()) {
    existMsg.innerHTML = '<span class="text-danger m-3">Email already exists</span>';
    return false;
  }

  let signupData = {
    name: signupName.value,
    pass: signuppass.value,
    mail: signupMail.value,
  };
  
  signupArray.push(signupData);
  localStorage.setItem('data', JSON.stringify(signupArray));

  existMsg.innerHTML = '<span class="text-success m-3">Registration successful</span>';
  return true;
}

// -------------------------> Login Functions
function isEmptyLogin() {
  return signinpass.value !== "" && signinMail.value !== "";
}

function signinMsg() {
  let emptyMsg = document.getElementById('empty');

  if (!isEmptyLogin()) {
    emptyMsg.innerHTML = '<p class="text-danger m-3">All inputs are required</p>';
    return false;
  }

  for (let i = 0; i < signupArray.length; i++) {
    if (signupArray[i].mail.toLowerCase() === signinMail.value.toLowerCase() && signupArray[i].pass === signinpass.value) {
      localStorage.setItem('userName', signupArray[i].name);
      window.location.href = "welcome.html";  
      return true;
    }
  }

  emptyMsg.innerHTML = '<p class="text-danger m-3">Invalid email or password</p>';
  return false;
}
if (window.location.pathname.includes("welcome.html")) {
  window.onload = function () {
    let username = localStorage.getItem("userName");

    if (username) {
      document.getElementById("username").innerHTML = `Welcome, ${username}`;
    } else {
      
      window.location.href = "index.html";
    }
  };
}

function logout() {
  localStorage.removeItem('userName');
  window.location.href = "index.html";  
}
