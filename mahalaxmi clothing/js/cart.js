document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <p>${item.name}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;

            total += item.price;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotal.innerText = total.toFixed(2);
    }

    cartItemsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            let index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    document.getElementById("checkout-btn").addEventListener("click", function () {
        alert("Proceeding to checkout...");
    });

    updateCartDisplay();
});
