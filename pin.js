/* https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false. */

function validatePIN(pin) {
    if (typeof (pin) === 'string') {
        const pinArr = [...pin];
        if (pinArr.length === 4 || pinArr.length === 6) {
            const checkPin = pinArr.map(el => parseInt(el) >= 0);

            //console.log(checkPin);
            //console.log(!checkPin.includes(false));
            return !checkPin.includes(false);
        }
        else { console.log("zła ilość znaków"); return false; }
    }
    else { console.log("false, it's not string!"); return false; }
}
const a = '12k4';
const b = '-1.234';
const c = '123456';

function sprawdzenie(x) {
    if (validatePIN(x) == true) console.log("jest true");
    else if (validatePIN(x) == false) console.log("jest false");
    else console.log('coś poszło nie tak');
}

sprawdzenie(a);
sprawdzenie(b);
sprawdzenie(c);