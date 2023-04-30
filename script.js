const modalBtn = document.querySelector('#modal');
const modal = document.querySelector('.modal-content');

modalBtn.addEventListener('click', function() {

    modal.style.display = 'flex';
    document.body.style.background = '#831100';
    document.body.style.color = '#929292';

});

const closeBtn = document.querySelector('#close');

closeBtn.addEventListener('click', function() {

    modal.style.display = 'none';
    document.body.style.background = 'red';
    document.body.style.color = 'white';
    
});

const joinBtn = document.getElementById('go');

joinBtn.addEventListener('click', function() {

    location.href = 'https://deliverable.veenitxs.repl.co/join';
    
});
