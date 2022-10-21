let encryptBtn = document.getElementById('encrypt-btn'); // click to encrypt text
let eInput = document.getElementById('encryptedInput-1'); // encrypted input
let pInput = document.getElementById('plainInput-1') // plain input text
let inputs = [eInput,pInput]
let copyBtn= document.getElementById('copyToClipBoard');
let shiftInput = parseInt(document.getElementById('shiftInput').value)
 


function Encrypt() {
    let solved ='';
    for(let i=0; i<pInput.length; i++){
        sum >=65 && sum <=90 ? solved +=String.fromCharCode(sum): sum>90 ? solved +=String.fromCharCode(65+(sum&91)):solved+=pInput[i]
    }
    console.log(eInput.value =solved);
}
encryptBtn.addEventListener('click', Encrypt)