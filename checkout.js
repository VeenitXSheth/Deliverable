const firstView = document.querySelector('.left-order');
const secondView = document.querySelector('.left-pay');

const continueBtn = document.getElementById('continue-pay-btn');

continueBtn.addEventListener('click', function() {

    firstView.style.display = 'none';
    secondView.style.display = 'flex';
    
});

window.addEventListener('load', function() {

    const userPath = document.referrer;

    if (!userPath || userPath === '') {
        location.href = 'https://deliverable.veenitxs.repl.co/join';
    } else {
        const imgType = localStorage.getItem('order');
        const img = document.getElementById('company-img');
    
        if (imgType === 'chipotle') {
            img.src = 'public/images/chipotle-featured.jpeg';
        } else if (imgType === 'sbarro') {
            img.src = 'public/images/sbarro-featured.jpeg';
        } else if (imgType === 'panda express') {
            img.src = 'public/images/panda-express-featured.jpeg';
        } else if (imgType === 'chick fil a') {
            img.src = 'public/images/chick-fil-a-featured.jpeg';
        } else if (imgType === 'portillos') {
            img.src = 'public/images/portillos-featured.jpeg';
        } else {
            img.src = 'public/images/shake-shack-featured.png';
        };
    }
    
});

const counterBtn = document.querySelector('#counter-btn');
let count = 0;
let total = 0;

counterBtn.addEventListener('click', function() {
    
    const totalText = document.querySelector('#total');

    count = count + 1;
    counterBtn.innerText = `${count} +`;

    total = total + 2.99;
    localStorage.setItem('total', total);

    const num = localStorage.getItem('total')

    totalText.innerText = `$ ${num}`;
    
});
