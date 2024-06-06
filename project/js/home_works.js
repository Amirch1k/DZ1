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



const child = document.querySelector('.child_block');
let position = 0;

function moveRight() {
    position++;
    if (position <= 448) {
        child.style.left = position + 'px';
        setTimeout(moveRight, 10);
    }
}

moveRight();

