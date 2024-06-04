const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach(function(btn, index) {
    btn.addEventListener('click', function(e) {
        var card = e.target;
        var cardItem = cardItem.querySelectorAll('.card');
        var cardparent = cards.parentElement;

        console.log(cardparent);
    })
})