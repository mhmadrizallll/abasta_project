// Fungsi untuk toggle menu dengan animasi slide down/up
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
    // Menampilkan menu dengan animasi slide down
    menu.style.maxHeight = "300px"; // Sesuaikan dengan tinggi konten menu
    menu.style.padding = "10px 0"; // Menambahkan padding
    menu.style.opacity = 1;
    menu.style.transform = "translateY(0)"; // Menurunkan menu ke bawah
  } else {
    // Menyembunyikan menu dengan animasi slide up
    menu.style.maxHeight = "0px";
    menu.style.padding = "0";
    menu.style.opacity = 0;
    menu.style.transform = "translateY(-20px)"; // Mengangkat menu ke atas
  }
}

// Fungsi untuk toggle hamburger icon ke silang
function toggleHamburger(element) {
  element.classList.toggle("active");
}
