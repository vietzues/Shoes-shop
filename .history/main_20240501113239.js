const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach(function(btn, index) {
    btn.addEventListener('click', function(e) {
        var cards = document.querySelectorAll('.card');
        var cardparent = cards.parentElement;
        var cardparent = e.target;

        console.log(cardparent);
    })
})