const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach(function(btn, index) {
    btn.addEventListener('click', function(e) {
        var btnItem = e.target;
        var cards = document.querySelectorAll('.card');
        var cardparent = cards.parentElement;

        console.log(cardparent);
    })
})