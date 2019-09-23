const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        let length = expr.length / 10;
        let exprArr = [];
        let start = 0;
        let end = 10;
        for (let i = 0; i < length; i++) {
          exprArr.push(expr.slice(start, end));
          start += 10;
          end += 10;
        }
    
        let decodedArr = exprArr.map(el => {
          let decodedEl = el;
          decodedEl = decodedEl.replace(/10/g, ".");
          decodedEl = decodedEl.replace(/11/g, "-");
          decodedEl = decodedEl.replace(/0/g, "");
          return decodedEl
        })
        let decodedStr = ``;
      
        for(let i=0; i<decodedArr.length; i++){
          if(decodedArr[i] === "**********") {
            decodedStr += " ";}
            else {
              decodedStr +=  MORSE_TABLE[decodedArr[i]];
            }
      }
        return decodedStr;
}

module.exports = {
    decode
}