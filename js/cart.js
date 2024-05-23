var cart = {}; //моя корзина


$.getJSON('json.json',function(data){
    var jsons = data;
    checkCart();
    //console.log(cart)
    showCart(); //вывожу товары на страницу

    function showCart(){
        if (  $.isEmptyObject(cart)  ){
            // пустая корзина
            var out = '<p class="empty__cart">Корзина Пуста. Добавте товар в корзину на<a class="gl" href="index.html"> главной </a>страницы</p>'
            $('.my-cart').html(out);
        }
        else{
        var out = '';
        for (var key in cart){
            out+='<div class=cart>'
            out+='<img src="'+jsons[key].image+'">';
            out+='<h3 class="text__size__24">'+data[key]['name']+'</h3>';
            out+= '<button class="delete" data-art="'+key+'" >Удалить</button>';
            out+='<div class="count">'
            out+= '<button class="minus" data-art="'+key+'">-</button>';
            out+= '<p class="white" id="log">'+cart[key]+'</p>';
            out+= '<button class="plus" data-art="'+key+'">+</button>';
            out+='</div>'
            out+='<p class="text__size__20">Цена: '+cart[key]*jsons[key].cost+'</p>';
            out+='</div>'
        }
        $('.my-cart').html(out);
        $('.plus').on('click',plusJsons);
        $('.minus').on('click',minusJsons);
        $('.delete').on('click',deleteJsons);
        }

        if (  $.isEmptyObject(cart)  ){
            // пустая корзина
            var check = '<p class="empty__cart">Корзина Пуста.</p>'
            $('.external__cart').html(check);
        }
        else{
        var check = '';
        for (var key in cart){
            check+='<div class="check_product">'
            check+='<h3 class="text__size__24">'+data[key]['name']+'</h3>';
            check+= '<button class="delete" data-art="'+key+'" >Удалить</button>';
            check+= '<p class="white" id="log">'+cart[key]+'</p>';
            check+='<p class="text__size__20" id="lad">Цена: '+cart[key]*jsons[key].cost+'</p>';
            check+='</div>'
        }
        $('.external-cart').html(check);
        $('.delete').on('click',deleteJsons);
        }

// [
//     {
//         id: 000005,
//         count: 15
//         price: 45000
//     },
//     {
//         id: 000006,
//         count: 1
//         price: 2000
//     },
//     {
//         id: 000007,
//         count: 2
//         price: 10000
//     },
// ]


            //вот тут надо сделать
        if (  $.isEmptyObject(cart)  ){
             //Цена 0
            var amount = 'Цена: 0'
            $('.amount').html(amount);
        }
        else{
        var amount = 0;
        
        
        
        $('.amount span').html(amount);
        }
    }

    function plusJsons(){
        var articul = $(this).attr('data-art');
        cart[articul]++
        showCart();
        saveCartToLS();//сохраняю корзину в locolStorage
    }

    function minusJsons(){
        var articul = $(this).attr('data-art');
        if (cart[articul] > 1){ 
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        showCart();//
        saveCartToLS();//сохраняю корзину в locolStorage
    }

    function deleteJsons(){
        var articul = $(this).attr('data-art');
        delete cart[articul];
        showCart();//
        saveCartToLS();//сохраняю корзину в locolStorage
    }
})

function checkCart(){
    //Проверяю наличие корзины  в localStorage
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart')); 
    }
}

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

/*

fullPrice = (jsonCart.cost) 

*/


