// --- Variables ---
let ItemList = [];
let Itemcart = [];
let count = 0;

// Get HTML elements
const productList = document.getElementById('product-list');
const CartList = document.getElementById('CartList');
const addProductButton = document.getElementById('add-product');
const InputItem = document.getElementById('Item');
const ItemPrice = document.getElementById('product-price');
const ItemAmount = document.getElementById('product-quantitiy');
const errormsg = document.getElementById('error');
const TotalPrice =document.getElementById(`total-price`)


// --- Render the main product list ---
function RenderList(itemsToRender = ItemList) {
    productList.innerHTML = "";

    itemsToRender.forEach((p) => {
        const newProduct = document.createElement('li');
        newProduct.dataset.id = p.id;
        newProduct.innerHTML = `
            <p>Name: ${p.name}</p>
            <p>Price: $${p.price}</p>
            <p>Quantity: ${p.quantity}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productList.appendChild(newProduct);
    });
}


// --- Render the shopping cart list ---
function RenderCart(CartitemsToRender = Itemcart) {
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
}


// --- Event delegation for the product list (Add to cart) ---
productList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    const productId = parseInt(li.dataset.id);

    if (event.target.classList.contains('add-to-cart')) {
        const index = ItemList.findIndex(item => item.id === productId);
        if (index !== -1) {
            let item = ItemList.splice(index, 1)[0];
            Itemcart.push(item);
            console.log(` Added product ${productId} to cart.`);
            RenderList(ItemList);
            RenderCart(Itemcart);
        }
    }
});


// --- Event delegation for the cart list (Remove from cart) ---
CartList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    const productId = parseInt(li.dataset.id);

    if (event.target.classList.contains('remove-from-cart')) {
        const index = Itemcart.findIndex(item => item.id === productId);
        if (index !== -1) {
            let item = Itemcart.splice(index, 1)[0];
            ItemList.push(item);
            console.log(` Removed product ${productId} from cart and added back to list.`);
            RenderCart(Itemcart);
            RenderList(ItemList);
        }
    }
});


// --- Add new product ---
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
    count++;

    const newItem = {
        id: count,
        name: InputText,
        price: PriceText,
        quantity: QuantityText
    };

    ItemList.push(newItem);

    // Clear input fields
    InputItem.value = "";
    ItemPrice.value = "";
    ItemAmount.value = "";

    RenderList(ItemList);
});