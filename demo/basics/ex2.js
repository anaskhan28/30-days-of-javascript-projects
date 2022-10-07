const output = document.querySelector('.output');
const myMessage = createEle('div', output);
const myinput = createEle('input', output);
const myBtn = createEle('button', output);

myMessage.innerText = "Hello";
// output.append(myMessage);
// output.append(myinput);

myBtn.innerText = "Click me";

myBtn.addEventListener('click', (e)=>{
    myMessage.innerText = myinput.value;
    myinput.value = "";
})

function createEle(eleType,eleParent){
    const ele = document.createElement(eleType);
    eleParent.append(ele);
    return ele;
}