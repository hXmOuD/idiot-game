const no = document.querySelector('.no div');
const yes = document.querySelector('.yes div');

no.addEventListener('click', relocate);

const height = window.innerHeight / 5;
const width = window.innerWidth / 5;

function relocate() {
    let h = Math.random() * height;
    let w = Math.random() * width;
    no.style.top = format(h);
    no.style.left = format(w);
}

function format(number) {
    let arr = ['negative', 'positive'];
    let state = arr[Math.floor(Math.random() * 2)];
    
    if (state === 'negative') {
        return `-${number}px`;
    } else {
        return `${number}px`;
    }
}

yes.addEventListener('click', () => {
    alert('I knew ;)');
    if (window.confirm) {
        window.location = './';
    }
});
