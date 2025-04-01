document.addEventListener("DOMContentLoaded", function () {

    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    let shopButtons = document.querySelectorAll(".shop-btn");
    shopButtons.forEach(btn => {
        btn.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#d10068";
        });
        btn.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#ff69b4";
        });
    });

    let menuLinks = document.querySelectorAll("nav ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    let searchIcon = document.querySelector(".icons img[alt='Search']");
    searchIcon.addEventListener("click", function () {
        alert("Search function coming soon! 🍩");
    });

    shopButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            let donutName = this.previousElementSibling.innerText;
            alert(`You selected: ${donutName}`);
        });
    });

    let darkModeButton = document.createElement("button");
    darkModeButton.innerText = "Dark Mode";
    darkModeButton.classList.add("dark-mode-btn");
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

});

gsap.to(".text", {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".image img", {
    y: 100,
    scale: 1.2,
    rotation: 10,
    scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

const sprinkleColors = ["#ff69b4", "#ffcc00", "#00ccff", "#66ff66", "#ff6666"];

for (let i = 0; i < 30; i++) {
    let sprinkle = document.createElement("div");
    sprinkle.classList.add("sprinkles");
    sprinkle.style.backgroundColor = sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)];
    sprinkle.style.left = Math.random() * window.innerWidth + "px";
    sprinkle.style.top = Math.random() * 100 + "px";

    document.body.appendChild(sprinkle);
}

function showImage(src) {
    document.getElementById('modalImg').src = src;
    document.getElementById('imageModal').style.display = "flex";
}

function closeImage() {
    document.getElementById('imageModal').style.display = "none";
}

function changeMainImage(newSrc) {
    document.getElementById('bigDonut').src = newSrc;
}

const donutItems = document.querySelectorAll('.donut-item img');

donutItems.forEach(donut => {
    donutItems.addEventListener('mouseover', function () {
        donutItems.src = this.src;
    });

    donutItems.addEventListener('mouseout', function () {
        donutItemst.src = "images/Donut_Chrushed_Candy_Dark-removebg-preview.png";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


