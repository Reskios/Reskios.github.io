//login-----------------------------------------------------------------------------------------------------
var usernameInput = document.getElementById("username_i");
var passwordInput = document.getElementById("password_i");
var message = document.getElementById("message");
var button = document.getElementById("button");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

var texte = passwordInput.length;
// Au chargement de la page, masquer le bloc "message"
message.style.display = "none";

// Lorsque l'utilisateur clique sur le champ du mot de passe
passwordInput.addEventListener("click", function () {
  // Afficher le bloc "message"
  message.style.display = "block";
});

// Lorsque l'utilisateur saisit quelque chose dans l'input du mot de passe
passwordInput.addEventListener("input", function () {
  // Si l'input est vide, masquer le bloc "message" et supprimer l'effet de flou
  message.style.display = "";
});

// Lorsque l'utilisateur appuie sur une touche dans le champ d'identifiant
usernameInput.addEventListener("keydown", function (event) {
  // Si la touche est "Entrée" (keyCode 13)
  if (event.keyCode === 13) {
    event.preventDefault(); // Empêcher l'envoi du formulaire
    passwordInput.focus(); // Passer au champ de mot de passe
    // Afficher le bloc "message"
    message.style.display = "block";
  }
});
// verification de l'identifiant de conenction
usernameInput.onkeyup = function () {
  var acceptedusernames = "reskios";
  var acceptedmails = "reskios.olv51@gmail.com";
  if (
    usernameInput.value == acceptedusernames ||
    usernameInput.value == acceptedmails
  ) {
    usernameInput.classList.remove("invalid");
    usernameInput.classList.add("valid");
  } else {
    usernameInput.classList.remove("valid");
    usernameInput.classList.add("invalid");
  }
};

// Lorsque l'utilisateur appuie sur une touche dans le champ du mot de passe
passwordInput.onkeyup = function () {
  // Valider les lettres minuscules
  var lowerCaseLetters = /[a-z]/g;
  if (passwordInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Valider les lettres majuscules
  var upperCaseLetters = /[A-Z]/g;
  if (passwordInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Valider les chiffres
  var numbers = /[0-9]/g;
  if (passwordInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  if (passwordInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  // valider les mdp
  var acceptedpasswords = "Reskios12";
  if (passwordInput.value == acceptedpasswords) {
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
  } else {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
  }
};
e = true;
function changer() {
  if (e) {
    document.getElementById("password_i").setAttribute("type", "text");
    document.getElementById("eye").src = "./asset/img/eyes-open.png";
    e = false;
  } else {
    document.getElementById("password_i").setAttribute("type", "password");
    document.getElementById("eye").src = "./asset/img/eyes-close.png";
    e = true;
  }
}
// Lorsque le formulaire est soumis
button.addEventListener("click", function (event) {
  event.preventDefault(); // Empêcher l'envoi du formulaire par défaut
  var isUsernameValid = usernameInput.classList.contains("valid");
  var isPasswordValid =
    letter.classList.contains("valid") &&
    capital.classList.contains("valid") &&
    number.classList.contains("valid") &&
    passwordInput.classList.contains("valid") &&
    length.classList.contains("valid");

  if (isUsernameValid && isPasswordValid) {
    // Rediriger vers une autre page
    // window.location.href = "";
  }
});
//endLogin----------------------------------------------------------------------------------------------------------------------------------------------------
