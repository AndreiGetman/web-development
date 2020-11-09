class Product{
    constructor(id, title, price, img, src, container){
        this.id = id;
        this.price = price;
        this.title = title;
        this.img = img;
        this.src = src;
        this.container = container;
        this._render(this.container);
    }
    _render(container){
        let $wrapper = $('<div/>', {
            class: 'product-item'
        });

        let $desc = $('<a></a>', {
            href: this.src,
            class: '.product-item a'
        });

        let $img = $('<img/>', {
            src: this.img,
            class: '.product-item img'
        });

        let $name = $('<h2/>', {
            text: this.title,
            class: '.product-item h2'
        });

        let $price = $(`<p>$${this.price}</p>`, {
            class: '.product-item p'
        });

        let $buyBtnBlock = $('<div/>', {
            class: 'addcart'
        });

        let $buyBtn = $('<button/>', {
            class: 'add-to-cart',
            text: 'Add to Cart',
            'data-id': this.id,
            'data-name': this.title,
            'data-price': this.price,
            'data-img': this.img,
            'data-src': this.src
        });


        // Собираем структуру html
        $img.appendTo($desc);
        $name.appendTo($desc);
        $price.appendTo($desc);
        $desc.appendTo($wrapper);
        $buyBtnBlock.appendTo($wrapper);
        $buyBtn.appendTo($buyBtnBlock);


        $(container).append($wrapper);

    }
}