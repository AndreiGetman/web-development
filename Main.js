$(document).ready(() => {

    // Создаем меню.
    let menu1 = document.querySelector(".menu");
    let menu = new Menu('', 'menu', [
        new MenuItem('products.html', 'Home'),
        new MenuItem('products.html', 'Man'),
        new MenuItem('products.html', 'Woman'),
        new MenuItem('products.html', 'Kids'),
        new MenuItem('products.html', 'Accoseriese'),
        new MenuItem('products.html', 'Featured'),
        new SubMenu('products.html', 'SubMenuExample', '', 'subMenu', [
                new MenuItem('#', 'SubMenuExample'),
                new MenuItem('#', 'SubMenuExample'),
                new MenuItem('#', 'SubMenuExample'),
            ],
        ),
        new MenuItem('#', 'Hot Deals'),
    ]);
    menu1.innerHTML = menu.render();

    // Создаем продукты для index.html
    let product1 = new Product(1, 'Mango People T-shirt', 52.00, 'images/product-1.jpg',
        'prod-item.html', '#product-shop__index');
    let product2 = new Product(2, 'Mango People T-shirt', 52.00, 'images/product-2.jpg',
        'prod-item.html', '#product-shop__index');
    let product3 = new Product(3, 'Mango People T-shirt', 52.00, 'images/product-3.jpg',
        'prod-item.html', '#product-shop__index');
    let product4 = new Product(4, 'Mango People T-shirt', 52.00, 'images/product-4.jpg',
        'prod-item.html', '#product-shop__index');
    let product5 = new Product(5, 'Mango People T-shirt', 52.00, 'images/product-5.jpg',
        'prod-item.html', '#product-shop__index');
    let product6 = new Product(6, 'Mango People T-shirt', 52.00, 'images/product-6.jpg',
        'prod-item.html', '#product-shop__index');
    let product7 = new Product(7, 'Mango People T-shirt', 52.00, 'images/product-7.jpg',
        'prod-item.html', '#product-shop__index');
    let product8 = new Product(8, 'Mango People T-shirt', 52.00, 'images/product-8.jpg',
        'prod-item.html', '#product-shop__index');

    // Создаем продукты для products.html

    let product9 = new Product(9, 'Mango People T-shirt', 52.00, 'images/product-9.jpg',
        'prod-item.html', '#product-shop__products');
    let product10 = new Product(10, 'Mango People T-shirt', 52.00, 'images/product-10.jpg',
        'prod-item.html', '#product-shop__products');
    product3 = new Product(3, 'Mango People T-shirt', 52.00, 'images/product-3.jpg',
        'prod-item.html', '#product-shop__products');
    let product11 = new Product(11, 'Mango People T-shirt', 52.00, 'images/product-11.jpg',
        'prod-item.html', '#product-shop__products');
    product8 = new Product(8, 'Mango People T-shirt', 52.00, 'images/product-8.jpg',
        'prod-item.html', '#product-shop__products');
    let product16 = new Product(16, 'Mango People T-shirt', 52.00, 'images/product-16.jpg',
        'prod-item.html', '#product-shop__products');
    product6 = new Product(6, 'Mango People T-shirt', 52.00, 'images/product-6.jpg',
        'prod-item.html', '#product-shop__products');
    let product17 = new Product(17, 'Mango People T-shirt', 52.00, 'images/product-17.jpg',
        'prod-item.html', '#product-shop__products');
    let product18 = new Product(18, 'Mango People T-shirt', 52.00, 'images/product-18.jpg',
        'prod-item.html', '#product-shop__products');

    // Создаем продукты для prod-item.html

    let product19 = new Product(19, 'BLAZE LEGGINGS', 52.00, 'images/product-19.jpg',
        'prod-item.html', '#product-shop__prod-item');
    let product20 = new Product(20, 'ALEXA SWEATER', 52.00, 'images/product-20.jpg',
        'prod-item.html', '#product-shop__prod-item');
    let product21 = new Product(21, 'AGNES TOP', 52.00, 'images/product-21.jpg',
        'prod-item.html', '#product-shop__prod-item');
    let product22 = new Product(22, 'SYLVA SWEATER', 52.00, 'images/product-22.jpg',
        'prod-item.html', '#product-shop__prod-item');

    //Корзина
    let mycart = new Cart('getCart.json');


    //Обработчик добавления в корзину
    $('#product-shop__index, #product-shop__products, #product-shop__prod-item').on('click', '.add-to-cart', e => {
        mycart.addProduct(e.target);
    });
});