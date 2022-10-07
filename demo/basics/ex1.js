// console.dir(document)
const h1 = document.querySelector('h1');
h1.textContent = "Hello World";

// const div1 = document.querySelector('div');
// console.log(div1)

const divs = document.querySelectorAll('div');
// console.log(divs);

// const Class = document.querySelectorAll('.red');
// console.log(Class[0])

// Class[0].textContent = "anas";
// divs.forEach((div, index)=>{
//     console.log(div.textContent += `(${index})`)
// })

// divs[0].addEventListener('click', (e)=>{
//     console.log('clicked');
    
// })

// divs[1].addEventListener('click', buttonClicker);



divs.forEach((div)=>{
    div.addEventListener('click', buttonClicker);
})

function buttonClicker(e){
    console.log(e.target)
  }