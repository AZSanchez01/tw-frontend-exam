const blogImages = import.meta.glob(
  "../Article-Images/Blogs/*.{jpg,png,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

const reportImages = import.meta.glob(
  "../Article-Images/Reports/*.{jpg,png,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

const sportsImages = import.meta.glob(
  "../Article-Images/Sports/*.{jpg,png,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

const blogs = [
  {
    title: "Ang Agosto 2023 ay isang mabatong daan",
    subtitle:
      "Hindi kagulat-gulat ang huminto muna at huminga ngayong Agosto dahil sa sunod-sunod na mga pangyayaring may dalang kunot ng noo, tawa, at malalim na pag-iisip.",
    genre: "blogs",
    date: "August 31, 2023",
    image:
      blogImages[
        "../Article-Images/Blogs/[1] Ang Agosto 2023 ay isang mabatong daan.png"
      ],
    content: "",
  },
  {
    title: "Liham para sa isang batang Tomasino",
    subtitle:
      "Hindi ko muna sasabihin sa iyo kung ano ang mangyayari, pero ito lang ang ibibigay ko sa'yo: Lahat ng pagdadaanan mo ay may dahilan.",
    genre: "blogs",
    date: "August 17, 2023",
    image:
      blogImages[
        "../Article-Images/Blogs/[2] Liham para sa isang batang Tomasino.png"
      ],
    content: "",
  },
  {
    title:
      "Yakapin ang bawat sandali, Tomasino!: Mga payo para sa unang taon sa kolehiyo",
    subtitle:
      "Sa pagtawid sa ilalim ng arko, dalhin ang mga payong ito para sanggain ang bawat patak ng ulan at kayanin ang unang taon sa kolehiyo.",
    genre: "blogs",
    date: "August 11, 2023",
    image:
      blogImages[
        "../Article-Images/Blogs/[3] Yakapin ang bawat sandali, Tomasino! Mga payo para sa unang taon sa kolehiyo.png"
      ],
    content: "",
  },
  {
    title: "‘Barbie’ celebrates and criticizes the complexities of womanhood",
    subtitle:
      "Greta Gerwig balances the pinks and pastels of Barbie Land, and the blunt grayness of a patriarchal society in one of the most anticipated films of the year.",
    genre: "blogs",
    date: "July 31, 2023",
    image:
      blogImages[
        "../Article-Images/Blogs/[4] ‘Barbie’ celebrates and criticizes the complexities of womanhood.png"
      ],
    content: "",
  },
];

const reports = [
  {
    title:
      "Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school",
    subtitle:
      "367 mula sa 391 na mga Tomasinong kumuha ng pagsusulit ang nakapasa dahilan upang itanghal na pang lima ang Unibersidad sa mga top-performing schools sa August 2023 MTLE.",
    genre: "reports",
    date: "August 21, 2023",
    image:
      reportImages[
        "../Article-Images/Reports/[1] Mga Tomasino humakot ng pwesto sa August 2023 MTLE UST itinanghal na fifth top-performing school.png"
      ],
    content: "",
  },
  {
    title: "Tomasino pasok sa top 10 ng kauna-unahang food tech boards",
    subtitle:
      "Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas.",
    genre: "reports",
    date: "August 16, 2023",
    image:
      reportImages[
        "../Article-Images/Reports/[2] Tomasino pasok sa top 10 ng kauna-unahang food tech boards.png"
      ],
    content: "",
  },
  {
    title:
      "Mga Tomasino nanguna sa August 2023 BLEPP; UST tinanghal na isa sa mga Top Performing-Schools",
    subtitle:
      "Pitong Tomasino ang nakasungkit ng pwesto sa August 2023 Psychometrician licensure examination habang isa naman para sa Psychology Licensure Examination.",
    genre: "reports",
    date: "August 09, 2023",
    image:
      reportImages[
        "../Article-Images/Reports/[3] Mga Tomasino nanguna sa August 2023 BLEPP UST tinanghal na isa sa mga Top Performing-Schools-min.png"
      ],
    content: "",
  },
  {
    title: "Tiongco: ‘Maging totoo sa sarili, mamayagpag’",
    subtitle:
      "ICYMI: Ayon kay Tiongco, hindi kailangang itago ang totoong sarili upang mapabilang sa paaralan dahil ang pagiging totoo pati na rin ang pagtitiwala ang bubuo ng makabuluhang koneksyon sa buhay",
    genre: "reports",
    date: "August 08, 2023",
    image:
      reportImages[
        "../Article-Images/Reports/[4] Tiongco ‘Maging totoo sa sarili, mamayagpag’.png"
      ],
    content: "",
  },
];

const sports = [
  {
    title: "Tiger Spikers jolt Blue Eagles for V-League top seat",
    subtitle:
      "The Tiger Spikers now hold a 5-1 win-loss card while the Blue Eagles dropped to 4-1 as the V-League semi-finals nears.",
    genre: "sports",
    date: "September 10, 2023",
    image:
      sportsImages[
        "../Article-Images/Sports/[1] Tiger Spikers jolt Blue Eagles for V-League top seat.png"
      ],
    content: `The UST Tiger Spikers extended their winning streak to five games after snapping the Ateneo Blue Eagles’ unbeaten run, 25-20, 25-23, 22-25, 25-15, to hold the top seat in the V-League Collegiate Challenge, September 10, at Paco Arena in Manila. 

Josh Ybanez eked out another outstanding performance for his third Player of the Game nod in the tournament as he notched 23 points off 18 excellent attacks, four blocks, and one service ace, lifting the Tiger Spikers to another win.

The Tiger Spikers now hold a 5-1 win-loss card while the Blue Eagles dropped to 4-1 as the semi-finals nears.

UST failed to fend off Ateneo in the third set as the Blue Eagles found momentum off emphatic attacks from its front lines to force an extension.

It was all Tiger Spikers from there, dominating the Blue Eagles with its crisp ball distribution and fast attacks to create a separation early in the fourth set and never look back.

"Out of all the teams, they were the ones we really focused on. I dedicated time to scouting them, but during the third set, we relaxed and our effort became half-hearted," said UST head coach Odjie Mamon on his team’s third-set efforts.

The Blue Eagles kept things close in the first two sets, but the Tiger Spikers stepped on the gas down the last stretches of each period to take an early 2-0 set lead.

Middle blocker Rainier Flor also paced the Tiger Spikers with 13 points off 11 excellent attacks, while Gboy De Vega added 12 points.

Meanwhile, the 6-foot-four rookie and former basketball player, Trevor Valera, was also a revelation down the stretch, scoring four points to contribute to the blocking and attacking departments of UST late in the last two sets.

The Tiger Spikers will face the San Beda University Red Lions next Friday, September 15.—with reports from R. Maglinao`,
  },
  {
    title: "Ang Liga: UST settles for another draw versus UP",
    subtitle:
      "Golden Booters’ veteran winger Chris Valderama answered back and scored the lone goal for UST right before halftime.",
    genre: "sports",
    date: "September 09, 2023",
    image:
      sportsImages[
        "../Article-Images/Sports/[2] Ang Liga UST settles for another draw versus UP.png"
      ],
    content: "",
  },
  {
    title: "EJ Obiena bounces back; takes top podium of ISTAF Berlin",
    subtitle:
      "Following a last-spot finish of 5.60m in the recent Wanda Diamond League in Zurich, Switzerland on Thursday (Friday in Manila), the Thomasian alumnus rebounded big time with a 5.92m clear in three attempts to claim the top spot of the outdoor tournament.",
    genre: "sports",
    date: "September 04, 2023",
    image:
      sportsImages[
        "../Article-Images/Sports/[3] EJ Obiena bounces back takes top podium of ISTAF Berlin.png"
      ],
    content: "",
  },
  {
    title:
      "Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win",
    subtitle:
      "Ybañez was virtually unstoppable in the match, posting 33 points off 29 attacks, three blocks, and one ace, punctuated by a cross-court hit that sealed the win and a semi-final berth for UST.",
    genre: "sports",
    date: "September 03, 2023",
    image:
      sportsImages[
        "../Article-Images/Sports/[4] Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win.png"
      ],
    content: "",
  },
];

const articles = { blogs, reports, sports };

export default articles;
