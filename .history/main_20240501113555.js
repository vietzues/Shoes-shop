const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach(function(btn, index) {
    btn.addEventListener('click', function(e) {
        var card = e.target;
        var cardItem = card.querySelectorAll('.card');
        var cardparent = cardItem.parentElement;

        console.log(t);
    })
})