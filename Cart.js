class Cart {
    constructor(source, container = '#cart') {
        this.container = container;
        this.source = source;
        this.countGoods = 0; // Общее кол-во товаров
        this.amount = 0; // Сумма товаров в корзине
        this.basketItems = []; // Товары в корзине
        this._init(this.source);
    }

    _render() {
        let $cartDiv = $('<div/>', {
            id: `contForProductItem`
        });
        $cartDiv.appendTo($(this.container));
    }

    _init(source) {
        this._render();
        if (!localStorage.getItem('myitems')){
            fetch(source)
                .then(result => result.json())
                .then(data => {
                    for (let product of data.contents) {
                        this.basketItems.push(product);
                        this._renderItem(product);
                        console.log(product);
                    }
                    this.countGoods = data.countGoods;
                    this.amount = data.amount;
                    localStorage.setItem('myitems', JSON.stringify(this.basketItems));
                    localStorage.setItem('countGoods', JSON.stringify(this.countGoods));
                    localStorage.setItem('amount', JSON.stringify(this.amount));
                    this._renderSum()

                });
        } else {
            this.basketItems = JSON.parse(localStorage.getItem('myitems'));
            this.countGoods = JSON.parse(localStorage.getItem('countGoods'));
            this.amount = JSON.parse(localStorage.getItem('amount'));
            for (let product of this.basketItems){
                this._renderItem(product);
                this._updateCart(product);
                console.log(product);
            }
            this._renderSum();
        }
    }

    _renderItem(product) {
        let $checkrow = $('<div/>', {
            class: "checkrow",
            'data-product': product.id_product,
        });
        let $checkitem_1 = $(`<div class="checkitem_1"><a href="${product.linkSrc}">
                                <img src="${product.imgSrc}" alt="CheckItem"></a>
                                <p class="checkitem_zag"><a href="${product.linkSrc}">${product.product_name}</a></p>
                                <p class="checkitem_size"><span>Color:</span> Red</p>
                                <p class="checkitem_size"><span>Size:</span> Xll </p></div>`);

        let $checkitem_2 = $('<div/>', {
            class: 'checkitem_2',
            text: `$${product.price}`,
        });
        let $checkitem_3 = $('<div/>', {
            class: 'checkitem_3',
        });

        $checkitem_3.append($(`<form class="checkinput">
<input class="checkitem-text" type="text" pattern="^[ 0-9]+$" placeholder="${product.quantity}"><form/>`));

        let $checkitem_4 = $('<div/>', {
            class: 'checkitem_4',
            text: "FREE",
        });

        let $checkitem_5 = $('<div/>', {
            class: 'checkitem_5',
            text: `$${product.price * product.quantity}`,
        });

        $checkrow.append($checkitem_1);
        $checkrow.append($checkitem_2);
        $checkrow.append($checkitem_3);
        $checkrow.append($checkitem_4);
        $checkrow.append($checkitem_5);
        let $delBtnDiv = $(`<div class="checkitem_6"></div>`);
        let $delBtn = $(`<a href="#"><i class="fas fa-times-circle"></i></a>`);
        $delBtnDiv.append($delBtn);
        $checkrow.append($delBtnDiv);


        $delBtn.click((e) => {
            e.preventDefault();
            this._remove(product.id_product);
        });
        $checkrow.appendTo($('#contForProductItem'));
    }

    _renderSum(){
        $('.livecart span').text(`${this.countGoods}`);
        $('.sub_total').text(`Sub total $${this.amount}`);
        $('.grand_total').html(`GRAND TOTAL <span> $${this.amount}</span>`);
    }

    addProduct(element){
        let productId = +$(element).data('id');
        let find = this.basketItems.find(product => product.id_product === productId);
        if (find){
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find)
        } else {
            let product = {
                id_product: productId,
                product_name: $(element).data('name'),
                price: +$(element).data('price'),
                quantity: 1,
                imgSrc: $(element).data('img'),
                linkSrc: $(element).data('src')
            };
            this.basketItems.push(product);
            this.countGoods += product.quantity;
            this.amount += product.price;
            this._renderItem(product);
        }
        localStorage.setItem('myitems', JSON.stringify(this.basketItems));
        localStorage.setItem('countGoods', JSON.stringify(this.countGoods));
        localStorage.setItem('amount', JSON.stringify(this.amount));
        this._renderSum();
    }

    _updateCart(product){
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.product-quantity').text(product.quantity);
        $container.find('.product-price').text(`${product.quantity*product.price}`);
    }

    _remove(productId){
        let find = this.basketItems.find(product => product.id_product === productId);
        if (find.quantity > 1){
            find.quantity--;
            this._updateCart(find);
        } else {
            let $container = $(`div[data-product="${productId}"]`);
            this.basketItems.splice(this.basketItems.indexOf(find), 1);
            $container.remove();
        }
        this.countGoods--;
        this.amount -= find.price;
        localStorage.setItem('myitems', JSON.stringify(this.basketItems));
        localStorage.setItem('countGoods', JSON.stringify(this.countGoods));
        localStorage.setItem('amount', JSON.stringify(this.amount));
        this._renderSum();
    }
}