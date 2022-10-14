let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', ()=>{
    result.innerText="Loading...Please wait";

    let timeout = setTimeout(()=>{
        let input = document.getElementById('userInput').value;
        let reversed = input.split("").reverse().join("");
        if(reversed === input){
            result.innerText="Yes, It's a Palindrome";
            result.style.color ='#66dd29';
        }else{
            result.innerText ="No, It's not a Palindrome";
            result.style.color = '#ff6347';
        }
    }, 900)
    
})