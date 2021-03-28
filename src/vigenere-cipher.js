const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error("THROWN");
        }

        let innerMessage = message.toUpperCase();
        let innerKey = key.toUpperCase();

        function getCharCodeArr(text) {
            let charCodeArr = [];
            for (let i = 0; i < text.length; i++) {
                let currChar = text.charCodeAt(i) - 65;
                charCodeArr.push(currChar);

            }
            return charCodeArr;
        }

        function getFullKeyString(key, number) {
            let counter = 0;
            let keyArr = []
            for (let i = 0; i < number; i++) {
                if (counter >= key.length) {
                    counter = 0;
                }
                keyArr.push(key[counter]);
                counter++
            }
            return keyArr.join('')
        }

        innerMessage = getCharCodeArr(innerMessage);
        innerKey = getCharCodeArr(getFullKeyString(innerKey, innerMessage.length));

        function getEncryptedCharCodeMessage(messageArr, keyArr) {
            let encryptCharCodeMessage = [];
            let currentCharCode
            for (let i = 0; i < messageArr.length; i++) {
                if (messageArr[i] < 0 || messageArr[i] > 25) {
                    encryptCharCodeMessage.push(messageArr[i] + 65)
                } else {
                    currentCharCode = messageArr[i] + keyArr[i];
                    if (currentCharCode > 26) {
                        currentCharCode = currentCharCode - 26;

                    }
                    encryptCharCodeMessage.push(currentCharCode);
                }

            }
            return encryptCharCodeMessage
        }

        let encryptedArr = getEncryptedCharCodeMessage(innerMessage, innerKey)

        function encrypt(encryptedArr) {
            let arr = []
            for (let i = 0; i < encryptedArr.length; i++) {
                if (encryptedArr[i] < 0 || encryptedArr[i] > 25) {
                    arr.push(String.fromCharCode(encryptedArr[i]));
                } else {
                    arr.push(String.fromCharCode(encryptedArr[i] + 65));
                }
            }
            return arr.join('');
        }

        let encryptedMessage = encrypt(encryptedArr);

        return this.param === undefined || this.param === true ? encryptedMessage : encryptedMessage.split('').reverse().join('')
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error("THROWN");
        }

        let innerMessage = encryptedMessage.toUpperCase();
        let innerKey = key.toUpperCase();
        console.log(innerMessage)
        console.log(innerKey)
        function getCharCodeArr(text) {
            let charCodeArr = [];
            for (let i = 0; i < text.length; i++) {
                let currChar = text.charCodeAt(i) - 65;
                charCodeArr.push(currChar);

            }
            return charCodeArr;
        }

        function getFullKeyString(key, number) {
            let counter = 0;
            let keyArr = []
            for (let i = 0; i < number; i++) {
                if (counter >= key.length) {
                    counter = 0;
                }
                keyArr.push(key[counter]);
                counter++
            }
            return keyArr.join('')
        }


        function decryptInn(encryptMessage, key) {
            let encryptMessageChars = getCharCodeArr(encryptMessage)
            key = getCharCodeArr(getFullKeyString(innerKey, innerMessage.length));
            let decryptArr = [];
            for (let i = 0; i < encryptMessageChars.length; i++) {
                if (encryptMessageChars[i] < 0 || encryptMessageChars[i] > 25) {
                    decryptArr.push(String.fromCharCode(encryptMessageChars[i] + 65));
                } else {
                    let currChar
                    if (encryptMessageChars[i] > key[i]) {
                        currChar = encryptMessageChars[i] - key[i];
                        decryptArr.push(String.fromCharCode(currChar + 65));

                    } else {
                        currChar = (encryptMessageChars[i] + 26) - key[i];
                        if (currChar === 26) {
                            currChar = 0;
                        }
                        decryptArr.push(String.fromCharCode(currChar + 65));
                    }
                }
            }
            return decryptArr.join('')
        }

        let decryptedMessage = decryptInn(innerMessage, innerKey);

        return this.param === undefined || this.param === true ? decryptedMessage : decryptedMessage.split('').reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;
