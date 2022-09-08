const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit (event){

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERNAME_KEY, loginInput.value)
  paintGreetings()
} 

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY)
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText =`Hello, ${username}`
}

loginForm.addEventListener ("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
} else  {
 paintGreetings()
}