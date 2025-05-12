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

// When '/' key press it will take emailInput
document.addEventListener('keydown', function (event) {
    if (event.key === '/') {
        event.preventDefault();
        const input = document.getElementById('emailAddress');
        if (input) {
            input.focus();
        }
    }
});

// toaster Elements
const toaster = document.getElementById('toaster');
const toasterTitle = document.getElementById('toaster-title');
const toasterText = document.getElementById('toaster-text');
const toasterCross = document.getElementById('toaster-cross');
const timerline = document.getElementById('timerline')

// Email Address Save in Local Storage
const form = document.querySelector("form");
const emailInput = document.getElementById('emailAddress');
const emailInputtName = document.getElementById("emailAddress").getAttribute("name");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    const email = emailInput.value;

    if (email) {
        localStorage.setItem("submitted Email", emailInput.value)
        updateToaster('success');
        autoHide();
        saveEmail(emailInput.value);
    } else {
        updateToaster('warning');
        autoHide();
    }
    emailInput.value = '';

});

// API call to update the email addres in "excel sheet"
const url = 'https://yomz-pages-data.vercel.app/api/data';
const saveEmail = async (email) => {
    const response = await fetch(`${url}?email=${email}&sheetName=${emailInputtName}`, {
        method: 'GET'
    }).then(res => res.json());

    console.log("response:", response)
};

// Function to update toaster dynamically
const updateToaster = (type) => {

    toaster.classList.remove('hide')
    // Toaster Value
    toasterTitle.innerText = toasterContent[type].title;
    toasterText.innerText = toasterContent[type].text;
    toasterCross.children[0].src = toasterContent[type].crossIcon;
    toaster.style.backgroundColor = toasterContent[type].backgroundColor
    toaster.style.color = toasterContent[type].color
    timerline.style.backgroundColor = toasterContent[type].color
}

const autoHide = () => {
    let widthSize = 100; // Start at 100%

    // Set the width initially, ensuring it uses the transition
    timerline.style.width = widthSize + '%';

    // Calculate width change per interval
    const decrement = 500 / 3000 * 100;

    const interval = setInterval(() => {
        widthSize -= decrement; // Reduce width size
        timerline.style.width = widthSize + '%'; // Apply the updated width

        // console.log(widthSize);
    }, 500); // Adjust every 500ms

    // After 3 seconds, hide toaster and clear interval
    setTimeout(() => {
        toaster.classList.add('hide');
        clearInterval(interval);
    }, 3500);
}

// clear localStorage on Reload
window.onload = function () {
    localStorage.clear();
};

// toaster 
const toasterContent = {
    success: {
        title: "Success !",
        text: "Your email is submitted successfully",
        color: "#2c9d45",
        backgroundColor: "#ebfbee",
        crossIcon: "images/cross-tost-success.svg",
    },

    warning: {
        title: "Warning",
        text: "Please provide an email address",
        color: "#f18a02",
        backgroundColor: "#fff9dc",
        crossIcon: "images/cross-tost-warning.svg",
    }
};

// close toaster
toasterCross.addEventListener('click', () => {
    toaster.classList.add('hide');
})
