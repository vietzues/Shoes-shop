const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach(function(btn, index) {
    btn.addEventListener('click', function(e) {
        var btnItem = e.target;
        var products = btnItem.parentElement;
        var productImg = products.querySelector();
        var products = btnItem.parentElement;
        console.log(productImg);
    })
})