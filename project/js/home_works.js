const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// regExp- нашед в гугле. Вот: https://ru.hexlet.io/blog/posts/validatsiya-email-na-javascript
// Он мелкие ошибки (con) не находит а вот если небудет .com то он находит
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerHTML = 'NOT OK';
        gmailResult.style.color = 'red';
    }
}




const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0, positionY = 0;
const offsetParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < offsetParentWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= offsetParentWidth && positionY < offsetParentHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionX > 0 && positionY === offsetParentHeight) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }
    requestAnimationFrame(moveBlock);
};

moveBlock();



const seconds = document.querySelector('#seconds');
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")


let sec = 0
let interval;
const startTimer = () => {
    sec++
    seconds.innerHTML = sec

}
startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer,500)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval)
    sec = 0
    seconds.innerHTML = '0'
})

