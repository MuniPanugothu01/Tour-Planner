const menu = document.querySelector('#memu-btn');
const navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


// services javascript start
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// home slider javascript
var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// review slider javascript

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1

        },
        768: {
            slidesPerView: 2

        },
        1024: {
            slidesPerView: 3
        },
    },
})



// packages javascript to click load more then it show the total packages
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;
loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    };
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}




// Booking script start

document.getElementById("paymentButton").addEventListener("click", function (event) {
    event.preventDefault();

    // Collect the booking form data
    const bookingData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        location: document.getElementById("location").value,
        quest: document.getElementById("quest").value,
        arrivals: document.getElementById("arrivals").value,
        leaving: document.getElementById("leaving").value,
    };

    // Save to localStorage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Redirect to payment page
    window.location.href = "payment.html";
});



