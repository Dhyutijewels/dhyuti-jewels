/*
  DHYUTI JEWELS — EASY EDIT GUIDE
  1) Change the WhatsApp number below to your business number, including country code, without + or spaces.
  2) Edit the PRODUCTS list to update names, category, price, descriptions, tags and image URLs.
  3) Replace the sample image URLs with your own product photography.
  4) This is a static showcase site. It does not take payment or manage inventory.
*/
const WHATSAPP_NUMBER = "918368933060"; // REPLACE with your real business WhatsApp number

const PRODUCTS = [
  {
    id: "ear-01",
    name: "The Sol Earrings",
    category: "earrings",
    categoryLabel: "Earrings",
    price: "₹1,490",
    description: "Sculptural golden tones for an effortless statement.",
    tag: "Bestseller",
    image: "assets/earrings-pink.jpg"
  },
  {
    id: "neck-01",
    name: "Luna Pendant",
    category: "necklaces",
    categoryLabel: "Necklaces",
    price: "₹1,890",
    description: "A delicate everyday layer with a little glow.",
    tag: "Everyday icon",
    image: "assets/necklace-pendant.jpg"
  },
  {
    id: "brace-01",
    name: "The Muse Cuff",
    category: "bracelets",
    categoryLabel: "Bracelets",
    price: "₹1,290",
    description: "Clean lines, soft shine, endless styling possibilities.",
    tag: "Just in",
    image: "assets/earrings-green.jpg"
  },
  {
    id: "ring-01",
    name: "Aura Statement Ring",
    category: "rings",
    categoryLabel: "Rings",
    price: "₹990",
    description: "A modern finishing touch that feels uniquely yours.",
    tag: "Customer favourite",
    image: "assets/earrings-colourful.jpg"
  },
  {
    id: "ear-02",
    name: "Petal Drops",
    category: "earrings",
    categoryLabel: "Earrings",
    price: "₹1,690",
    description: "Soft, sculptural details for dinners and day plans.",
    tag: "",
    image: "assets/earrings-display.jpg"
  },
  {
    id: "neck-02",
    name: "Solstice Layers",
    category: "necklaces",
    categoryLabel: "Necklaces",
    price: "₹2,290",
    description: "An easy layered look, ready to make your own.",
    tag: "Layering piece",
    image: "assets/necklace-heart.jpg"
  },
  {
    id: "brace-02",
    name: "Golden Hour Chain",
    category: "bracelets",
    categoryLabel: "Bracelets",
    price: "₹1,190",
    description: "A subtle glimmer for your everyday rotation.",
    tag: "",
    image: "assets/jewellery-box-pink.jpg"
  },
  {
    id: "ring-02",
    name: "The Keepsake Band",
    category: "rings",
    categoryLabel: "Rings",
    price: "₹1,390",
    description: "A simple reminder to celebrate the little things.",
    tag: "",
    image: "assets/jewellery-box-grey.jpg"
  }
];

const productGrid = document.querySelector("#product-grid");
const filterButtons = document.querySelectorAll(".filter");

function whatsappLink(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function renderProducts(category = "all") {
  const filtered = category === "all" ? PRODUCTS : PRODUCTS.filter(product => product.category === category);
  if (!filtered.length) {
    productGrid.innerHTML = '<p class="empty-state">New pieces are coming soon. Contact us to ask about the collection.</p>';
    return;
  }

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy">
        ${product.tag ? `<span class="product-tag">${escapeHTML(product.tag)}</span>` : ""}
      </div>
      <div class="product-info">
        <p class="product-category">${escapeHTML(product.categoryLabel)}</p>
        <h3 class="product-name">${escapeHTML(product.name)}</h3>
        <p class="product-description">${escapeHTML(product.description)}</p>
        <div class="product-bottom">
          <span class="product-price">${escapeHTML(product.price)}</span>
          <button class="enquire-button" type="button" data-product="${escapeHTML(product.id)}">Enquire ↗</button>
        </div>
      </div>
    </article>
  `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    renderProducts(button.dataset.filter);
  });
});

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  const product = PRODUCTS.find(item => item.id === button.dataset.product);
  if (!product) return;
  const message = `Hi Dhyuti Jewels! I'm interested in ${product.name} (${product.price}). Could you please share more details and availability?`;
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
});

document.querySelector("#contact-whatsapp").href = whatsappLink(
  "Hi Dhyuti Jewels! I'd like to know more about your collection."
);
document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

renderProducts();
