// Hamburger Menu
const btn = document.getElementById('menu-btn');
// const nav = document.getElementById('navbar');
        btn.addEventListener('click', () => 
        {
            // document.getElementById('navbar').classList.toggle('translate-x-96');
            btn.classList.toggle('open');
        })

// The Year of The CopyRight
let year = document.getElementById("year");
let date = new Date().getFullYear();
let arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']; 
let arabicYear = date.toString().replace(/\d/g, (d) => arabicNumbers[d]); // to Change to Arabic Numbers
year.innerHTML = arabicYear ;

// Show Pop
let pop = document.getElementById('pop');
let overlay = document.getElementById('overlay');
let popHeader = document.getElementById('pop-header');
let popText = document.getElementById('pop-text');
let popImg = document.getElementById('pop-img');
let imgOfSwiperSlide = document.querySelectorAll('.swiper-slide img');

const offers = [
  { header: "تخفيض 80%", text: "تخفيض يصل الى 80% واكثر عند شرائك عبر تطبيق ..." },
  { header: "تخفيض 50%", text: "تخفيض يصل الى 50% واكثر عند شرائك عبر تطبيق ..." },
  { header: "تخفيض 20%", text: "تخفيض يصل الى 20% واكثر عند شرائك عبر تطبيق ..." }
];

imgOfSwiperSlide.forEach(img => {
  img.addEventListener('click', function () {
    const index = +this.getAttribute("data-index");

    popHeader.textContent = offers[index].header;
    popText.textContent = offers[index].text;
    popImg.src = this.src;

    pop.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

// إخفاء pop والـ overlay عند النقر عليهما
overlay.addEventListener('click', () => {
  pop.classList.add("hidden");
  overlay.classList.add("hidden");
});

pop.addEventListener('click', () => {
  pop.classList.add("hidden");
  overlay.classList.add("hidden");
});

