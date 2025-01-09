async function getProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayProductDetails(product) {
    const container = document.querySelector('#productDetails');
    
    const detailsHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.thumbnail}" class="img-fluid" alt="${product.title}">
            </div>
            <div class="col-md-6">
                <h2>${product.title}</h2>
                <p class="lead">${product.description}</p>
                <p class="h3">$${product.price}</p>
                <p>Rating: ${product.rating} ★</p>
                <p>Category: ${product.category}</p>
                <p>Brand: ${product.brand}</p>
                <p>Stock: ${product.stock}</p>
            </div>
        </div>
    `;
    
    container.innerHTML = detailsHTML;
}

window.addEventListener('load', getProductDetails);