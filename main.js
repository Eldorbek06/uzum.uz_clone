new Swiper('.main_image-slider',{
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

let sale = document.createElement('div')
let sale_title = document.createElement('div')
let sale_grid = document.createElement('div')
let sale_grid_box = document.createElement('div')
let sale_grid_box_image = document.createElement('div')
let sale_grid_box_image_img = document.createElement('img')
let sale_grid_box_image_span = document.createElement('span')
let sale_grid_box_image_sale = document.createElement('div')
let product_info = document.createElement('div')
let product_info_top = document.createElement('div')
let product_name = document.createElement('div')
let product_credit = document.createElement('div')
let product_price = document.createElement('div')
let product_price_left = document.createElement('div')
let product_price_left_price = document.createElement('div')
let product_price_left_discount_price = document.createElement('div')
let product_price_right = document.createElement('div')
let symbol_favorite = document.createElement('span')
let symbol_shopping_bag = document.createElement('span')
let symbol_arrow_right = document.createElement('span')
let container = document.createElement('div')
let body = document.body


container.classList.add('container')
symbol_favorite.classList.add('material-symbols-outlined')
symbol_shopping_bag.classList.add('material-symbols-outlined')
symbol_arrow_right.classList.add('material-symbols-outlined')
sale.classList.add('sale')
sale_title.classList.add('title')
sale_grid.classList.add('sale-grid')
sale_grid_box.classList.add('sale-grid-box')
sale_grid_box_image.classList.add('image')
sale_grid_box_image_sale.classList.add('sale')
product_info.classList.add('product-info')
product_info_top.classList.add('product-info-top')
product_name.classList.add('product-name')
product_name.classList.add('product-name')
product_price.classList.add('product-price')
product_price_left.classList.add('product-price-left')
product_price_left_price.classList.add('price')
product_price_left_discount_price.classList.add('discount-price')
product_price_right.classList.add('product-price-right')
product_price_right.classList.add('product-price-right')

sale_grid_box_image_img.src = "https://images.uzum.uz/cfupcpfhgiov1qid71bg/t_product_540_high.jpg#1677582193852"
sale_grid_box_image_img.alt = "image"

symbol_favorite.innerHTML = 'favorite'
symbol_shopping_bag.innerHTML = 'shopping_bag'
sale_title.innerHTML = "Распродажа"
symbol_arrow_right.innerHTML = 'keyboard_arrow_right'
sale_grid_box_image_sale.innerHTML = 'Распродажа'
product_name.innerHTML = 'Рис Лазер Chemption высший сорт 900 г'
product_credit.innerHTML = '2 520 сум/мес'
product_price_left_price.innerHTML = '24 000 сум'
product_price_left_discount_price.innerHTML = '21 000 сум'


sale_grid.append(sale_grid_box)
sale_grid_box.append(image)
sale_grid_box_image.append(symbol_favorite)
sale_grid_box_image.append(sale_grid_box_image_sale)
sale_grid_box.append(product_info)
product_info.append(product_info_top)
product_info_top.append(product_name)
product_info_top.append(product-credit)
product_info.append(product_price)
product_price.append(product_price_left)
product_price_left.append(product_price_left_price)
product_price_left.append(product_price_left_discount_price)
product_price.append(product_price_right)
product_price_right.append(symbol_shopping_bag)
sale.append(sale_grid)
sale_title.append(symbol_arrow_right)
sale.append(sale_title)
container.append(sale)
body.append(container)