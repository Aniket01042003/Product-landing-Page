// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// DOM Elements
const titleEl = document.getElementById('product-title');
const descEl = document.getElementById('product-description');
const priceEl = document.getElementById('product-price');
const ratingEl = document.getElementById('product-rating');
const imageEl = document.getElementById('product-image');

// Create containers dynamically
const container = document.querySelector('.product-detail-container');
const infoBox = document.createElement('div');
infoBox.className = 'product-extra-details';
container.appendChild(infoBox);

async function fetchProductDetails() {
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const product = await res.json();

    titleEl.textContent = product.title;
    descEl.textContent = product.description;
    priceEl.innerHTML = `<strong>Price:</strong> $${product.price}`;
    ratingEl.innerHTML = `<strong>Rating:</strong> ${product.rating} ⭐`;
    imageEl.src = product.images[0];

    infoBox.innerHTML = `
    <section class="product-meta">
      <h2>Product Specifications</h2>
      <ul class="meta-list">
        <li><span>📦 Category:</span> ${product.category}</li>
        <li><span>🏷️ Brand:</span> ${product.brand}</li>
        <li><span>🔖 SKU:</span> ${product.sku}</li>
        <li><span>📦 Stock:</span> ${product.stock}</li>
        <li><span>⚖️ Weight:</span> ${product.weight} g</li>
        <li><span>📐 Dimensions:</span> ${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm</li>
        <li><span>💸 Discount:</span> ${product.discountPercentage}%</li>
        <li><span>🛡️ Warranty:</span> ${product.warrantyInformation}</li>
        <li><span>🚚 Shipping:</span> ${product.shippingInformation}</li>
        <li><span>🔁 Return Policy:</span> ${product.returnPolicy}</li>
        <li><span>📦 Min Order:</span> ${product.minimumOrderQuantity}</li>
        <li><span>✅ Availability:</span> ${product.availabilityStatus}</li>
      </ul>
      <div class="qr-code">
        <h3>Scan for More Info</h3>
        <img src="${product.meta.qrCode}" alt="QR Code" width="100" />
      </div>
    </section>
  
    <section class="product-reviews">
      <h2>Customer Reviews</h2>
      ${product.reviews.map(review => `
        <div class="review-card">
          <div class="review-header">
            <strong>${review.reviewerName}</strong>
            <span class="rating">${'⭐'.repeat(review.rating)}</span>
          </div>
          <p class="review-comment">"${review.comment}"</p>
        </div>
      `).join('')}
    </section>
  `;  

  } catch (err) {
    console.error("Error loading product details:", err);
    titleEl.textContent = "Failed to load product details.";
  }
}

fetchProductDetails();
