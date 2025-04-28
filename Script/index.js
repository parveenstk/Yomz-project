// Hamburger Menu Script
const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

// Links in the variable
const links = {
    // Header
    "home-header": "https://suretekinfosoft.com/demo106/yomz-storefront-home/",
    "about-header": "https://suretekinfosoft.com/demo106/yomz/pages/yomz-story/",
    "oggummies-header": "https://suretekinfosoft.com/demo106/products/yomz-OG-gummies/",
    "sours-header": "https://suretekinfosoft.com/demo106/products/yomz-sours/",

    // try yomz buttons
    "ogGummiesProduct": "https://suretekinfosoft.com/demo106/products/yomz-OG-gummies/",
    "soursProduct": "https://suretekinfosoft.com/demo106/products/yomz-sours/",

    // logo
    "yomzLogo": "https://suretekinfosoft.com/demo106/yomz-storefront-home/",
    "yomzLogo2": "https://suretekinfosoft.com/demo106/yomz-storefront-home/",
};

for (const [id, url] of Object.entries(links)) {
    const link = document.getElementById(id);
    if (link) {
        link.href = url;
    }
} 

// when key '/' press it will take email input 
