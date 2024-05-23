var cart = {}; //моя корзина

$("document").ready(function(){
    loadjson();
    checkCart();
    showMiniCart();
});


function loadjson() {
        

    // Загрузка товара на сайт
    $.getJSON('json.json', function (data) {
        //console.log(data)
        var out = '';
        for (var key in data){
            out+='<div class="card">';
            out+='<img src="'+data[key].image+'">';
            out+='<h3 class="text__size__24">'+data[key]['name']+'</h3>';
            out+='<p class="text__size__20">Цена: '+data[key]['cost']+'</p>';
            out+='<button class="card__button" data-art="'+key+'">Добавить</button>';
            out+='</div>';
        }
        $('.left__part__site').html(out);
        $('button.card__button').on('click', addToCart);
    })

}


function addToCart(){
    // Добавление товара в корзине
    var articul = $(this).attr('data-art');
    if(cart[articul] != undefined){
        cart[articul]++
    }
    else{
        cart[articul] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart);
    showMiniCart();
}


function checkCart(){
    //Проверяю наличие корзины  в localStorage
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart')); 
    }
}

function showMiniCart(){
    //Показываю содержимое корзины
    var out ='';
    //for (var w in cart){
    //    out += w + ' --- ' +cart[w]+'<br>';
    //}
    out += '<a class="open__cart" href="cart.html">Корзина</a><br>'
    $('.tresh__button').html(out);
}