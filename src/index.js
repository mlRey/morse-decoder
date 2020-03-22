const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let tmp = '';
    let rez = '';
    for (let i = 10; i <= expr.length; i += 10) {
        let str = expr.substring(i - 10, i);
        if (str == '**********') {
            rez += ' ';
        }
        else {
            for (let j = 2; j <= 10; j += 2) {
                let _str = str.substring(j - 2, j);
                if (_str == '10') tmp += '.';
                else if (_str == '11') tmp += '-';
            }
            rez += MORSE_TABLE[tmp];
        }
        tmp = '';
    }
    return (rez);
}

module.exports = {
    decode
}