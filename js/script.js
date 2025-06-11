// === Toggle Dark Mode ===
const toggle = document.getElementById('toggle-theme');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// ===== CONTACT FORM =====
const form = document.getElementById('contact-form');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const question = form.question.value.trim();

  // Gmail validation handled by pattern attr; extra fallback:
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if(!gmailRegex.test(email)){
    alert('Email must be a valid @gmail.com address!');
    return;
  }
  if(!name||!question){
    alert('Please fill in all fields!');
    return;
  }

  // greet user
  document.getElementById('user-name').innerText = name;

  // append message
  const msgBox = document.getElementById('messages');
  msgBox.insertAdjacentHTML('beforeend',
    `<div class="message-item"><strong>${name}:</strong> ${question}</div>`);

  form.reset();
});

// === Toggle Navbar (Burger Menu) ===
const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

if (menuToggle && navbarLinks) {
  menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
}

// # Ambil elemen galeri utama
const gallery = document.querySelector('.photo-gallery');

// # Tentukan seberapa jauh galeri akan digeser per langkah (satu lebar layar galeri)
const scrollAmount = gallery.offsetWidth;

// # Simpan interval auto-scroll supaya bisa dihentikan nanti
let autoScrollInterval;

// # Fungsi untuk geser ke gambar selanjutnya
function nextImage() {
  gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// # Fungsi untuk geser ke gambar sebelumnya
function prevImage() {
  gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

// # Fungsi untuk memulai auto-slide (loop otomatis setiap 3 detik)
function startAutoScroll() {
  // Tambahkan class untuk animasi halus jika mau
  gallery.classList.add('scrolling');

  autoScrollInterval = setInterval(() => {
    // # Cek apakah sudah mencapai ujung kanan
    if (Math.ceil(gallery.scrollLeft + gallery.offsetWidth) >= gallery.scrollWidth) {
      // # Kalau sudah di ujung, balik ke awal (loop)
      gallery.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // # Kalau belum di ujung, lanjut ke gambar berikutnya
      nextImage();
    }
  }, 3000); // # Ganti gambar setiap 3 detik
}

// # Fungsi untuk menghentikan auto-slide
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
  gallery.classList.remove('scrolling');
}

// # Mulai auto-slide saat halaman dimuat
startAutoScroll();

// # Beri jeda auto-slide saat mouse masuk ke galeri (biar nggak ganggu user)
gallery.addEventListener('mouseenter', stopAutoScroll);

// # Lanjutkan auto-slide saat mouse keluar dari galeri
gallery.addEventListener('mouseleave', startAutoScroll);
