
const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#80fdd8";
        myAudio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');

btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = 'block';
        btnBars.style.display = 'none';
    }
    else if(navCondition === 'close'){
        SideNav.classList.remove('show-nav');
        btnTimes.style.display = 'none';
        btnBars.style.display = 'block';
    }
}

$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "aqua",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.2,
        weight: true,
    }, "tags")){
        $("#myCanvasContainer");
    }
})


const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.Message')

const contactForm =  document.querySelector('.contact-form')

contactForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    validateInput()
})

const validateInput = () => {

    let email = emailInput.value
    let textarea = textareaInput.value

    if (!email && !textarea){
        setError(emailInput.parentElement)
        setError(textareaInput.parentElement)
        showMessage("Please fill in the required inputs")
    }else if(!textarea && email){
        setError(textareaInput.parentElement)
        showMessage("please provide a message")
    }
    else if(!email && textarea){
        setError(emailInput.parentElement)
        showMessage("oops Email Can't be Empty")
    }
    else if(email && textarea){
        emailjs.sendForm("service_i2egx9v", "template_779e39k", contactForm, "27nO3py507aQHesaK");
        setSuccess(emailInput.parentElement)
        setSuccess(textareaInput.parentElement)
        showMessage("Message sent Succesfully", 'green')
        textareaInput.value = ""
        emailInput.value = ""
        nameInput.value = ""
        subjectInput.value = ""
    }
}

const setError = (input) => {
    if (input.classList.contains("success")){
        input.classList.remove("success")
    }else{
        input.classList.add("error")
    }
}
const setSuccess = (input) => {
    if(input.classList.contains("error")){
        input.classList.remove("error")
    }else{
        input.classList.add("success")
    }
}
const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
    const divContent = document.createElement('div')
    divContent.textContent = message
    divContent.classList.add("message-content")
    divContent.style.backgroundColor = updateColor
    messageDiv.prepend(divContent)

    messageDiv.style.transform = `translate(${(0, 0)}%)`
    setTimeout(() => {
        divContent.classList.add("hide")
        divContent.addEventListener("transitionend", () => {
            divContent.remove()
        })
    }, 3000)


}
