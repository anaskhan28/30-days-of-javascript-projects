let encryptBtn = document.getElementById('encrypt-btn'); // click to encrypt text
let eInput = document.getElementById('encryptedInput-1'); // encrypted input
let pInput = document.getElementById('plainInput-1') // plain input text
let inputs = [eInput,pInput]
let copyBtn= document.getElementById('copyToClipBoard');

inputs.forEach(input=>{
    input.oninput=()=>{
        input.value = input.value.toUppserCase();
        console.log('anas')
    }
})