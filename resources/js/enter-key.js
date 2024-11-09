const modalBuy = document.querySelector('.modal-buy');

function togglePurchase() {
    modalBuy.style.display = 'block';
    console.log('open');
}

modalBuy.addEventListener('click', function (e) {
    modalBuy.style.display = 'none';
});

const modalContent = document.querySelector('.modal-content');
modalContent.addEventListener('click', function (e) {
    e.stopPropagation();
});