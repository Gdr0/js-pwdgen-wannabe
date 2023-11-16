// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23.

// NOME
const userName = prompt("come ti chiami?");
console.log(userName);
// COGNOME
const userLastname = prompt("qual è il tu cognome?");
console.log(userLastname);
// colore preferito
const favouriteColor = prompt("qual è il tuo colore preferito?");
console.log(favouriteColor);
//ricavo la password
let password = userName + userLastname + favouriteColor + "23";

console.log(password);

document.getElementById("weak_password").innerHTML =
  "La tua password è : " + password;
