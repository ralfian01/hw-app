const data = {
  data_paket: {
    beranda: [
      {
        id: 1,
        name: "Silver",
        price: 15000000,
        image: "assets/img/paket/prewed/prewedding-1.jpeg"
      },
      {
        id: 2,
        name: "Gold",
        price: 40000000,
        image: "assets/img/paket/prewed/prewedding-2.jpeg"
      },
      {
        id: 3,
        name: "Platinum",
        price: 70000000,
        image: "assets/img/paket/prewed/prewedding-3.jpeg"
      }
    ],

    more_paket: {
      prewedding: [
        {
          id: 1,
          name: "Silver",
          price: 15000000,
          image: "assets/img/paket/prewed/prewedding-1.jpeg",
          detailpaket: {
            pelayanan: [
              "1 konsep  (indoor/outdoor)",
              "Sesi foto 2 jam (indoor/outdoor)"
            ],
            barang: [
              "20 file yang sudah di edit",
              "Cetak foto 4R 10 lembar",
              "Album foto 10x10 cm",
              "Video highlight 1 menit"
            ]
          }
        },
        {
          id: 2,
          name: "Gold",
          price: 40000000,
          image: "assets/img/paket/prewed/prewedding-2.jpeg",
          detailpaket: {
            pelayanan: ["2 konsep  (indoor/outdoor)", "4 jam sesi foto"],
            barang: [
              "40 file yang sudah di edit",
              "Cetak foto 4R 20 lembar",
              "Album foto 20x20 cm",
              "Video highlight 2 menit"
            ]
          }
        },
        {
          id: 3,
          name: "Platinum",
          price: 70000000,
          image: "assets/img/paket/prewed/prewedding-3.jpeg",
          detailpaket: {
            pelayanan: ["3 konsep  (indoor/outdoor)", "Sesi foto 6 jam"],
            barang: [
              "60 file yang sudah di edit",
              "Cetak foto 4R 30 lembar",
              "Album foto 30x30 cm",
              "Video highlight 3 menit"
            ]
          }
        }
      ],

      wedding: [
        {
          id: 1,
          name: "Ruby",
          price: 50000000,
          image: "assets/img/paket/wedding/wedding-1.jpg",
          detailpaket: {
            pelayanan: [
              "2 konsep  (indoor/outdoor)",
              "Kue pernikahan (ukuran medium)",
              "2 set pakaian pernikahan",
              "8 jam sesi foto & video",
              "Makanan untuk 50 tamu undangan",
              "Makeup & hairdo untuk kedua mempelai"
            ],
            barang: [
              "80 file yang sudah di edit",
              "Album foto 30x30 cm",
              "Cetak foto 4R 60 lembar",
              "Video klip 5 menit"
            ]
          }
        },
        {
          id: 2,
          name: "Saphire",
          price: 150000000,
          image: "assets/img/paket/wedding/wedding-2.jpg",
          detailpaket: {
            pelayanan: [
              "3 konsep  (indoor/outdoor)",
              "Kue pernikahan (ukuran large)",
              "3 set pakaian pernikahan",
              "10 jam sesi foto & video",
              "Makanan untuk 100 tamu undangan",
              "Makeup & hairdo untuk kedua mempelai"
            ],
            barang: [
              "100 file yang sudah di edit",
              "Album foto 40x40 cm",
              "Cetak foto 4R 80 lembar",
              "Video klip 7 menit"
            ]
          }
        },
        {
          id: 3,
          name: "Emerald",
          price: 250000000,
          image: "assets/img/paket/wedding/wedding-3.jpg",
          detailpaket: {
            pelayanan: [
              "4 konsep  (indoor/outdoor)",
              "Kue pernikahan (ukuran extra large)",
              "4 set pakaian pernikahan",
              "12 jam sesi foto & video",
              "Makanan untuk 200 tamu undangan",
              "Makeup & hairdo untuk kedua mempelai"
            ],
            barang: [
              "150 file yang sudah di edit",
              "Album foto 50x50 cm hardcover",
              "Cetak foto 4R 100 lembar",
              "Video klip 10 menit"
            ]
          }
        }
      ],

      engagement: [
        {
          id: 1,
          name: "Aquamarine",
          price: 30000000,
          image: "assets/img/paket/enggement/enggement-1.jpg",
          detailpaket: {
            pelayanan: ["1 lokasi tempat (indoor/outdoor)", "Sesi foto 1 jam"],
            barang: [
              "10 file yang sudah di edit",
              "Album foto 15x15 cm",
              "Cetak foto 4R 10 lembar"
            ]
          }
        },
        {
          id: 2,
          name: "Pearl",
          price: 70000000,
          image: "assets/img/paket/enggement/enggement-2.jpg",
          detailpaket: {
            pelayanan: ["1 lokasi tempat (indoor/outdoor)", "Sesi foto 2 jam"],
            barang: [
              "20 file yang sudah di edit",
              "Album foto 20x20 cm",
              "Cetak foto 4R 20 lembar"
            ]
          }
        },
        {
          id: 3,
          name: "Obsidian",
          price: 100000000,
          image: "assets/img/paket/enggement/enggement-3.jpg",
          detailpaket: {
            pelayanan: ["2 lokasi tempat (indoor/outdoor)", "Sesi foto 3 jam"],
            barang: [
              "30 file yang sudah di edit",
              "Album foto 25x25 cm",
              "Cetak foto 4R 30 lembar",
              "2 menit Video highlight"
            ]
          }
        }
      ],

      add_on: [
        {
          id: 1,
          name: "FireCrackers",
          price: 10000000,
          image: "assets/img/paket/add-on/add-on-1.jpg",
          informasi: [
            "Kembang api 10 batang (ukuran besar)",
            "Kembang api ukuran kecil isi 16 (5 buah)",
            "Durasi 5 - 10 menit"
          ]
        },
        {
          id: 2,
          name: "Sparkle",
          price: 5000000,
          image: "assets/img/paket/add-on/add-on-2.jpg",
          informasi: [
            "Lampu jaring 10x10 meter",
            "Warna lampu bisa disesuaikan",
            "Durasi pemakaian 4 jam"
          ]
        },
        {
          id: 3,
          name: "Smoke",
          price: 5000000,
          image: "assets/img/paket/add-on/add-on-3.jpg",
          informasi: [
            "Mesin smoke 1 unit",
            "Cairan smoke 3 liter",
            "Durasi 2 jam"
          ]
        },
        {
          id: 4,
          name: "Live music & DJ",
          price: 20000000,
          image: "assets/img/paket/add-on/add-on-4.jpg",
          informasi: [
            "Musisi/penyanyi 2 orang",
            "Lama pertunjukan 2 jam",
            "DJ 1 orang",
            "Durasi DJ 4 jam",
            "Sound system & lighting"
          ]
        }
      ]
    }
  },
  data_portofolio: [
    {
      id: 1,
      title: "Journey of Love: Our weddings Moments",
      desc: "Bandung Dec 17, 2023 at Jl. Asia Afrika",
      image: "assets/img/portofolio/portofolio-1.jpeg"
    },
    {
      id: 2,
      title: "Love Unveiled: Our Journey Together",
      desc: "Bandung Dec 17, 2023 at Jl. Asia Afrika",
      image: "assets/img/portofolio/portofolio-3.jpeg"
    },
    {
      id: 3,
      title: "Whispers of Forever: Chronicles of Our weddings",
      desc: "Bandung Dec 17, 2023 at Jl. Asia Afrika",
      image: "assets/img/portofolio/portofolio-2.jpeg"
    }
  ],

  kolleksi_slide: [
    "assets/img/collection/collection-1.jpeg",
    "assets/img/collection/collection-2.jpeg",
    "assets/img/collection/collection-3.jpeg",
    "assets/img/collection/collection-4.jpeg",
    "assets/img/collection/collection-5.jpeg",
    "assets/img/collection/collection-6.jpeg"
  ],

  koleksi_poto: [
    "assets/img/collection/collection-1.jpeg",
    "assets/img/collection/collection-2.jpeg",
    "assets/img/collection/collection-3.jpeg",
    "assets/img/collection/collection-4.jpeg",
    "assets/img/collection/collection-5.jpeg",
    "assets/img/collection/collection-6.jpeg",
    "assets/img/collection/collection-7.jpeg",
    "assets/img/collection/collection-8.jpeg",
    "assets/img/collection/collection-9.jpeg",
    "assets/img/collection/collection-10.jpeg",
    "assets/img/collection/collection-11.jpeg",
    "assets/img/collection/collection-12.jpeg",
    "assets/img/collection/collection-13.jpeg",
    "assets/img/collection/collection-14.jpeg",
    "assets/img/collection/collection-15.jpeg",
    "assets/img/collection/collection-16.jpeg",
    "assets/img/collection/collection-17.jpeg",
    "assets/img/collection/collection-18.jpg",
    "assets/img/collection/collection-19.jpg",
    "assets/img/collection/collection-20.jpg",
    "assets/img/collection/collection-21.jpg"
  ]
};

export default data;
