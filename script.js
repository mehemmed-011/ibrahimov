const container = document.querySelector(".container");

// Rəng dəyişmə funksiyası
function setColor(className) {
    container.classList.remove("instagram", "facebook", "linkedin", "telegram", "whatsapp");
    if (className) container.classList.add(className);
}

// Instagram
document.querySelector(".button1").addEventListener("mouseover", () => {
    setColor("instagram");
});

// Facebook
document.querySelector(".button2").addEventListener("mouseover", () => {
    setColor("facebook");
});

// LinkedIn
document.querySelector(".button3").addEventListener("mouseover", () => {
    setColor("linkedin");
});

// Telegram
document.querySelector(".button4").addEventListener("mouseover", () => {
    setColor("telegram");
});

// WhatsApp
document.querySelector(".button5").addEventListener("mouseover", () => {
    setColor("whatsapp");
});

// Hover-dan çıxanda rəngi sıfırla
document.querySelector(".links").addEventListener("mouseleave", () => {
    setColor(null);
});
