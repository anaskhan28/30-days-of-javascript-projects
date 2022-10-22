let encryptBtn = document.getElementById('encrypt-btn')
        let eInput= document.getElementById('encryptedInput-1')
        let pInput= document.getElementById('plainInput-1')
        let inputs = [eInput,pInput]
        var copyBtn = document.getElementById('copyToClipBoard')

        inputs.forEach(input => {
            input.oninput = () => {
                input.value = input.value.toUpperCase()
            }
        })

        function encrypt() {
            let pInput= document.getElementById('plainInput-1').value
            let solved = ''
            let shiftInput = parseInt(document.getElementById('shiftInput').value)

            for(var i =0; i<pInput.length; i++){
                let ascii_num = pInput[i].charCodeAt()
                let sum = ascii_num + shiftInput
                sum >= 65 && sum <=90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum % 91)) : solved += pInput[i]    
                       }
        eInput.value = solved
        }

        function decrypt(){
            let eInput= document.getElementById('encryptedInput-1').value
            let solved = ''
            let shiftInput = parseInt(document.getElementById('shiftInput').value)

            for(var i =0; i<eInput.length; i++){
                let ascii_num = eInput[i].charCodeAt()
                let minus = ascii_num + shiftInput
                minus >= 65 && minus <=90 ? solved += String.fromCharCode(minus) : minus > 90 ? solved += String.fromCharCode(65 - (minus % 91)) : solved -= eInput[i]    
                       }
        pInput.value = solved
                    }
        copyBtn.addEventListener('click', decrypt)
        encryptBtn.addEventListener('click', encrypt) 

