
// assignd an array Each item will be an object: { id: Number, name: String }
let ItemList = [];
// assigns name to the Ul for later use 
const productList = document.getElementById('product-list');
// Asigns name to the add product button
const addProductButton = document.getElementById('add-product');
// asigns name to the input button 
const InputItem = document.getElementById("Item");
//Asigns name to the error message 
const errormsg = document.getElementById("error");
// Defines count for later
let count = 0;
// ----
// function: RenderList
// re-renders (refreshes) the list shown on the page.
// it takes an array of items (defaulting to ItemList itself).
// ----
function RenderList(itemsToRender = ItemList) {
    // clear list before re-rendering
    productList.innerHTML = "";
    // uses forEach to create the <li> for each item Object 
    itemsToRender.forEach((p) => {

        //creates a new constant called New prooduct that creates a new list element 
        const newProduct = document.createElement('li');
        //sets the ID for the element created above 
        // dataset.id will be a string 
        newProduct.dataset.id = p.id;
        //fil the inner of the created <li> with something inside the HTML code 
        // add an add and remove button to the item
        newProduct.innerHTML = `
      ${p.name} 
      <button class="add-to-cart">Add to Cart</button>
      <button class="remove-from-cart">Remove Item</button>
      
    `;
    // adds list item 
     productList.appendChild(newProduct);

     //hover effect for the remove button 
    const hoverImage = document.getElementById("hover-img");
        const removeBtn = newProduct.querySelector(".remove-from-cart");
        const hoverImage2 = document.getElementById("hover2")
        const addBtn = newProduct.querySelector(".add-to-cart")
// will show the image when hovering 
        removeBtn.addEventListener("mouseenter", () => {
            hoverImage.style.display = "block";
            hoverImage.style.position = "absolute";

            //positioning near the button 
             const rect = removeBtn.getBoundingClientRect();
            hoverImage.style.top = rect.top + window.scrollY + "px";
            hoverImage.style.left = rect.right + 10 + window.scrollX + "px";
        });
        removeBtn.addEventListener("mouseleave", () => {
            hoverImage.style.display = "none";
        });


         addBtn.addEventListener("mouseenter", () => {
            hoverImage2.style.display = "block";
            hoverImage2.style.position = "absolute";

            //positioning near the button 
             const rect = removeBtn.getBoundingClientRect();
            hoverImage2.style.top = rect.top + window.scrollY + "px";
            hoverImage2.style.left = rect.right + 10 + window.scrollX + "px";
        });
        addBtn.addEventListener("mouseleave", () => {
            hoverImage2.style.display = "none";
        });
    });
}

// ---Event delegation for the product list----
// A listener that listen for clicks inside of it including future ones 
productList.addEventListener('click', (event) => {
    // find the nearest <li> of the clicked element 
    const li = event.target.closest('li');
    // reads the data ID  
    const productId = parseInt(li.dataset.id);
    // if the clicked elements class has `add-to-cart `
    if (event.target.classList.contains('add-to-cart')) {
        // the console log will say that the item is added to cart 
        console.log(`Added product ${productId} to cart.`);

    }
    // or else if the button has the class remove-form-cart  class:
    else if (event.target.classList.contains('remove-from-cart')) {
        // Find the matching object in the array
        const index = ItemList.findIndex(item => item.id === parseInt(productId));

        //if found , remve the item from the array and console log 
        if (index !== -1) {
            ItemList.splice(index, 1); // removes the item from the array
            console.log(`Removed product ${productId} from cart and list.`);
            // Rerender the ItemList
            RenderList(ItemList);
        }


    }
});

// Dynamically add a new product

// event Listener for the add product button 
addProductButton.addEventListener('click', () => {
    //get the text typed by the user and take off the extra spaces as well 
    const InputText = InputItem.value.trim();
    // tell me if the product entered is blank with an error message 
    if (InputText === "") {

        errormsg.innerText = " Please enter a product!";
        errormsg.classList.toggle("error")
        return;
    }
    // clears the error message after resolved 
    errormsg.innerText = "";
    // increments count and creates the new product object 
    count++
    const newITM = { id: count, name: InputText }
    // pushes the item entered to the arrau 
    ItemList.push(newITM);
    // clears the search list 
    InputItem.value = "";
    // Renders the updated list so the new item can appear 
    RenderList(ItemList);
});