const caesarCipher = (string, key) => {
    const shift = (char, min, key) => {
       return String.fromCharCode((char.charCodeAt(0) + key - min) % 26 + min);
    }
    
    return string
    .replace(/[a-z]/g, letter => shift(letter, "a".charCodeAt(0), key))
    .replace(/[A-Z]/g, letter => shift(letter, "A".charCodeAt(0), key));

}

module.exports = caesarCipher;