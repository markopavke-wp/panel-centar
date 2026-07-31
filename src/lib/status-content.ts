/** Sadržaj i lokalne slike (ranije sa status-frigo.com/panel-centar) */

export const sfImages = {
  hero: "/images/hero.jpg",
  heroMobile: "/images/hero-mobile.jpg",
  projektovanje: "/images/projektovanje.jpg",
  isporuka: "/images/isporuka.jpg",
  isporuka2: "/images/isporuka-2.jpg",
  montaza: "/images/montaza.jpg",
  montaza2: "/images/montaza-2.jpg",
  fasadni: "/images/fasadni.jpg",
  frigo: "/images/frigo.jpg",
  krovni: "/images/krovni.jpg",
  spektar: "/images/spektar.jpg",
  profilStandard: "/images/profil-standard.jpg",
  profilMikro: "/images/profil-mikro.jpg",
  profilRavna: "/images/profil-ravna.jpg",
  krovni1: "/images/krovni-1.jpg",
  krovni2: "/images/krovni-2.jpg",
  krovni3: "/images/krovni-3.jpg",
  zidni1: "/images/zidni-1.jpg",
  zidni2: "/images/zidni-2.jpg",
  spojStandard: "/images/spoj-standard.jpg",
  spojSkriveni: "/images/spoj-skriveni.jpg",
  metecno: "/images/metecno.jpg",
  terasteel: "/images/terasteel.jpg",
} as const;

export const intro = {
  tagline: "Integritet u svakom aspektu izgradnje.",
  lead:
    "Sendvič paneli su vrsta moderne, veoma lake, spremne za ugradnju zidne i krovne izolacije. Napravljeni su od izolacijskog jezgra od poliuretana ili mineralne vune sa završnim spoljnim i unutrašnjim slojem od pocinkovanog lima.",
};

export const services = [
  {
    title: "Projektovanje",
    text: "Kako bismo obezbedili Vašu maksimalnu uključenost u realizaciji željenih projekata, uz kvalitetna individualna rešenja, uključujemo i crteže detalja, proračune količina i finansija, kao i uvid u planove montaže.",
    image: sfImages.projektovanje,
  },
  {
    title: "Isporuka",
    text: "Isporuka panela vrši se na Vašu željenu adresu, nakon čega će biti spremni za samostalnu ugradnju ili ugradnju od strane našeg tima, uz celokupnu realizaciju projekta.",
    image: sfImages.isporuka,
  },
  {
    title: "Montaža",
    text: "Modus operandi naše firme je održavanje vrhunskog kvaliteta uz maksimalnu efikasnost. Zbog toga angažujemo pažljivo odabrane stručnjake da realizuju Vaš projekat i ugrade panele u najkraćem mogućem roku.",
    image: sfImages.montaza,
  },
] as const;

export const panelTypes = [
  {
    title: "Fasadni paneli",
    image: sfImages.fasadni,
    text: "Ako se teži modernom dizajnu industrijskih i javnih zgrada, termoizolacioni fasadni paneli sa skrivenim spojem i mogućnošću montiranja vertikalno i horizontalno su adekvatan izbor. Kvalitetna izolacija, brza izgradnja i estetski izgled zgrade postižu se uz pomoć različitih profila limova i odsustvom vijaka na fasadi. Fasadni paneli se proizvode sa izolacijom od tvrde poliuretanske pene (PUR), tvrde pene poliizocijanurata (PIR) ili mineralne vune (MW).",
    points: [
      "Skriveni spoj — bez vidljivih vijaka",
      "Vertikalna i horizontalna montaža",
      "Jezgro: PUR, PIR ili MW",
    ],
  },
  {
    title: "Frigo paneli",
    image: sfImages.frigo,
    text: "Sistem industrijskog hlađenja je očigledno nepotpun bez upotrebe termoizolacionih panela. Izrada komora sa kontrolisanom temperaturom i vlažnošću omogućena je performansama poput visokog stepena termoizolacije i raznolikosti debljine. Frigopaneli su samonosivi paneli sa izolacijom od poliuretana, upotrebljivom širinom 1000 mm i debljinom 60–120 mm.",
    points: [
      "Samonosivi paneli za rashladne komore",
      "Upotrebljiva širina 1000 mm",
      "Debljina 60–120 mm",
    ],
  },
  {
    title: "Krovni paneli",
    image: sfImages.krovni,
    text: "Krovni paneli se mogu koristiti za bilo koju vrstu termoizolovanih krovova sa minimalnim nagibom od 7%. Eliminisane su nuspojave poput curenja ili prašine uz pomoć preciznih spojeva krovnih panelnih ploča. Izolaciono jezgro može biti ispunjeno poliuretanskom penom PUR, poliizocijanuratnom penom PIR ili mineralnom vunom MW.",
    points: [
      "Minimalni nagib od 7%",
      "Precizni spojevi bez curenja",
      "Jezgro: PUR, PIR ili MW",
    ],
  },
] as const;

export const spektarText =
  "Odlična fizička i mehanička svojstva sendvič panela omogućava moderna tehnologija proizvodnje i izrada od visokokvalitetnih materijala, zbog čega je njihov spektar primene izuzetno širok. Odlikuju se velikom čvrstoćom koja omogućava smanjenje nosećih elemenata, krovnih i zidnih nosača, što dovodi do uštede materijala noseće konstrukcije i skraćenja vremena potrebnog za montažu. Efektivni sloj izolacije može smanjiti troškove i uštedeti puno energije — sendvič paneli se danas koriste kao prefabrikovani zidovi za škole, stambene zgrade, kancelarije, rashladne komore, vojne objekte, hangare, poljoprivredne objekte, skladišta i druge tipove.";

export const applicationsLead =
  "U savremenom društvu termoizolacioni paneli visokog kvaliteta, kao laka zidna i krovna izolacija, nalaze primenu u izgradnji različitih objekata — škole, stambene zgrade, kancelarije, rashladne komore, hangari, poljoprivredni objekti, skladišta, industrijski saloni i sportske hale samo su neki od njih.";

export const profiles = [
  { name: "Standard", image: sfImages.profilStandard },
  { name: "Mikrolinijska", image: sfImages.profilMikro },
  { name: "Ravna", image: sfImages.profilRavna },
] as const;

export const roofGallery = [
  sfImages.krovni1,
  sfImages.krovni2,
  sfImages.krovni3,
] as const;

export const wallGallery = [
  { image: sfImages.zidni1, label: null },
  { image: sfImages.zidni2, label: null },
  { image: sfImages.spojStandard, label: "Standardni spoj" },
  { image: sfImages.spojSkriveni, label: "Skriveni vijak" },
] as const;

export const manufacturers = [
  { name: "Metecno", image: sfImages.metecno },
  { name: "Terasteel", image: sfImages.terasteel },
] as const;

export const advantages = [
  {
    title: "Konstruktivna izvodljivost",
    text: "Geometriju Vaših zgrada će jedino ograničavati izabrana noseća konstrukcija ukoliko koristite sendvič panele, jer su uz njihovu primenu konstruktivna izvodljivost i visina zgrada neograničene.",
  },
  {
    title: "Rekonstrukcija i premeštaj",
    text: "Zgrade se mogu lako proširiti i renovirati bez ozbiljnih promena aktivnosti u istim, zahvaljujući konstruktivnoj fleksibilnosti sendvič panela. Praktično ne postoje tehnička ili ekonomska ograničenja — čak se i lokacija zgrade može promeniti.",
  },
  {
    title: "Mehaničke tehnike povezivanja",
    text: "Povezivanje zidnih elemenata postiže se metodom „zub–žleb“ (spoljna montaža) ili „dupli zub–žleb“ (unutrašnja montaža). Kod krovnih panela koristi se standardno gornje preklapanje dodatnog profila sa susednim panelom. Veze otporne na vlagu primenjuju se kod rashladnih prostora i komora minusnih temperatura.",
  },
  {
    title: "Termoizolacija i ušteda energije",
    text: "Apsolutna otpornost na paru omogućena je metalnim površinama. Tvrda poliuretanska pena ima najniže provođenje toplote u poređenju sa ostalim često korišćenim izolacijskim materijalima, pa se postiže velika efikasnost sa relativno tankim panelima.",
  },
  {
    title: "Zvučna izolacija",
    text: "Paneli sa jezgrom od kamene vune debljine 100 mm smanjuju nivo šuma sa R'w = 34 dB pri gustini 100 kg/m³. Paneli sa izolacijom od poliuretana smanjuju nivo šuma sa R'w = 25 dB.",
  },
  {
    title: "Ušteda prostora",
    text: "Za U=0,3 W/m²K dovoljna je debljina od 80 mm za PUR panel, odnosno 100 mm za panel od kamene vune — dok betonski zid sa izolacijom dostiže ukupno oko 465 mm.",
  },
  {
    title: "Otpornost na požar",
    text: "Izolacijsko jezgro od poliizocijanuratske tvrde pene ima klasu zapaljivosti B2, dok kompletni element dostiže klasu B1. Paneli sa izolacijskim jezgrom od mineralne vune su nezapaljivi.",
  },
  {
    title: "Troškovi i amortizacija",
    text: "Sa aspekta operativnih troškova i održavanja, prednosti sendvič panela su jasne zbog uštede energije. Mala sopstvena težina smanjuje troškove noseće konstrukcije. Paneli ne zahtevaju održavanje, a zaštita od korozije garantovana je kvalitetom obloge.",
  },
] as const;

export const contactEmail = "panelcentar@status-frigo.com";
