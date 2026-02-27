let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;

    displayCart();
}

function displayCart() {
    let list = document.getElementById("cart-list");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = '${item.name} - Ksh${item.price}';
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}