'use script';

const bTn = document.querySelector('#button1');
const imageBoxResult = document.querySelector('#image_result');
const informationtCelebrity = document.querySelector('#informationAboutCelebrity');
const informationBox = document.querySelector('#information');
const koreanActor1El = document.querySelector('.korean--0');
const koreanActor2El = document.querySelector('.korean--2');
const koreanActor3El = document.querySelector('.korean--3');
const koreanActor4El = document.querySelector('.korean--4');
const koreanActor5El = document.querySelector('.korean--5');
const koreanActor6El = document.querySelector('.korean--6');
const koreanActor7El = document.querySelector('.korean--7');
const koreanActor8El = document.querySelector('.korean--8');
const imageInt = document.querySelector('#interrogationImage');
const resultBox = document.querySelector('#results');

informationtCelebrity.src = '/img/interrogation.png';
let playing = true;

bTn.addEventListener('click', function() {

    if(playing) {
    const imageX = Math.trunc(Math.random() * 8) + 1;
    console.log(imageX);

    imageBoxResult.src = `/img/korean--${imageX}.png`;
        
    playing = false;

    switch (imageX) {
        case 1:
        koreanActor1El.style.display = 'block';
        koreanActor2El.style.display = 'none';
        imageInt.style.display = 'none';

        koreanActor3El.style.display = 'none';
        koreanActor4El.style.display = 'none';
        koreanActor5El.style.display = 'none';
        koreanActor6El.style.display = 'none';
        koreanActor7El.style.display = 'none';
        koreanActor8El.style.display = 'none';

        break;

        case 2:
        koreanActor2El.style.display = 'block';
        koreanActor1El.style.display = 'none';
        imageInt.style.display = 'none';

        koreanActor3El.style.display = 'none';
        koreanActor4El.style.display = 'none';
        koreanActor5El.style.display = 'none';
        koreanActor6El.style.display = 'none';
        koreanActor7El.style.display = 'none';
        koreanActor8El.style.display = 'none';
        break;

        case 3:

        koreanActor3El.style.display = 'block';
        koreanActor1El.style.display = 'none';
        koreanActor2El.style.display = 'none';
        koreanActor5El.style.display = 'none';
        koreanActor6El.style.display = 'none';
        koreanActor7El.style.display = 'none';
        koreanActor8El.style.display = 'none';
        imageInt.style.display = 'none';

        koreanActor4El.style.display = 'none';

        break;

        case 4:

        koreanActor4El.style.display = 'block';
        koreanActor1El.style.display = 'none';
        koreanActor2El.style.display = 'none';
        koreanActor3El.style.display = 'none';
        koreanActor5El.style.display = 'none';
        koreanActor6El.style.display = 'none';
        koreanActor7El.style.display = 'none';
        koreanActor8El.style.display = 'none';
        imageInt.style.display = 'none';
        informationBox.style.height = '600px';
        informationtCelebrity.style.height = '460px';
        resultBox.style.height = '1040px';

        break;

        case 5:

        koreanActor5El.style.display = 'block';
        koreanActor4El.style.display = 'none';
        koreanActor1El.style.display = 'none';
        koreanActor2El.style.display = 'none';
        koreanActor3El.style.display = 'none';
        koreanActor6El.style.display = 'none';
        koreanActor7El.style.display = 'none';
        koreanActor8El.style.display = 'none';
        imageInt.style.display = 'none';

        break;

        case 6:
        
        koreanActor6El.style.display = 'block';
        koreanActor5El.style.display = 'none';
        koreanActor4El.style.display = 'none';
        koreanActor1El.style.display = 'none';
        koreanActor2El.style.display = 'none';
        koreanActor3El.style.display = 'none';
        koreanActor7El.style.display = 'none';
        koreanActor8El.style.display = 'none';
        imageInt.style.display = 'none';

        break;

        case 7:

        koreanActor7El.style.display = 'block';
        koreanActor6El.style.display = 'none';
        koreanActor5El.style.display = 'none';
        koreanActor4El.style.display = 'none';     
        koreanActor1El.style.display = 'none';
        koreanActor2El.style.display = 'none';
        koreanActor3El.style.display = 'none';
        koreanActor8El.style.display = 'none';
        imageInt.style.display = 'none';

        break;

        case 8:

        koreanActor8El.style.display = 'block';
        koreanActor7El.style.display = 'none';
        koreanActor6El.style.display = 'none';
        koreanActor5El.style.display = 'none';
        koreanActor4El.style.display = 'none';     
        koreanActor1El.style.display = 'none';
        koreanActor2El.style.display = 'none';
        koreanActor3El.style.display = 'none';
        imageInt.style.display = 'none';

        break;
        
        default:

        console.log('Invalid');
        imageInt.style.display = 'block';
        koreanActor1El.style.display = 'none';
        koreanActor2El.style.display = 'none';
        koreanActor4El.style.display = 'none';
        koreanActor3El.style.display = 'none';
        koreanActor5El.style.display = 'none';
        koreanActor6El.style.display = 'none';
        koreanActor7El.style.display = 'none';
        koreanActor8El.style.display = 'none';
    }
    }
});

const modalBox = document.querySelector('.modal');
const overlayBox = document.querySelector('.overlay');
const openBtn = document.querySelector('.open-modal');
const closeBtn = document.querySelector('.close-modal');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlayBox.addEventListener('click', overlayClose)
document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if(e.key === 'Escape') {
        if(!modalBox.classList.contains('hidden')) {
            closeModal()
        }
    }
});

function openModal() {

    modalBox.classList.remove('hidden');
    overlayBox.classList.remove('hidden');
}

function closeModal() {

    modalBox.classList.add('hidden');
    overlayBox.classList.add('hidden');
}

function overlayClose() {

    overlayBox.classList.add('hidden');
    modalBox.classList.add('hidden');
}

const topScroll = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
