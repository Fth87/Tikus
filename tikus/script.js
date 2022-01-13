const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const pSkor = document.querySelector('.skor');
const pop = document.querySelector('.pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  return tRandom;
}

function rWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const mRandom = randomTanah(tanah);
  const wWaktu = rWaktu(300, 1000);
  mRandom.classList.add('muncul');
  setTimeout(() => {
    mRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanTikus();
    }
  }, wWaktu);
}

function mulai() {
  selesai = false;
  skor = 0;
  pSkor.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

// function pukul() {
//   skor += 1;
//   pSkor.textContent = skor;
//   console.log(skor)
// }

tikus.forEach((t) => {
  t.addEventListener('click', function () {
    skor += 1;
    pSkor.textContent = skor;
    pop.play();
    this.parentNode.className = 'tanah';
    // this.parentNode.classList.remove('muncul')
  });
});
