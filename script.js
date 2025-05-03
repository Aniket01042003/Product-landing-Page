// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fetch products from API
async function loadProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const datas = await res.json();
    const data = datas.products;
    console.log(data);
    const productGrid = document.getElementById("productGrid");

    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description.substring(0, 60)}...</p>
      <div class="price">$${product.price}</div>
      <a href="/Product/Product.html?id=${product.id}" class="btn">Buy</a>
    `;
      productGrid.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to fetch products", err);
  }
}

// Load on page load
window.addEventListener("DOMContentLoaded", loadProducts);
