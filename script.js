const products = [
    {
        name: "Casual Wear - Blue Top",
        price: "₹300",
        color: "Dark-Blue",
        img: "img/1.jpg",
        desc: "This elegant navy blue kurti features a subtle white leaf pattern and delicate button detailing down the front. Made for comfort and style, it’s perfect for casual outings or festive occasions."
    },
    {
        name: "Casual Wear - Yellow Top",
        price: "₹300",
        color: "Yellow",
        img: "img/2.jpg",
        desc: "Mustard yellow cotton kurti featuring a subtle white leaf print and a classic round neckline. Designed with a front button placket, offering a comfortable fit perfect for everyday wear."
    },
    {
        name: "Casual Wear - Light Blue Top",
        price: "₹300",
        color: "Light-Blue",
        img: "img/3.jpg",
        desc: "Teal blue cotton kurti adorned with a delicate white leaf print and a classic round neckline. Features a front button placket and breathable fabric, ideal for comfortable daily wear."
    },
    {
        name: "Casual Wear - Black Top",
        price: "₹350",
        color: "Black",
        img: "img/4.jpg",
        desc: "Charcoal grey kurti featuring an elegant ikat-inspired print in white and mustard tones. Designed with a round neckline and wooden button placket, perfect for stylish everyday wear."
    },
    {
        name: "3-Pcs Set",
        price: "₹1600",
        color: "Pink",
        img: "img/5.jpg",
        desc: "Elegant dusty-rose straight kurta set featuring intricate white floral embroidery along the neckline and front panel. Paired with matching pants and a sheer embroidered dupatta, ideal for festive and special occasions."
    },
    {
        name: "3-Pcs Set",
        price: "₹1800",
        color: "Multicolor",
        img: "img/6.jpg",
        desc: "Royal blue straight kurta adorned with subtle embellishments, paired with matching bottoms for a graceful look. Comes with a contrasting printed dupatta featuring peacock and floral motifs, perfect for festive and ethnic occasions."
    },
    {
        name: "3-Pcs Set",
        price: "₹2000",
        color: "Multicolor",
        img: "img/7.jpg",
        desc: "Off-white flared kurta featuring intricate thread embroidery with elegant peacock motifs and subtle sequin detailing. Designed with a round neckline and elbow-length sleeves, ideal for festive and traditional occasions."
    },
    {
        name: "Casual Wear",
        price: "₹300",
        color: "White",
        img: "img/8.jpg",
        desc: "Grey and white printed kurti featuring a modern ikat-inspired pattern with a contrasting embroidered front panel. Designed with a round neckline and soft fabric, perfect for comfortable everyday and office wear."
    },
    
];


const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

/* ===== RENDER PRODUCTS ===== */
function renderProducts(list) {
    productGrid.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3><br>

            <div class="product-info">
                <p class="price">Price: <strong>${product.price}</strong></p><br>
                <p class="color">Color: ${product.color}</p>
                <br>
            </div>

            <button>View Details</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            openModal(product);
        });

        productGrid.appendChild(card);
    });
}

/* ===== INITIAL LOAD ===== */
renderProducts(products);

/* ===== SEARCH FUNCTIONALITY ===== */
searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    renderProducts(filtered);
});

/* ===== MODAL FUNCTIONS ===== */
function openModal(product) {
    const modal = document.getElementById("productModal");

    document.getElementById("modalImg").src = product.img;
    document.getElementById("modalTitle").innerText = product.name;

    document.getElementById("modalPrice").innerText = `Price: ${product.price}`;
    document.getElementById("modalColor").innerText = `Color: ${product.color}`;

    document.getElementById("modalDesc").innerText = product.desc;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

/* Close modal when clicking outside */
window.onclick = function (e) {
    const modal = document.getElementById("productModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};


/* ===== CAROUSEL LOGIC ===== */
const carouselTrack = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const carouselProducts = products.slice(0, 5); // first 5 products
let currentIndex = 0;

/* Render carousel */
carouselProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "carousel-card";

    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
    `;

    card.addEventListener("click", () => openModal(product));
    carouselTrack.appendChild(card);
});

function updateCarousel() {
    const width = carouselTrack.children[0].offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % carouselProducts.length;
    updateCarousel();
};

prevBtn.onclick = () => {
    currentIndex =
        (currentIndex - 1 + carouselProducts.length) % carouselProducts.length;
    updateCarousel();
};

/* Auto slide every 5 seconds */
setInterval(() => {
    nextBtn.click();
}, 3000);

