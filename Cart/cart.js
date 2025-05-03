document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [
        {
            title: "Wireless Headphones",
            price: 49.99,
            image: "https://cdn.dummyjson.com/product-images/electronics/airpods/1.webp"
        },
        {
            title: "Modern Armchair",
            price: 89.99,
            image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp"
        }
    ];

    const cartContainer = document.getElementById("cartItems");
    const totalContainer = document.getElementById("cartTotal");

    let total = 0;

    cartItems.forEach(item => {
        total += item.price;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" />
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
});
