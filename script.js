const traitKeywords = {
  happiness: [
    "bahagia", "ceria", "senang", "gembira", "tersenyum", "tertawa", "penuh semangat", "bersyukur", "positif", "menikmati hidup",
    "suka cita", "penuh energi", "antusias", "riang", "bersemangat", "penuh harapan", "semangat hidup", "memotivasi diri",
    "menyemangati", "penuh tawa", "melihat sisi cerah", "menikmati momen", "penuh cinta", "suka berbagi", "merasa puas",
    "merasa beruntung", "berterima kasih", "tidak mengeluh", "optimis", "berpengharapan", "menyambut hari", "menyambut hidup",
    "bersinar", "melangkah ringan", "ringan hati", "positif thinking", "tanpa beban", "jiwa muda", "semangat tinggi",
    "hati lapang", "bebas stres", "pikiran jernih", "rasa puas", "hidup seimbang", "well-being", "mindful", "tenang", "berenergi", "mendamaikan"
  ],
  kindness: [
    "menolong", "baik", "ramah", "empati", "peduli", "bantu orang", "penuh perhatian", "suka memberi", "murah hati", "pemaaf",
    "melindungi", "menguatkan", "menghibur", "sabar", "tidak kasar", "penuh kasih", "penyayang", "suka berbagi", "pengertian", "melayani",
    "memahami", "tidak menuntut", "memaafkan", "mempermudah", "menghargai waktu orang", "sopan", "menjaga perasaan", "dermawan", "merangkul",
    "lembut", "tidak menilai", "tidak menghakimi", "tulus", "penuh cinta", "tidak egois", "tidak menyakiti", "ikut merasakan", "humble",
    "tidak sombong", "bantu tanpa pamrih", "mendengarkan", "berbela rasa", "mengasihi", "tidak marah-marah", "memanusiakan", "menyejukkan",
    "terbuka", "ikut membantu", "bantu tanpa disuruh"
  ],
  optimism: [
    "optimis", "percaya diri", "keyakinan", "semangat maju", "pantang menyerah", "melihat sisi baik", "yakin bisa", "tidak takut gagal", "berpikiran positif", "percaya masa depan",
    "selalu ada jalan", "semangat terus", "tidak menyerah", "berusaha lagi", "berharap baik", "melihat peluang", "menantang diri", "yakin hari esok lebih baik", "tidak putus asa", "teguh hati",
    "pantang mundur", "berpikiran luas", "berpikiran terbuka", "terus berjuang", "mengambil hikmah", "selalu bangkit", "tidak mudah menyerah", "yakin akan sukses", "semangat belajar", "berani coba",
    "percaya perubahan", "percaya proses", "berani ambil risiko", "berpikiran besar", "bisa lebih baik", "tidak takut mencoba", "gigih", "bermental juara", "positif mindset", "berani gagal",
    "berani melangkah", "berniat baik", "percaya mimpi", "suka tantangan", "bertekad", "tidak takut kesulitan", "tidak gampang menyerah", "penuh harapan", "tidak takut perubahan"
  ],
  trust: [
    "percaya", "terbuka", "jujur", "dapat dipercaya", "membuka diri", "berbagi cerita", "transparan", "tidak menyembunyikan", "percaya orang", "percaya teman",
    "percaya pasangan", "percaya keluarga", "saling percaya", "berani cerita", "menceritakan rahasia", "mau terbuka", "tidak curiga", "percaya proses", "mempercayakan",
    "berbagi isi hati", "berani jujur", "tidak menyembunyikan perasaan", "menunjukkan kelemahan", "berani terbuka", "berani cerita buruk", "percaya niat baik", "berprasangka baik",
    "tidak menuduh", "percaya diri", "percaya sekitar", "percaya tim", "percaya orang baik", "percaya bantuan", "tidak paranoid", "percaya institusi", "tidak menutup diri",
    "percaya keputusan", "percaya nasihat", "percaya pengalaman", "tidak menyimpan dendam", "percaya anak", "percaya pasangan", "percaya masa depan", "percaya diri sendiri",
    "percaya kemampuan", "percaya pertolongan", "percaya rencana Tuhan", "percaya kebetulan", "percaya nilai"
  ],
  respect: [
    "menghargai", "hormat", "respek", "toleransi", "mendengarkan", "bertukar pikiran", "diskusi sehat", "tidak memaksakan", "menghormati pilihan", "mengerti sudut pandang lain",
    "menghargai waktu", "menghargai privasi", "menghormati ruang pribadi", "tidak memotong pembicaraan", "sabar saat mendengar", "tidak menggurui", "tidak menghakimi", "berpikiran terbuka",
    "menghargai proses", "menghargai orang tua", "menghormati atasan", "menghormati guru", "menghormati anak", "menghormati yang berbeda", "menerima kritik", "tidak sinis",
    "tidak merendahkan", "tidak mengejek", "menghargai pendapat", "menghargai keputusan", "menghormati aturan", "menghargai perbedaan", "bersikap dewasa", "berdiskusi sehat",
    "menghormati kesepakatan", "beretika", "menghargai pengalaman", "tidak sarkas", "tidak nyinyir", "tidak menghina", "menghargai waktu orang lain", "berkompromi",
    "tidak egois", "tidak mendominasi", "menghargai usaha", "menghargai kerja keras", "berterima kasih", "menghormati privasi", "mengakui jasa"
  ],
  ego: [
    "egois", "keras kepala", "merasa paling benar", "tidak mau kalah", "tidak fleksibel", "sulit minta maaf", "selalu merasa benar", "merasa paling tahu", "tidak mendengarkan", "dominan",
    "ingin menang sendiri", "meremehkan", "tidak menerima kritik", "sulit menerima masukan", "tidak sadar salah", "membela diri", "mau kontrol", "tidak introspeksi", "cepat tersinggung",
    "mau dikagumi", "merasa hebat", "ingin di atas", "suka menyalahkan", "tidak mau kalah debat", "merasa spesial", "mementingkan diri", "tidak empatik", "tidak merasa bersalah",
    "menyalahkan keadaan", "defensif", "mementingkan opini sendiri", "tidak memahami orang lain", "tidak peduli sekitar", "mau diutamakan", "ngotot", "keras", "tidak rukun",
    "sulit kerja tim", "merasa lebih baik", "tidak mau dikritik", "tidak rendah hati", "mau kontrol semua", "suka mendominasi", "menekan orang lain", "tidak toleran", "tidak reflektif",
    "suka menuntut", "sulit berdamai", "anti kritik"
  ]
};

const psikologiKeywords = {
  introvert: [
    "diam", "sendiri", "merenung", "menyendiri", "pendiam", "introvert",
    "menikmati kesendirian", "lebih suka sendiri", "butuh waktu sendiri",
    "mengisi energi sendirian", "tidak suka keramaian", "tenang",
    "cenderung tertutup", "mengamati", "menganalisa dalam diam",
    "tidak banyak bicara", "lebih suka mendengar", "berpikir dalam",
    "sulit memulai percakapan", "pemalu", "menghindari spotlight",
    "private", "individual", "menulis daripada bicara", "menyendiri untuk refleksi",
    "tidak suka basa-basi", "pemikir", "berpikir sebelum bicara", "menghindari konflik",
    "suka ruang pribadi", "tidak nyaman dikeramaian", "bermain sendiri",
    "aktivitas soliter", "fokus ke dalam", "tidak ekspresif",
    "tidak suka berkelompok", "sering memproses emosi sendiri", 
    "mencari makna hidup", "kontemplatif", "berfokus pada diri sendiri", 
    "cenderung pasif", "lebih suka mendalami", "jarang curhat",
    "lebih suka menonton", "pemalu sosial", "tidak spontan",
    "tidak nyaman dengan obrolan ringan", "lebih tenang dalam sunyi"
  ],
  ekstrovert: [
    "suka bicara", "bertemu orang", "keramaian", "sosial", "bergaul", "ekstrovert",
    "energik", "berinteraksi", "aktif", "banyak teman", "mudah akrab",
    "ceria saat ramai", "membaur", "bersemangat dalam kelompok",
    "senang diskusi", "tidak suka sepi", "suka perhatian", "suka tampil",
    "berani bicara", "menyapa duluan", "spontan", "gampang berteman",
    "membangun koneksi", "suka kerjasama", "ramah", "terbuka",
    "banyak ide saat diskusi", "senang di komunitas", "menghibur",
    "senang jadi pusat perhatian", "mudah beradaptasi", "cerita banyak",
    "menyenangkan", "sering tertawa", "mendorong suasana",
    "tidak betah sendiri", "suka dinamika", "hidup sosial tinggi",
    "terlibat dalam kegiatan", "sering keluar rumah", "bersemangat dalam event",
    "suka memimpin", "senang mengobrol", "penuh energi sosial",
    "suka tim", "tidak suka kesepian", "mudah percaya orang", "terlibat sosial"
  ],
  neurotik: [
    "cemas", "khawatir", "takut gagal", "overthinking", "gelisah", "takut ditolak",
    "mencemaskan banyak hal", "tidak tenang", "sulit tidur", "emosional",
    "sering murung", "sensitif", "mood swing", "takut penolakan", 
    "berpikir negatif", "sulit percaya diri", "takut akan masa depan",
    "sering berpikir buruk", "panik", "tertekan", "merasa bersalah",
    "cepat tersinggung", "mudah stress", "sulit santai", "tegang",
    "cenderung pesimis", "perasaan campur aduk", "sulit fokus",
    "terpaku masalah", "berpikir terlalu jauh", "cepat gugup",
    "mudah lelah emosional", "tidak stabil", "emosi tinggi",
    "tidak suka ketidakpastian", "sering curiga", "tidak tenang di sosial",
    "perasa", "susah move on", "suka menyalahkan diri", 
    "terbebani pikiran", "selalu ada rasa takut", "tegang saat berbicara",
    "sulit enjoy", "minder", "takut penilaian", "sensitif kritik", "emosi tidak terkontrol"
  ],
  selfAwareness: [
    "menyadari", "refleksi", "belajar dari", "mengakui", "introspeksi", "penerimaan diri",
    "mengenali emosi", "paham diri", "evaluasi diri", "mau berubah",
    "mengenal kekurangan", "mengenal kelebihan", "berpikir ke dalam",
    "bertumbuh", "berkaca diri", "mengambil pelajaran", "tidak menyalahkan",
    "menerima masukan", "jujur pada diri", "mau memperbaiki diri",
    "sadar proses", "tidak menyangkal", "pahami pola diri", 
    "bertanggung jawab", "self talk", "proses batin", "tidak defensif",
    "terbuka introspeksi", "mawas diri", "pemahaman emosi",
    "sadar dampak tindakan", "sadar perasaan", "mengerti reaksi diri",
    "berlatih mindfulness", "evaluasi kebiasaan", "mengendalikan emosi",
    "mengatur pikiran", "mengenal kebutuhan diri", "self improvement",
    "tidak mengeluh", "sadar waktu", "mengamati diri", "sadar pengaruh lingkungan",
    "membenahi diri", "tidak reaktif", "belajar dari pengalaman",
    "tidak mengulang kesalahan", "sadar potensi", "melatih kepekaan"
  ],
  defenseDenial: [
    "aku tidak salah", "bukan salahku", "salah mereka", "mereka yang salah", 
    "aku benar", "tidak mau disalahkan", "itu bukan tanggung jawabku",
    "bukan urusanku", "orang lain yang memulai", "itu bukan kesalahan saya",
    "aku dipaksa", "aku hanya ikut", "bukan kehendakku", 
    "situasi memaksa", "tidak ada pilihan", "aku tidak tahu apa-apa",
    "aku cuma korban", "aku tidak tahu kenapa", "tidak adil", "kenapa aku",
    "menyalahkan keadaan", "menyalahkan orang tua", "itu masa lalu",
    "aku tidak pernah bilang itu", "aku tidak terlibat", 
    "aku disalahpahami", "aku diperlakukan tidak adil", "sistemnya salah",
    "lingkungannya toxic", "aku salah paham", "aku terjebak",
    "aku dimanipulasi", "aku tidak paham", "aku cuma bercanda",
    "aku tidak sepenuhnya salah", "tidak sesuai ekspektasi", "aku tidak serius",
    "aku hanya marah saat itu", "aku tidak niat", "aku lagi capek",
    "aku cuma ikut-ikutan", "bukan aku yang mulai", "aku gak tahu akibatnya",
    "gak semua dari aku", "bukan kemauanku", "aku di bawah tekanan",
    "aku bingung", "aku dibohongi", "aku cuma bereaksi"
  ],
  defenseIntellectualization: [
    "logika", "analisa", "rasional", "dipertimbangkan", "secara objektif",
    "berpikir logis", "dengan nalar", "berpikir sistematis", "fakta dan data",
    "tanpa emosi", "menghindari perasaan", "pendekatan akademis",
    "berpikir dingin", "dengan pengetahuan", "kognitif", 
    "menghindari konflik emosional", "dengan kalkulasi", "menggunakan argumen",
    "menggunakan teori", "berpikir realistis", "meneliti dulu",
    "menimbang risiko", "berdasarkan hukum", "secara ilmiah",
    "berpikir konseptual", "menghindari subjektif", "tidak emosional",
    "berpikir strategis", "berlogika", "berpikir rasional", 
    "melihat pola", "menganalisis perilaku", "membedah fakta",
    "melihat dari sisi objektif", "menunda reaksi emosional",
    "memahami dengan akal", "pendekatan logis", "berhitung",
    "pakai pendekatan rasional", "berpikir berdasarkan alasan",
    "melihat konsekuensi", "berpikir metodis", "menimbang", 
    "menelusuri sebab", "melogikakan semuanya", "menalar", "menghindari drama"
  ],
  perfeksionis: [
    "harus sempurna", "tidak boleh gagal", "selalu benar", "menuntut tinggi",
    "standar tinggi", "semua harus rapi", "hasil maksimal", 
    "tak bisa toleransi kesalahan", "mengejar kesempurnaan", 
    "tidak puas", "kurang itu salah", "kritis terhadap hasil",
    "tidak menerima kegagalan", "suka menunda karena belum sempurna",
    "fokus ke detail", "takut tidak maksimal", "ingin hasil terbaik",
    "membandingkan terus", "tidak bisa terima kritik", 
    "sulit delegasi", "perfeksionis", "over kontrol", 
    "tidak fleksibel", "tidak suka improvisasi", "mengulang pekerjaan",
    "selalu koreksi", "takut terlihat buruk", "mengejar ekspektasi tinggi",
    "ambisius berlebihan", "kontrol penuh", "takut dinilai buruk",
    "ingin semua berjalan sesuai rencana", "tidak bisa asal-asalan",
    "butuh validasi hasil", "detail oriented", "mengecek ulang",
    "obsesi terhadap kerapian", "semua harus sesuai standar",
    "sulit menerima kekurangan", "menghindari resiko salah",
    "tidak rela gagal", "tidak boleh jelek", "semua harus seragam",
    "kinerja tinggi", "progres harus sempurna", "deadline ketat",
    "target tinggi", "tidak pernah puas", "takut disalahkan"
  ]
};

function hitungSkor(deskripsi) {
  const hasil = {};
  const teks = deskripsi.toLowerCase();

  for (const trait in traitKeywords) {
    const words = traitKeywords[trait];
    let score = 15; // Nilai dasar

    words.forEach(keyword => {
      if (teks.includes(keyword)) score += 14;
    });

    hasil[trait] = Math.min(score, 100);
  }

  return hasil;
}

function getTraitDescription(trait, score) {
  if (score >= 80) return `Tingkat ${trait} sangat kuat dan mendominasi kepribadian Anda.`;
  if (score >= 60) return `Anda memiliki kecenderungan kuat pada ${trait}.`;
  if (score >= 40) return `Sifat ${trait} Anda berada di tingkat sedang.`;
  if (score >= 20) return `Tingkat ${trait} masih minim, perlu dilatih lebih lanjut.`;
  return `Sifat ${trait} belum terlihat dominan dalam deskripsi.`;
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

function analisisPsikologi(teks) {
  const text = teks.toLowerCase();
  let tipe = "-", emosi = "-", aware = "-", defense = "-";

  const intro = psikologiKeywords.introvert.some(w => text.includes(w));
  const ekstro = psikologiKeywords.ekstrovert.some(w => text.includes(w));
  const neurotik = psikologiKeywords.neurotik.some(w => text.includes(w));
  const sadar = psikologiKeywords.selfAwareness.some(w => text.includes(w));
  const denial = psikologiKeywords.defenseDenial.some(w => text.includes(w));
  const intellec = psikologiKeywords.defenseIntellectualization.some(w => text.includes(w));

  if (intro && ekstro) tipe = "Ambivert";
  else if (intro) tipe = "Introvert";
  else if (ekstro) tipe = "Ekstrovert";

  emosi = neurotik ? "Cenderung Emosional" : "Cukup Stabil";
  aware = sadar ? "Tinggi" : "Belum Terlihat";
  if (intellec) defense = "Rasionalisasi ( Intellectualization )";
  else if (denial) defense = "Penolakan ( Denial )";
  else defense = "Belum Terlihat";

  return { tipe, emosi, aware, defense };
}

document.getElementById("psikologi").classList.add("show");

// ==== Event Listeners ====

document.getElementById("analisisBtn").addEventListener("click", () => {
  const teks = document.getElementById("deskripsi").value;
  if (teks.trim() === "") {
    alert("Silahkan isi deskripsi terlebih dahulu!");
    return;
  }

  const hasilSkor = hitungSkor(teks);
  tampilkanHasil(hasilSkor);

  const psiko = analisisPsikologi(teks);
  document.getElementById("psiko-tipe").innerText = psiko.tipe;
  document.getElementById("psiko-emosi").innerText = psiko.emosi;
  document.getElementById("psiko-aware").innerText = psiko.aware;
  document.getElementById("psiko-pertahanan").innerText = psiko.defense;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("deskripsi").value = "";

  const traits = ["happiness", "kindness", "optimism", "trust", "respect", "ego"];
  traits.forEach(trait => {
    document.querySelector(`#trait-${trait} .persen`).innerText = "0%";
    document.querySelector(`#trait-${trait} .fill`).style.width = "0%";
    document.querySelector(`#trait-${trait} .trait-desc`).innerText = "Deskripsi belum ada.";
  });

  document.getElementById("psiko-tipe").innerText = "Deskripsi belum ada.";
  document.getElementById("psiko-emosi").innerText = "Deskripsi belum ada.";
  document.getElementById("psiko-aware").innerText = "Deskripsi belum ada.";
  document.getElementById("psiko-pertahanan").innerText = "Deskripsi belum ada.";
});

document.getElementById("bagikanBtn").addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "Analisis Diri",
      text: "Lihat hasil analisis deskripsi diriku!",
      url: window.location.href
    }).catch(console.error);
  } else {
    alert("Fitur berbagi belum tersedia di browser ini.");
  }
});