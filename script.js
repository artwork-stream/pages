
const traitKeywords = {
    happiness: [
      "bahagia", "ceria", "senang", "gembira", "tersenyum", "tertawa", "suka cita",
      "bersemangat", "penuh energi", "berbahagia", "menikmati hidup",
      "hidup penuh warna", "bersyukur", "positif", "merasa damai"
    ],
    kindness: [
      "menolong", "peduli", "empati", "baik", "ramah", "dermawan",
      "suka membantu", "menguatkan orang lain", "melayani",
      "tidak tega melihat orang susah", "merangkul", "penuh perhatian",
      "bantu orang", "suka memberi"
    ],
    optimism: [
      "optimis", "positif", "percaya diri", "berharap", "keyakinan",
      "melihat sisi terang", "selalu ada jalan", "semangat maju",
      "yakin masa depan cerah", "tidak mudah menyerah", "pantang putus asa"
    ],
    trust: [
      "percaya", "terbuka", "jujur", "dapat dipercaya", "saling percaya",
      "berbagi cerita", "menceritakan perasaan", "membuka diri",
      "transparan", "tidak menyembunyikan", "percaya pada orang lain",
      "mau menerima kritik", "saling terbuka"
    ],
    respect: [
      "menghargai", "hormat", "respek", "toleransi", "mendengarkan orang lain",
      "bertukar pikiran", "terbuka terhadap pendapat", "tidak memaksakan",
      "menghormati pilihan", "mengerti sudut pandang lain",
      "diskusi sehat", "berpikiran terbuka", "tidak menghakimi"
    ],
    ego: [
      "egois", "pentingkan diri", "keras kepala", "dominan", "tidak mau kalah",
      "merasa paling benar", "tidak mau disalahkan", "tidak mau mendengar",
      "selalu ingin diakui", "susah minta maaf", "tidak fleksibel",
      "merasa lebih tinggi", "mau menang sendiri"
    ]
  };


function getTraitDescription(trait, score) {
  if (score >= 60) return `Tingkat ${trait} kamu sangat tinggi.`;
  if (score >= 40) return `Kamu cukup ${trait}, terlihat dalam narasimu.`;
  if (score >= 30) return `Kecenderungan ${trait} kamu sedang, tapi belum dominan.`;
  if (score >= 20) return `Kamu memiliki sedikit sifat ${trait}, mungkin perlu menyesuaikan.`;
  return `Sifat ${trait} belum terlihat menonjol dalam deskripsi kamu.`;
}


function hitungSkor(deskripsi) {
  const hasil = {};
  const text = deskripsi.toLowerCase();

  for (const trait in traitKeywords) {
    const words = traitKeywords[trait];
    let score = 12; 

    words.forEach(keyword => {
      if (text.includes(keyword)) score += 14;
    });

    if (score > 100) score = 100;
    hasil[trait] = score;
  }

  return hasil;
}


function tampilkanHasil(skor) {
  for (const trait in skor) {
    const nilai = skor[trait];
    const persenEl = document.querySelector(`#trait-${trait} .persen`);
    const fillEl = document.querySelector(`#trait-${trait} .fill`);
    const descEl = document.querySelector(`#trait-${trait} .trait-desc`);

    persenEl.innerText = `${nilai}%`;
    fillEl.style.width = `${nilai}%`;
    descEl.innerText = getTraitDescription(trait, nilai);
  }
}


document.getElementById("analisisBtn").addEventListener("click", () => {
  const teks = document.getElementById("deskripsi").value;
  if (teks.trim() === "") {
    alert("Silakan isi deskripsi terlebih dahulu!");
    return;
  }

  const hasilSkor = hitungSkor(teks);
  tampilkanHasil(hasilSkor);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("deskripsi").value = "";


  const traits = ["happiness", "kindness", "optimism", "trust", "respect", "ego"];
  traits.forEach(trait => {
    document.querySelector(`#trait-${trait} .persen`).innerText = "0%";
    document.querySelector(`#trait-${trait} .fill`).style.width = "0%";
    document.querySelector(`#trait-${trait} .trait-desc`).innerText = "Deskripsi belum ada";
  });
});


document.getElementById("bagikanBtn").addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "Analisis Deskripsi Audiens",
      text: "Cek hasil analisis deskripsiku!",
      url: window.location.href
    }).catch(console.error);
  } else {
    alert("Fitur berbagi belum didukung di browser ini.");
  }
});