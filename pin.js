/* https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false. */

function validatePIN(pin) {
  if (typeof pin === "string") {
    
    return /^(\d{4}|\d{6})$/.test(pin);
    
}

function sprawdzenie(x) {
  if (validatePIN(x) == true) console.log("jest true");
  else if (validatePIN(x) == false) console.log("jest false");
  else console.log("coś poszło nie tak");
}

const a = "12k45";
const b = "-1.234";
const c = "123456";

sprawdzenie(a);
sprawdzenie(b);
sprawdzenie(c);
