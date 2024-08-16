const fruitss = [
    { name: 'Banana', price: 39 , discount: 55, image:"imgs/Banana.jpg"},
    { name: 'Orange', price: 55 , discount: 30, image: "imgs/orange.jpg"},
    { name: 'Pineapple', price: 20 , discount: 25, image: "imgs/ananas.jpg" },
    { name: 'Apple', price: 30 , discount: 20, image: "imgs/apple.jpg"},
]
const favouriteFriut = document.getElementById('favourite-shop');

fruitss.forEach(fruit => {
    const cardInfo = document.createElement('div');
    cardInfo.className = 'cardInfo';
    
    cardInfo.innerHTML = `
        <img src="${fruit.image}" alt="${fruit.name}">
        <h3>${fruit.name}</h3>
        <p class="cardInfo-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <p class="price">${fruit.price}$ <span class="discount">${fruit.discount}$</span></p>
        <div class="quantity">
        <div class="quantity-box">
        <i class="fa">&#xf067</i>
        <p>1</p>
        <i class="fa">&#xf068</i>
        </div>
        <button class="btn">BUY NOW</button>
        </div>  
        <button class="delete-button">Delete</button>

    `; 
    favouriteFriut .appendChild(cardInfo);

    cardInfo.querySelector('.delete-button').addEventListener('click', function() {
        favouriteFriut.removeChild(cardInfo);
    });
});
const fruits = [
    { name: 'Banana', price: 39 , discount: 55, image:"imgs/big banana.jpg"},
    { name: 'Orange', price: 55 , discount: 30, image: "imgs/big orange.jpg"},
    { name: 'Pineapple', price: 20 , discount: 25, image: "imgs/big ananas.jpg" },
    { name: 'Apple', price: 30 , discount: 20, image: "imgs/bib apple.jpg"},
    { name: 'Cherry', price: 39 , discount: 55, image: "imgs/creaze.jpg"},
    { name: 'Melon', price: 20 , discount: 30, image: "imgs/melon.jpg"},
    { name: 'Strawberries', price: 30 , discount: 25, image: "imgs/straberry.jpg" },
    { name: 'Avocado', price: 25 , discount: 30, image: "imgs/avocado.jpg"},
]
const container = document.getElementById('fruit-shop');

fruits.forEach(fruit => {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${fruit.image}" alt="${fruit.name}">
        <h3>${fruit.name}</h3>
        <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <p class="price">${fruit.price}$ <span class="discount">${fruit.discount}$</span></p>
        <div class="quantity">
        <div class="quantity-box">
        <i class="fa">&#xf067</i>
        <p>1</p>
        <i class="fa">&#xf068</i>
        </div>
        <button class="buy-now">BUY NOW</button>
        </div> 
        <button class="delete-button">Delete</button>

    `; 
    container.appendChild(card);

    card.querySelector('.delete-button').addEventListener('click', function() {
        container.removeChild(card);
    });
});
document.getElementById('addCardForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fruitName = document.getElementById('fruitName').value;
    const description = document.getElementById('description').value;
    const originalPrice = document.getElementById('originalPrice').value;
    const discountedPrice = document.getElementById('discountedPrice').value;
    const imageUrl = document.getElementById('imageUrl').value;

    const cardContainer = document.querySelector('.cards');
    const newCard = document.createElement('div');
    newCard.classList.add('addCurd');

    newCard.innerHTML = `
        <img src="${imageUrl}" alt="${fruitName}">
        <h3 class="fruit-name">${fruitName}</h3>
        <p class="description">${description}</p>
        <p class="price">
            <span class="original-price">${originalPrice}$</span>
            <span class="discounted-price">${discountedPrice}$</span>
        <p>
        <div class="quantity">
        <div class="quantity-box">
        <i class="fa">&#xf067</i>
        <p>1</p>
        <i class="fa">&#xf068</i>
        </div>
        <button class="buy-now">BUY NOW</button>
        </div> 
        <div class="select-button"> 
        <button class="delete-button">Delete</button>
        <button class="edit-button">Edit</button>
        </div>
    `;

    cardContainer.appendChild(newCard);

    document.getElementById('addCardForm').reset();

    newCard.querySelector('.delete-button').addEventListener('click', function() {
        cardContainer.removeChild(newCard);
    });

    newCard.querySelector('.edit-button').addEventListener('click', function() {
        const editCardForm = document.getElementById('editCardForm');
        document.getElementById('editCardIndex').value = Array.prototype.indexOf.call(cardContainer.children, newCard);
        document.getElementById('editFruitName').value = fruitName;
        document.getElementById('editDescription').value = description;
        document.getElementById('editOriginalPrice').value = originalPrice;
        document.getElementById('editDiscountedPrice').value = discountedPrice;
        document.getElementById('editImageUrl').value = imageUrl;
        editCardForm.style.display = 'block';

    });
});
document.getElementById('editCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardIndex = document.getElementById('editCardIndex').value;
    const fruitName = document.getElementById('editFruitName').value;
    const description = document.getElementById('editDescription').value;
    const originalPrice = document.getElementById('editOriginalPrice').value;
    const discountedPrice = document.getElementById('editDiscountedPrice').value;
    const imageUrl = document.getElementById('editImageUrl').value;

    const cardContainer = document.querySelector('.cards');
    const cardToEdit = cardContainer.children[cardIndex];

    cardToEdit.querySelector('img').src = imageUrl;
    cardToEdit.querySelector('.fruit-name').textContent = fruitName;
    cardToEdit.querySelector('.description').textContent = description;
    cardToEdit.querySelector('.original-price').textContent = `${originalPrice}$`;
    cardToEdit.querySelector('.discounted-price').textContent = `${discountedPrice}$`;

    document.getElementById('editCardForm').style.display = 'none';
});
