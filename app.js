async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

function displayProducts(products) {
    const container = document.querySelector('#productsContainer');
    
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description.substring(0, 100)}...</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="card-price">$${product.price}</span>
                            <span class="product-rating">★ ${product.rating}</span>
                        </div>
                        <button onclick="showDetails(${product.id})" class="btn btn-primary mt-3">Details</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

function showDetails(productId) {
    window.location.href = `details.html?id=${productId}`;
}

window.addEventListener('load', async () => {
    const products = await getProducts();
    displayProducts(products);
});