const products = [
    {
        name: "Floral Summer Dress",
        oldPrice: "₹3999",
        newPrice: "₹2499",
        discount: "38% OFF",
        img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        desc: "A lightweight floral dress designed for summer comfort and elegance."
    },
    {
        name: "Casual White Top",
        oldPrice: "₹1999",
        newPrice: "₹1299",
        discount: "35% OFF",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        desc: "Minimal and elegant white top suitable for daily casual wear."
    },
    {
        name: "Denim Jacket",
        oldPrice: "₹4999",
        newPrice: "₹3499",
        discount: "30% OFF",
        img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
        desc: "Classic denim jacket that complements every modern outfit."
    },
    {
        name: "Elegant Saree",
        oldPrice: "₹6999",
        newPrice: "₹4999",
        discount: "28% OFF",
        img: "https://images.unsplash.com/photo-1542060748-10c28b62716b",
        desc: "Premium saree with refined craftsmanship and luxurious feel."
    },
    {
        name: "Office Blazer",
        oldPrice: "₹5999",
        newPrice: "₹4199",
        discount: "30% OFF",
        img: "https://images.unsplash.com/photo-1524250502437-3f1f0d8f5f8c",
        desc: "Tailored blazer perfect for office and formal occasions."
    },
    {
        name: "Long Maxi Dress",
        oldPrice: "₹4599",
        newPrice: "₹3199",
        discount: "31% OFF",
        img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
        desc: "Flowy maxi dress designed for elegance and comfort."
    },
    {
        name: "Stylish Kurti",
        oldPrice: "₹2999",
        newPrice: "₹1999",
        discount: "33% OFF",
        img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
        desc: "Traditional kurti with modern design and premium fabric."
    },
    {
        name: "Party Wear Gown",
        oldPrice: "₹8999",
        newPrice: "₹6499",
        discount: "28% OFF",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        desc: "Luxury party gown designed to stand out at every occasion."
    }
];

const productGrid = document.getElementById("productGrid");

// Render products
products.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="product-price">
            <span class="old">${product.oldPrice}</span>
            <span class="new">${product.newPrice}</span>
            <span class="discount">${product.discount}</span>
        </div>
        <button onclick="openModal(${index})">View Details</button>
    `;

    productGrid.appendChild(card);
});

// Modal functions
function openModal(index) {
    const modal = document.getElementById("productModal");

    document.getElementById("modalImg").src = products[index].img;
    document.getElementById("modalTitle").innerText = products[index].name;
    document.getElementById("modalOld").innerText = products[index].oldPrice;
    document.getElementById("modalNew").innerText = products[index].newPrice;
    document.getElementById("modalDiscount").innerText = products[index].discount;
    document.getElementById("modalDesc").innerText = products[index].desc;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
