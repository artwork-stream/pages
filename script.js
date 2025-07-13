// ======= KEYWORDS & DESKRIPSI ======= //

const traitKeywords = { 
  happiness: [
  "bahagia", "ceria", "senang", "gembira", "tersenyum", "tertawa", "penuh semangat", "bersyukur", "positif", "menikmati hidup",
  "suka cita", "penuh energi", "antusias", "riang", "bersemangat", "penuh harapan", "semangat hidup", "memotivasi diri",
  "menyemangati", "penuh tawa", "melihat sisi cerah", "menikmati momen", "penuh cinta", "suka berbagi", "merasa puas",
  "merasa beruntung", "berterima kasih", "tidak mengeluh", "optimis", "berpengharapan", "menyambut hari", "menyambut hidup",
  "bersinar", "melangkah ringan", "ringan hati", "positif thinking", "tanpa beban", "jiwa muda", "semangat tinggi",
  "hati lapang", "bebas stres", "pikiran jernih", "rasa puas", "hidup seimbang", "well-being", "mindful", "tenang", "berenergi", "mendamaikan",
  "penuh syukur", "menenangkan", "bahagia kecil", "penuh makna", "kelegaan hati", "tidak cemas", "suka tertawa", "menghargai hidup",
  "merasa damai", "hati senang", "pikiran positif", "selalu bersyukur", "wajah ceria", "penuh inspirasi", "merasa cukup",
  "hidup bahagia", "santai", "enjoy", "grateful", "hati terbuka", "optimisme", "penuh kehangatan", "pikiran tenang",
  "jiwa positif", "tulus tersenyum", "tidak tertekan", "rasa cinta", "penuh semangat pagi", "menghidupkan suasana",
  "berpikir positif", "penuh semangat hidup", "menghargai momen", "menikmati perjalanan", "tidak terbebani", "jiwa bahagia",
  "merasa berarti", "senyum tulus", "rasa tenteram", "positivity", "energi baik", "tidak khawatir", "semangat baru",
  "penuh suka cita", "menyebar kebahagiaan", "jiwa bersyukur", "rasa nyaman", "terisi energi", "bangkit bahagia",
  "bahagia sederhana", "hidup ringan", "menyemangati diri", "penuh cahaya", "tidak ada beban"
  ],
  kindness: [
  "menolong", "baik", "ramah", "empati", "peduli", "bantu orang", "penuh perhatian", "suka memberi", "murah hati", "pemaaf",
  "melindungi", "menguatkan", "menghibur", "sabar", "tidak kasar", "penuh kasih", "penyayang", "suka berbagi", "pengertian", "melayani",
  "memahami", "tidak menuntut", "memaafkan", "mempermudah", "menghargai waktu orang", "sopan", "menjaga perasaan", "dermawan", "merangkul", "lembut",
  "tidak menilai", "tidak menghakimi", "tulus", "penuh cinta", "tidak egois", "tidak menyakiti", "ikut merasakan", "humble", "tidak sombong", "bantu tanpa pamrih",
  "mendengarkan", "berbela rasa", "mengasihi", "tidak marah-marah", "memanusiakan", "menyejukkan", "terbuka", "ikut membantu", "bantu tanpa disuruh", "penuh belas kasih",
  "mendukung", "menenangkan", "menguatkan batin", "tidak membalas", "mengasuh", "menyemangati", "berkorban waktu", "berkorban tenaga", "berkorban pikiran", "menaruh empati",
  "memberi perhatian", "menjawab dengan lembut", "tidak menyela", "mengikuti alur bicara", "memprioritaskan orang lain", "memberi solusi dengan sabar", "tidak menyalahkan",
  "bersimpati", "menghargai orang", "mengutamakan orang lain", "penuh welas asih", "tidak sinis", "tidak mencela", "tidak kasar bicara", "berpikiran baik",
  "memberi ruang", "penuh pengertian", "berhati lembut", "menenangkan hati", "tidak ego sentris", "rendah hati", "tidak mendominasi", "berjiwa sosial", "bisa dipercaya",
  "tidak menuntut balasan", "menawarkan bantuan", "berinisiatif membantu", "penuh kerelaan", "tidak perhitungan", "memberi kenyamanan", "membantu dengan niat tulus",
  "membesarkan hati", "menenangkan orang lain", "tidak mengintimidasi", "tidak bersuara keras", "memberi pujian tulus", "menguatkan kepercayaan diri", "berjiwa penolong", "menghibur hati"
  ],
  optimism: [
  "optimis", "percaya diri", "keyakinan", "semangat maju", "pantang menyerah", "melihat sisi baik", "yakin bisa", "tidak takut gagal", "berpikiran positif", "percaya masa depan",
  "selalu ada jalan", "semangat terus", "tidak menyerah", "berusaha lagi", "berharap baik", "melihat peluang", "menantang diri", "yakin hari esok lebih baik", "tidak putus asa", "teguh hati",
  "pantang mundur", "berpikiran luas", "berpikiran terbuka", "terus berjuang", "mengambil hikmah", "selalu bangkit", "tidak mudah menyerah", "yakin akan sukses", "semangat belajar", "berani coba",
  "percaya perubahan", "percaya proses", "berani ambil risiko", "berpikiran besar", "bisa lebih baik", "tidak takut mencoba", "gigih", "bermental juara", "positif mindset", "berani gagal",
  "berani melangkah", "berniat baik", "percaya mimpi", "suka tantangan", "bertekad", "tidak takut kesulitan", "tidak gampang menyerah", "penuh harapan", "tidak takut perubahan", "berani bertindak",
  "percaya hasil", "tidak putus harapan", "melihat kemungkinan", "berharap positif", "memiliki harapan", "tidak gentar", "tidak mudah goyah", "melihat masa depan cerah", "menumbuhkan harapan", "membangun keyakinan",
  "semangat inovasi", "percaya diri sendiri", "percaya pada proses", "percaya keajaiban", "percaya impian", "selalu berpikir positif", "semangat berkarya", "menyambut tantangan", "berpikir jauh ke depan", "yakin atas kemampuan",
  "percaya jalan hidup", "tidak mudah menyerah", "yakin bisa berubah", "berani berproses", "selalu antusias", "melihat sisi cerah", "tidak terjebak masalah", "tidak fokus pada kegagalan", "mencoba hal baru", "berpikir maju",
  "menciptakan kesempatan", "tidak menyalahkan diri", "penuh semangat hidup", "berpikir solutif", "berorientasi pada harapan", "percaya adanya solusi", "percaya pertumbuhan", "mengejar mimpi", "percaya akan keajaiban",
  "percaya semua akan baik", "tidak kehilangan arah", "percaya intuisi", "percaya pada kesempatan", "percaya pada kemungkinan", "berani harap", "percaya cinta", "percaya akan perubahan", "percaya dalam doa", "menggenggam harapan"
  ],
  trust: [
  "percaya", "terbuka", "jujur", "dapat dipercaya", "membuka diri", "berbagi cerita", "transparan", "tidak menyembunyikan", "percaya orang", "percaya teman",
  "percaya pasangan", "percaya keluarga", "saling percaya", "berani cerita", "menceritakan rahasia", "mau terbuka", "tidak curiga", "percaya proses", "mempercayakan", "berbagi isi hati",
  "berani jujur", "tidak menyembunyikan perasaan", "menunjukkan kelemahan", "berani terbuka", "berani cerita buruk", "percaya niat baik", "berprasangka baik", "tidak menuduh", "percaya diri", "percaya sekitar",
  "percaya tim", "percaya orang baik", "percaya bantuan", "tidak paranoid", "percaya institusi", "tidak menutup diri", "percaya keputusan", "percaya nasihat", "percaya pengalaman", "tidak menyimpan dendam",
  "percaya anak", "percaya masa depan", "percaya diri sendiri", "percaya kemampuan", "percaya pertolongan", "percaya rencana Tuhan", "percaya kebetulan", "percaya nilai", "tidak mencurigai", "berpikir positif terhadap orang",
  "berprasangka positif", "percaya akan niat baik", "menerima informasi dengan terbuka", "percaya pada sistem", "percaya proses kehidupan", "berani percaya", "percaya orang terdekat", "percaya teman dekat", "percaya rekan kerja", "percaya pada bantuan",
  "percaya perubahan", "percaya pemimpin", "tidak curiga berlebihan", "memberi kepercayaan", "tidak penuh kecurigaan", "percaya ketulusan", "percaya pengalaman orang lain", "berani membuka diri", "percaya masa lalu tidak menentukan masa depan", "percaya keadilan",
  "percaya keberuntungan", "percaya dukungan", "percaya semesta", "percaya intuisi", "percaya pada harapan", "tidak overthinking", "percaya pada jalannya", "percaya pada hubungan", "percaya pasangan setia", "percaya rezeki",
  "percaya pada keputusan bersama", "percaya takdir", "percaya pada kemungkinan", "percaya dalam hubungan", "percaya pada niat seseorang", "percaya pada arahan", "percaya aturan", "percaya spiritualitas", "percaya masa depan cerah", "percaya kebaikan orang",
  "percaya bahwa orang berubah", "percaya akan hasil usaha", "percaya semua akan baik", "percaya pada kesabaran", "percaya cinta", "percaya nilai kehidupan", "percaya pengampunan", "percaya pemulihan", "percaya akan waktu", "percaya hikmah"
  ],
  respect: [
  "menghargai", "hormat", "respek", "toleransi", "mendengarkan", "bertukar pikiran", "diskusi sehat", "tidak memaksakan", "menghormati pilihan", "mengerti sudut pandang lain",
  "menghargai waktu", "menghargai privasi", "menghormati ruang pribadi", "tidak memotong pembicaraan", "sabar saat mendengar", "tidak menggurui", "tidak menghakimi", "berpikiran terbuka",
  "menghargai proses", "menghargai orang tua", "menghormati atasan", "menghormati guru", "menghormati anak", "menghormati yang berbeda", "menerima kritik", "tidak sinis",
  "tidak merendahkan", "tidak mengejek", "menghargai pendapat", "menghargai keputusan", "menghormati aturan", "menghargai perbedaan", "bersikap dewasa", "berdiskusi sehat",
  "menghormati kesepakatan", "beretika", "menghargai pengalaman", "tidak sarkas", "tidak nyinyir", "tidak menghina", "menghargai waktu orang lain", "berkompromi",
  "tidak egois", "tidak mendominasi", "menghargai usaha", "menghargai kerja keras", "berterima kasih", "menghormati privasi", "mengakui jasa", "memberi tempat bicara", "tidak menginterupsi",
  "mendengarkan sampai selesai", "memahami konteks", "tidak meremehkan", "tidak menyela", "menghormati hak", "menghargai pendapat berbeda", "tidak mengabaikan", "tidak memotong kalimat",
  "menghormati keyakinan", "tidak membandingkan", "menghargai kontribusi", "membiarkan orang selesai bicara", "menghormati batasan", "menghargai keputusan pribadi", "tidak menertawakan", "tidak mengecilkan",
  "menghormati budaya", "tidak menyudutkan", "menghargai ruang diskusi", "mengakui pendapat orang lain", "menghindari hinaan", "menghargai sudut pandang", "tidak bersikap kasar",
  "menghormati pilihan hidup", "menghargai keragaman", "tidak menyela pembicaraan", "berbicara sopan", "tidak menyindir", "menghargai usaha sekecil apapun", "tidak memaksakan pendapat",
  "menghargai hak orang lain", "menghormati keputusan tim", "berdiskusi tanpa menyerang", "menghargai pendengar", "tidak berbicara sambil marah", "tidak mengintimidasi", "menghormati kesepakatan bersama",
  "menghargai orang meskipun berbeda", "tidak egois dalam diskusi", "menghindari debat kusir", "memberi apresiasi", "menghormati perasaan", "menghargai latar belakang", "tidak bersikap merendahkan",
  "menghindari kata kasar", "menghargai orang meskipun tidak sepaham", "tidak memonopoli obrolan", "menghargai batas waktu", "menghargai hak bicara", "menghindari nada tinggi", "berbicara dengan empati", "menghindari provokasi"
  ],
  ego: [
  "egois", "keras kepala", "merasa paling benar", "tidak mau kalah", "tidak fleksibel", "sulit minta maaf", "selalu merasa benar", "merasa paling tahu", "tidak mendengarkan", "dominan",
  "ingin menang sendiri", "meremehkan", "tidak menerima kritik", "sulit menerima masukan", "tidak sadar salah", "membela diri", "mau kontrol", "tidak introspeksi", "cepat tersinggung", "mau dikagumi",
  "merasa hebat", "ingin di atas", "suka menyalahkan", "tidak mau kalah debat", "merasa spesial", "mementingkan diri", "tidak empatik", "tidak merasa bersalah", "menyalahkan keadaan", "defensif",
  "mementingkan opini sendiri", "tidak memahami orang lain", "tidak peduli sekitar", "mau diutamakan", "ngotot", "keras", "tidak rukun", "sulit kerja tim", "merasa lebih baik", "tidak mau dikritik",
  "tidak rendah hati", "mau kontrol semua", "suka mendominasi", "menekan orang lain", "tidak toleran", "tidak reflektif", "suka menuntut", "sulit berdamai", "anti kritik", "harus menang",
  "tidak mau kalah argumen", "tidak peka", "ingin dipuji", "mau dianggap benar", "ingin tampil", "ingin pengakuan", "selalu ingin didengar", "tidak mau disalahkan", "tidak mau disangkal", "menyalahkan orang lain",
  "tidak mengakui kesalahan", "suka membandingkan", "ingin dihormati", "tidak kompromi", "selalu merasa diserang", "tidak mau dipimpin", "tidak terima saran", "merasa disudutkan", "selalu ingin validasi",
  "tidak mau mengalah", "merasa paling penting", "mau perhatian", "memaksakan kehendak", "bersikeras", "tidak rela disalahkan", "tidak mau kalah pintar", "mendominasi pembicaraan", "tidak sabar dikritik", "memotong pembicaraan",
  "tidak mau introspeksi", "sulit diajak diskusi", "ingin diprioritaskan", "membela pendapat sendiri", "sulit kompromi", "tidak mau ditentang", "suka mendikte", "menghindari tanggung jawab", "cari pembenaran", "selalu ingin benar",
  "tidak bisa netral", "terlalu percaya diri", "keras dalam opini", "tidak bisa diajak kerjasama", "tidak objektif", "menyangkal kesalahan", "selalu merasa benar sendiri", "tidak mendengar pendapat", "berpikir sepihak", "menguasai percakapan"
  ]
};

const traitResponses = {
  happiness: {
    10: "Kamu tampaknya sedang mengalami kesulitan menemukan kebahagiaan dalam hidup sehari-hari.",
    20: "Kebahagiaanmu belum terlalu terasa dalam narasi, mungkin masih tertutupi kekhawatiran.",
    30: "Ada sedikit sinyal kebahagiaan, walau belum terlalu menonjol.",
    40: "Kamu mulai menunjukkan tanda-tanda menikmati hidup dengan lebih positif.",
    50: "Keseimbangan emosionalmu cukup terlihat, antara bahagia dan serius.",
    60: "Kamu terlihat cukup bahagia dan bisa menularkan semangat ke orang lain.",
    70: "Rasa bahagiamu kuat, kamu tahu cara menikmati momen kecil.",
    80: "Kamu cenderung selalu ceria dan bersyukur dalam berbagai kondisi.",
    90: "Energi positifmu sangat kuat dan menginspirasi orang sekitar.",
    100: "Kamu berada di puncak ekspresi kebahagiaan. Hidup terasa penuh warna bagimu."
  },
  kindness: {
    10: "Sifat empati dan kepedulianmu belum terlalu terlihat.",
    20: "Kamu belum begitu menonjol dalam hal kebaikan hati atau perhatian pada orang lain.",
    30: "Kamu kadang menunjukkan empati, walau masih dalam batas tertentu.",
    40: "Ada kecenderungan ingin membantu, tapi mungkin masih selektif atau berhati-hati.",
    50: "Kebaikanmu cukup seimbang. Kamu bisa peduli namun tetap menjaga batas.",
    60: "Kamu dikenal sebagai pribadi yang ringan tangan dan perhatian.",
    70: "Empatimu kuat dan kamu mudah tersentuh oleh kebutuhan orang lain.",
    80: "Kebaikan hati kamu sangat jelas terlihat, bahkan tanpa diminta.",
    90: "Kamu sangat dermawan dan punya jiwa sosial tinggi.",
    100: "Kebaikan adalah inti dari karaktermu. Kamu hadir sebagai penguat bagi orang lain."
  },
  optimism: {
    10: "Pandanganmu cenderung pesimis dan penuh keraguan terhadap masa depan.",
    20: "Kamu merasa khawatir dan sering ragu akan hal-hal baik yang bisa terjadi.",
    30: "Masih ada ruang harapan, meskipun dipenuhi banyak keraguan.",
    40: "Kamu cukup realistis, meskipun kadang kurang percaya diri.",
    50: "Optimisme dan kewaspadaanmu cukup seimbang.",
    60: "Kamu memiliki sikap positif dalam menghadapi hidup.",
    70: "Keyakinanmu akan masa depan cukup kuat dan memberi energi.",
    80: "Kamu sangat percaya bahwa hal baik akan datang bila kamu berusaha.",
    90: "Kamu melihat peluang dalam setiap tantangan.",
    100: "Kamu adalah sumber harapan dan inspirasi, bahkan di tengah kesulitan."
  },
  trust: {
    10: "Kamu tampak sulit membuka diri dan memberi kepercayaan pada orang lain.",
    20: "Ada rasa ragu dan ketidakpastian terhadap hubungan interpersonal.",
    30: "Kamu kadang bisa percaya, tapi tetap diliputi kehati-hatian.",
    40: "Kamu terbuka pada orang-orang tertentu saja.",
    50: "Kepercayaanmu seimbang, antara terbuka dan menjaga jarak.",
    60: "Kamu bisa membangun relasi saling percaya dengan cukup baik.",
    70: "Orang cenderung percaya padamu karena kamu pun percaya pada mereka.",
    80: "Kamu punya kemampuan tinggi membangun keterbukaan dan koneksi emosional.",
    90: "Kepercayaan sangat penting bagimu dalam menjalin hubungan.",
    100: "Kamu mewujudkan makna sejati dari kepercayaan. Relasi yang kamu bangun penuh keterbukaan dan saling menghargai."
  },
  respect: {
    10: "Kamu tampak belum terlalu menghargai perbedaan atau pandangan lain.",
    20: "Sikap saling menghormati masih perlu diasah.",
    30: "Kamu memiliki keinginan untuk menghargai orang lain, walau belum konsisten.",
    40: "Ada upaya untuk bersikap terbuka, tapi masih terbatas.",
    50: "Sikap respek kamu cukup baik, terutama dalam komunikasi terbuka.",
    60: "Kamu mampu mendengarkan dan memahami sudut pandang berbeda.",
    70: "Kamu cukup dewasa dalam berdiskusi tanpa menghakimi.",
    80: "Rasa hormat kamu pada orang lain sangat kuat, bahkan dalam perbedaan besar.",
    90: "Kamu mendorong lingkungan yang sehat, penuh toleransi dan kesetaraan.",
    100: "Kamu adalah panutan dalam hal respek dan toleransi terhadap sesama."
  },
  ego: {
    10: "Kamu sangat rendah hati dan tidak terlalu mementingkan diri sendiri.",
    20: "Kamu memiliki keinginan kuat untuk memahami orang lain sebelum diri sendiri.",
    30: "Ego kamu cukup rendah, meski kadang tetap ingin didengar.",
    40: "Kamu menjaga keseimbangan antara kepentingan diri dan orang lain.",
    50: "Ego kamu normal, tapi tidak mendominasi.",
    60: "Kamu punya rasa percaya diri yang cukup besar.",
    70: "Kamu cukup dominan, kadang sulit menerima masukan.",
    80: "Ego kamu cenderung tinggi, ingin diakui dan memimpin.",
    90: "Kamu punya keinginan kuat untuk menjadi pusat perhatian.",
    100: "Ego menjadi kekuatan dominan dalam sikap dan tindakanmu."
  }
};

// ======== BOOLEAN MATCHING SYSTEM & TRAIT SCORING ======== //

function deteksiKeyword(teks, keywordMap) {
  const hasil = {};
  const teksLower = teks.toLowerCase();
  for (const kategori in keywordMap) {
    hasil[kategori] = keywordMap[kategori].some(k => teksLower.includes(k));
  }
  return hasil;
}

function hitungSkorTrait(teks, traitMap) {
  const hasil = {};
  const teksLower = teks.toLowerCase();
  for (const trait in traitMap) {
    const jumlah = traitMap[trait].filter(k => teksLower.includes(k)).length;
    const skor = Math.min(15 + jumlah * 14, 100);
    hasil[trait] = skor;
  }
  return hasil;
}

function getTraitDescription(trait, score) {
  const lowerTrait = trait.toLowerCase();
  if (score >= 100) return `Sifat ${lowerTrait} sangat dominan. Anda menunjukkan kualitas ini secara konsisten dan kuat.`;
  if (score >= 90) return `Sifat ${lowerTrait} terlihat sangat jelas. Anda cenderung memperlihatkan karakter ini secara alami.`;
  if (score >= 80) return `Kecenderungan ${lowerTrait} Anda kuat. Sifat ini merupakan bagian penting dari kepribadian Anda.`;
  if (score >= 70) return `Anda cukup menonjol dalam ${lowerTrait}. Hal ini terlihat dari beberapa ekspresi Anda.`;
  if (score >= 60) return `Ada indikasi kuat bahwa Anda memiliki sifat ${lowerTrait}, meskipun tidak selalu dominan.`;
  if (score >= 50) return `Sifat ${lowerTrait} berada di tingkat sedang. Kadang terlihat, kadang tidak begitu mencolok.`;
  if (score >= 40) return `Ada jejak sifat ${lowerTrait}, namun belum terlalu kuat atau konsisten.`;
  if (score >= 30) return `Sifat ${lowerTrait} Anda masih lemah. Belum cukup terlihat dalam narasi.`;
  if (score >= 20) return `Indikasi sifat ${lowerTrait} sangat minim. Mungkin tidak menjadi ciri utama Anda.`;
  if (score >= 10) return `Sifat ${lowerTrait} hampir tidak muncul. Perlu banyak penguatan jika ingin dikembangkan.`;
  return `Sifat ${lowerTrait} tidak terdeteksi dalam deskripsi Anda.`;
}

function tampilkanHasil(skor) {
  for (const trait in skor) {
    const nilai = skor[trait];
    const nilaiBulat = Math.round(nilai / 10) * 10;
    const persenEl = document.querySelector(`#trait-${trait} .persen`);
    const fillEl = document.querySelector(`#trait-${trait} .fill`);
    const descEl = document.querySelector(`#trait-${trait} .trait-desc`);
    persenEl.innerText = `${nilai}%`;
    fillEl.style.width = `${nilai}%`;

    const deskripsiUtama = traitResponses[trait][nilaiBulat] || "Belum ada deskripsi.";
    const deskripsiTambahan = getTraitDescription(trait, nilai);

    descEl.innerHTML = `
      <div>${deskripsiUtama}</div>
      <div style="margin-top: 6px; font-style: italic; color: #ffa6fe;">${deskripsiTambahan}</div>
    `;
  }
}

// ======= ANALISIS PSIKOLOGI DARI SKOR ======= //

function analisisPsikologiBerdasarkanSkor(skor) {
  let tipe = "-";
  let emosi = "-";
  let aware = "-";
  let defense = "-";

  // ===== TIPE KEPRIBADIAN ===== //
  if (skor.optimism >= 70 && skor.trust >= 60) {
    tipe = "Ekstrovert";
  } else if (skor.optimism <= 40 && skor.respect <= 50) {
    tipe = "Introvert";
  } else {
    tipe = "Ambivert";
  }

  // ===== EMOSIONALITAS ===== //
  if (skor.happiness <= 40 || skor.optimism <= 40 || skor.ego >= 70) {
    emosi = "Cenderung Emosional";
  } else if (skor.happiness >= 60 && skor.optimism >= 60 && skor.ego <= 50) {
    emosi = "Cukup Stabil";
  } else {
    emosi = "Stabil dengan fluktuasi ringan";
  }

  // ===== SELF-AWARENESS ===== //
  if (skor.kindness >= 70 && skor.respect >= 70 && skor.ego <= 40) {
    aware = "Tinggi";
  } else if (skor.ego >= 80 || skor.kindness <= 40) {
    aware = "Rendah";
  } else {
    aware = "Sedang";
  }

  // ===== MEKANISME PERTAHANAN DIRI ===== //
  if (skor.ego >= 80 && skor.trust <= 40) {
    defense = "Penolakan (Denial)";
  } else if (skor.ego <= 40 && skor.optimism >= 60) {
    defense = "Rasionalisasi (Intellectualization)";
  } else if (skor.ego >= 50 && skor.happiness <= 30 && skor.trust <= 30) {
    defense = "Mekanisme proteksi diri tinggi";
  } else {
    defense = "Normal";
  }

  return { tipe, emosi, aware, defense };
}

// ===== EVENT ANALISIS ===== //

document.getElementById("analisisBtn").addEventListener("click", () => {
  const teks = document.getElementById("deskripsi").value.trim();
  if (teks === "") {
    alert("Silahkan isi deskripsi terlebih dahulu!");
    return;
  }

  const hasilSkor = hitungSkorTrait(teks, traitKeywords);
  tampilkanHasil(hasilSkor);

  const psiko = analisisPsikologiBerdasarkanSkor(hasilSkor);
  document.getElementById("psiko-tipe").innerText = psiko.tipe;
  document.getElementById("psiko-emosi").innerText = psiko.emosi;
  document.getElementById("psiko-aware").innerText = psiko.aware;
  document.getElementById("psiko-pertahanan").innerText = psiko.defense;
});

// ===== RESET BUTTON ===== //

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

// ===== SHARE BUTTON ===== //

document.getElementById("bagikanBtn").addEventListener("click", () => {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: "Analisis Diri",
      text: "Lihat hasil analisis deskripsi diriku!",
      url: url
    }).catch(err => {
      console.error("Gagal berbagi:", err);
      alert("Gagal berbagi. Pastikan browser kamu mendukung fitur ini.");
    });
  } else {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link telah disalin ke clipboard. Kamu bisa bagikan secara manual!");
    }).catch(err => {
      console.error("Gagal menyalin link:", err);
      alert("Gagal menyalin link. Gunakan browser yang lebih baru.");
    });
  }
});