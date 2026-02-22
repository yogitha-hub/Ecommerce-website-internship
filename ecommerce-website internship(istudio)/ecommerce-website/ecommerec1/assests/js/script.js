// Scroll to Top Button
const btn = document.getElementById("scrollTopBtn");
if (btn) {
    window.onscroll = () => {
        btn.style.display = window.scrollY > 200 ? "block" : "none";
    };
    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

// Cart Functionality (simple demo)
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " added to cart!");
    updateCart();
}

function updateCart() {
    const cartTable = document.getElementById("cartTable");
    if (!cartTable) return;
    cartTable.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartTable.innerHTML += `<tr><td>${item.name}</td><td>$${item.price}</td></tr>`;
    });
    document.getElementById("cartTotal").innerText = "Total: $" + total;
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
}

// Search Functionality
const products = ["Laptop", "Shoes", "Book", "Watch", "Headphones"];
const searchBox = document.getElementById("searchBox");
if (searchBox) {
    searchBox.addEventListener("input", e => {
        const query = e.target.value.toLowerCase();
        const results = products.filter(p => p.toLowerCase().includes(query));
        document.getElementById("results").innerHTML = results.length ?
            results.join("<br>") :
            "No products found";
    });
}