window.addEventListener('load', function() {

    const userPath = document.referrer;

    if (!userPath || userPath == '') {
        location.href = 'https://deliverable.veenitxs.repl.co/join';
    } else {
        console.log('user is allowed!');
    };
    
});

const locationNavBtn = document.querySelector('#expand-location');
const hiddenLocationMenuNav = document.querySelector('#hidden-location');

locationNavBtn.addEventListener('click', function() {

    if (hiddenLocationMenuNav.style.display === 'none') {
        hiddenLocationMenuNav.style.display = 'block';
        locationNavBtn.innerText = 'expand_less';
    } else {
        hiddenLocationMenuNav.style.display = 'none';
        locationNavBtn.innerText = 'expand_more';
    };

});

const newLocationBtn = document.querySelector('#find-btn-nav');

newLocationBtn.addEventListener('click', function() {

    const newLocation = document.getElementById('new-location').value;

    if (/^\d+\s[A-z]+\s[A-z]+/.test(newLocation) == true) {
        
        console.log(newLocation);
        const locationText = document.querySelector('#address-nav');
        locationText.innerText = newLocation;
        
    } else {

        alert('Please Enter A Valid Address!');
        
    };
    
});

let orderType;

const orderTypes = ['delivery', 'pickup'];

const selectOrderTypeFilterDeliveryBtn = document.querySelector('.delivery-btn'); 
const selectOrderTypeFilterPickupBtn = document.querySelector('.pickup-btn');

selectOrderTypeFilterDeliveryBtn.addEventListener('click', function() {

    selectOrderTypeFilterDeliveryBtn.style.textDecoration = 'underline';
    selectOrderTypeFilterPickupBtn.style.textDecoration = 'none';

    orderType = 'delivery';
    console.log(orderType);
    
});

selectOrderTypeFilterPickupBtn.addEventListener('click', function() {

    selectOrderTypeFilterDeliveryBtn.style.textDecoration = 'none';
    selectOrderTypeFilterPickupBtn.style.textDecoration = 'underline';

    orderType = 'pickup';
    console.log(orderType);
    
});

const catergories = ['mexican', 'asian', 'pizza', 'burgers', 'american'];

const foodBtn = document.querySelector('.food-type');

const mexicanBtn = document.getElementById('mexican-btn');
const asianBtn = document.getElementById('asian-btn');
const pizzaBtn = document.getElementById('pizza-btn');
const burgerBtn = document.getElementById('burger-btn');
const americanBtn = document.getElementById('american-btn');
const tacoBtn = document.getElementById('tacos-btn');
const chickenBtn = document.getElementById('chicken-btn');
const allBtn = document.querySelector('#all-btn');

const chipotle = document.querySelector('.mexican');
const sbarro = document.querySelector('.pizza');
const pandaExpress = document.querySelector('.asian');
const chickFilA = document.querySelector('.american');
const shakeShack = document.querySelector('.burgers');
const portillos = document.querySelector('.american-p');

foodBtn.addEventListener('click', function() {

    console.log('click!');

    if (!foodBtn.id === 'mexican-btn' || !foodBtn.id === 'asian-btn' || !foodBtn.id === 'pizza-btn' || !foodBtn.id === 'burger-btn' || !foodBtn.id === 'american-btn' || !foodBtn.id === 'tacos-btn' || !foodBtn.id === 'chicken-btn' || !foodBtn.id === 'all-btn') {

        const noQueryText = document.getElementById('no');
        noQueryText.style.display = 'block';
        
    } else {

        const noQueryText = document.getElementById('no');
        noQueryText.style.display = 'none';
        
    }
    
})

allBtn.addEventListener('click', function() {

    chipotle.style.display = 'flex';
    sbarro.style.display = 'flex';
    pandaExpress.style.display = 'flex';
    chickFilA.style.display = 'flex';
    shakeShack.style.display = 'flex';
    portillos.style.display = 'flex';
    
});

tacoBtn.addEventListener('click', function() {

    console.log('clicked!')

    sbarro.style.display = 'none';
    pandaExpress.style.display = 'none';
    chickFilA.style.display = 'none';
    shakeShack.style.display = 'none';
    portillos.style.display = 'none';

    const mexicanQuery = document.querySelector('.mexican');
    mexicanQuery.style.display = 'flex';
    
});

chickenBtn.addEventListener('click', function() {

    chipotle.style.display = 'none';
    sbarro.style.display = 'none';
    pandaExpress.style.display = 'none';
    chickFilA.style.display = 'flex';
    shakeShack.style.display = 'none';
    portillos.style.display = 'none';

});

mexicanBtn.addEventListener('click', function() {

    console.log('clicked!')

    sbarro.style.display = 'none';
    pandaExpress.style.display = 'none';
    chickFilA.style.display = 'none';
    shakeShack.style.display = 'none';
    portillos.style.display = 'none';

    const mexicanQuery = document.querySelector('.mexican');
    mexicanQuery.style.display = 'flex';
    
});

asianBtn.addEventListener('click', function() {

    chipotle.style.display = 'none';
    sbarro.style.display = 'none';
    pandaExpress.style.display = 'flex';
    chickFilA.style.display = 'none';
    shakeShack.style.display = 'none';
    portillos.style.display = 'none';
    
});

pizzaBtn.addEventListener('click', function() {

    chipotle.style.display = 'none';
    sbarro.style.display = 'flex';
    pandaExpress.style.display = 'none';
    chickFilA.style.display = 'none';
    shakeShack.style.display = 'none';
    portillos.style.display = 'none';
    
});

burgerBtn.addEventListener('click', function() {

    chipotle.style.display = 'none';
    sbarro.style.display = 'none';
    pandaExpress.style.display = 'none';
    chickFilA.style.display = 'none';
    shakeShack.style.display = 'flex';
    portillos.style.display = 'none';
    
});

americanBtn.addEventListener('click', function() {

    chipotle.style.display = 'none';
    sbarro.style.display = 'none';
    pandaExpress.style.display = 'none';
    chickFilA.style.display = 'flex';
    shakeShack.style.display = 'flex';
    portillos.style.display = 'flex';
    
});

const pickupBtn = document.querySelector('.pickup-btn');
pickupBtn.addEventListener('click', function() {

    location.href = 'https://deliverable.veenitxs.repl.co/pickup';
    
});

const chipotleOrderBtn = document.querySelector('.c-btn');
const sbarroOrderBtn = document.querySelector('.s-btn');
const pandaExpressOrderBtn = document.querySelector('.pd-btn');
const chickFilAOrderBtn = document.querySelector('.cfa-btn');
const shakeShackOrderBtn = document.querySelector('.ss-btn');
const portillosOrderBtn = document.querySelector('.p-btn');

chipotleOrderBtn.addEventListener('click', function() {

    localStorage.setItem('order', 'chipotle');
    location.href = 'https://deliverable.veenitxs.repl.co/checkout';
    
});

sbarroOrderBtn.addEventListener('click', function() {

    localStorage.setItem('order', 'sbarro');
    location.href = 'https://deliverable.veenitxs.repl.co/checkout';
    
});

pandaExpressOrderBtn.addEventListener('click', function() {

    localStorage.setItem('order', 'panda express');
    location.href = 'https://deliverable.veenitxs.repl.co/checkout';
    
});

chickFilAOrderBtn.addEventListener('click', function() {

    localStorage.setItem('order', 'chick fil a');
    location.href = 'https://deliverable.veenitxs.repl.co/checkout';
    
});

shakeShackOrderBtn.addEventListener('click', function() {

    localStorage.setItem('order', 'shake shack');
    location.href = 'https://deliverable.veenitxs.repl.co/checkout';
    
});

portillosOrderBtn.addEventListener('click', function() {

    localStorage.setItem('order', 'portillos');
    location.href = 'https://deliverable.veenitxs.repl.co/checkout';
    
});

const modalBtn = document.querySelector('#modal');
const modalContent = document.getElementById('modal-content');

modalBtn.addEventListener('click', function() {

    modalContent.style.display = 'flex';
    document.body.style.background = 'gray';
    
});

const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener('click', function() {

    document.body.style.background = 'white';
    modalContent.style.display = 'none';
    
});
