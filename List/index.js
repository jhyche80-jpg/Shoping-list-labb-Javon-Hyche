// --- Variables ---
let ItemList = [];
let ItemCart = [];
let count = 0;

// Get HTML elements
const productList = document.getElementById('product-list');
const CartList = document.getElementById('CartList');
const addProductButton = document.getElementById('add-product');
const InputItem = document.getElementById('item');
const ItemPrice = document.getElementById('product-price');
const ItemAmount = document.getElementById('product-quantity');
const errormsg = document.getElementById('error-msg');
const TotalPrice =document.getElementById(`total-price`)
const DarkMode = doccument.getElementById("darkModeimg")


// --- Render the main product list ---
function RenderList(itemsToRender = ItemList) {
    productList.innerHTML = "";

    itemsToRender.forEach((p) => {
        const newProduct = document.createElement('li');
        newProduct.dataset.id = p.id;
        newProduct.innerHTML = `
            <p><strong>Name: ${p.name}</strong></p>
            <p><strong>Price: $${p.price}</strong></p>
            <p><strong>Quantity: ${p.quantity}<strong> </p>
            <button class="add-to-cart">Add to Cart</button> 
            <button class="remove-from-list">Remove from List</button>
        `;
        productList.appendChild(newProduct);
    });
}

// --- Render the shopping cart list ---
function RenderCart(CartitemsToRender = ItemCart) {
    CartList.innerHTML = "";

    CartitemsToRender.forEach((p) => {
        const newItem = document.createElement('li');
        newItem.dataset.id = p.id;
        newItem.innerHTML = `
            <p>Name: ${p.name}</p>
            <p>Price: $${p.price}</p>
            <p>Quantity: ${p.quantity}</p>
            <button class="remove-from-cart">Remove from Cart</button>
           
        `;
        CartList.appendChild(newItem);
    });
    UpdateTotal();
}


//  Calculate and update total price 
function UpdateTotal() {
    const total = ItemCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    TotalPrice.innerText = total.toFixed(2);
}

// Event delegation for the product list (Add to cart) 
productList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    const productId = parseInt(li.dataset.id);

    if (event.target.classList.contains('add-to-cart')) {
        const index = ItemList.findIndex(item => item.id === productId);
        if (index !== -1) {
            let item = ItemList.splice(index, 1)[0];
            ItemCart.push(item);
            console.log(` Added product ${productId} to cart.`);
            RenderList(ItemList);
            RenderCart(ItemCart);
        }
    }
    if (event.target.classList.contains('remove-from-list')) {
        const index = ItemList.findIndex(item => item.id === productId);
        if (index !== -1) {
            let item = ItemList.splice(index, 1)[0];
            RenderList(ItemList);
        }
    }
});


// --- Event delegation for the cart list (Remove from cart) ---
CartList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    const productId = parseInt(li.dataset.id);

    if (event.target.classList.contains('remove-from-cart')) {
        const index = ItemCart.findIndex(item => item.id === productId);
        if (index !== -1) {
            let item = ItemCart.splice(index, 1)[0];
            ItemList.push(item);
            console.log(` Removed product ${productId} from cart and added back to list.`);
            RenderCart(ItemCart);
            RenderList(ItemList);
        }
    }
});


//  Add new product 
addProductButton.addEventListener('click', () => {
    const InputText = InputItem.value.trim();
    const PriceText = ItemPrice.value.trim();
    const QuantityText = ItemAmount.value.trim();

    if (InputText === "" || PriceText === "" || QuantityText === "") {
        errormsg.innerText = "Please fill out all fields";
        errormsg.classList.add("error");
        return;
    }

    errormsg.innerText = "";
    errormsg.classList.remove("error")
    count++;

    const newItem = {
        id: count,
        name: InputText,
        price: parseFloat(PriceText),
        quantity: parseFloat(QuantityText)
    };

    ItemList.push(newItem);

    // Clear input fields
    InputItem.value = "";
    ItemPrice.value = "";
    ItemAmount.value = "";

    RenderList(ItemList);
});
DarkMode.addEventListener(`click`, () =>{
    
})