/*==================================================
                    LOADER
==================================================*/

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 800);
});

/*==================================================
                BACK TO TOP
==================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/*==================================================
                WHATSAPP CONTACT FORM
==================================================*/

const form = document.getElementById("waForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;

    const pesan = document.getElementById("pesan").value;

    const nomor = "6285791437530";

    const text = `☕ Halo Admin Kopi Madu!

Nama : ${nama}

Pesan :
${pesan}

Saya mendapatkan informasi dari website Kopi Madu dan ingin menghubungi Anda.

Terima kasih 🙏`;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });
}

/*==================================================
                NAVBAR STICKY
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/*==================================================
                ACTIVE MENU
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*==================================================
            ORDER MENU VIA WHATSAPP
==================================================*/

const phoneNumber = "6285791437530";

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = button.dataset.menu;

    const message = ` Halo Admin Kopi Madu!

Saya tertarik dengan menu *${menu}*.

Boleh saya minta informasi mengenai harga dan pilihan ukurannya?

Terima kasih. `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});