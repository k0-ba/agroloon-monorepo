import type { Dictionary } from "./index";

const hu: Dictionary = {
  hero: {
    title: "Nagy felbontás a sztratoszférából",
    description: `
      Új generációs magaslégköri ballon technológiát fejlesztünk megfigyelésekhez,
      hogy segítsük a gazdák döntéseit és javítsuk a mezőgazdasági előrejelzéseket.
    `.trim(),
    schedule: "Időpont egyeztetése",
    getStarted: "Kezdd el",
  },
  why: {
    title: "Miért az Agroloon?",
    paragraph1: `
      Az Agroloon célja, hogy forradalmasítsa a mezőgazdasági előrejelzéseket
      egy új generációs magaslégköri ballon technológia segítségével. Ez az újítás támogatja a gazdák döntéshozatalát és javítja a mezőgazdasági
      kiszámíthatóságot a sztratoszférából készült nagy felbontású képekkel.
    `.trim(),
    paragraph2: `
      Rendszerünk óránkénti pontossággal képes kimutatni a legkisebb eltéréseket is
      a földeken, ami segíti a károk felmérését és a terméshozam előrejelzését.
      Soha nem látott rálátást biztosít a növényállapotra és a földek állapotára,
      így a mezőgazdasági szereplők adatvezérelt döntéseket hozhatnak, amivel
      optimalizálhatják a termést és csökkenthetik a pazarlást.
    `.trim(),
    whoWeServe: "ügyfeleink",
    serveItems: {
      farmers: "Gazdák",
      agribusinesses: "Mezőgazdasági vállalkozások",
      insurance: "Biztosítótársaságok",
      government: "Állami intézmények",
      research: "Kutatóintézetek",
      consultants: "Mezőgazdasági tanácsadók",
    },
  },
  what: {
    title: "Megoldásaink",
    paragraph1: `
      Az Agroloon egy magaslégköri ballonrendszert kínál, amely képes
      folyamatosan figyelni a mezőgazdasági területek állapotát. A rendszer 5x5
      cm-es felbontású, extra részletes képeket készít, ami körülbelül 600%-kal
      jobb, mint az átlagos műholdképek minősége.
    `.trim(),
    paragraph2: `
      Ez lehetővé teszi a legapróbb változások észlelését is órás bontásban,
      segítve a pontos károk felmérését és a terméshozam előrejelzését. Ráadásul
      az Agroloon szolgáltatása költséghatékony: az adatokat a jelenlegi
      módszereknél kevesebb mint fele áron biztosítjuk, folyamatos, 24/7
      elérhetőséggel és pontosabb eredményekkel.
    `.trim(),
    byTheNumbers: "számokban",
    stats: [
      {
        value: "600%",
        description: "Jobb minőség, mint az átlagos műholdképek",
      },
      {
        value: "5\u00D75 cm",
        description: "Ultra-magas képpontonkénti felbontás",
      },
      {
        value: "50%",
        description: "Olcsóbb, mint a jelenlegi megfigyelési módszerek",
      },
    ],
  },
  cta: {
    title: "Készen állsz, hogy digitalizáld mezőgazdasági döntéseid?",
    description: `
      Ismerd meg a precíziós mezőgazdaság erejét! Az Agroloon fejlett
      képfeldolgozó megoldásaival olyan betekintést kapsz, ami segít jobb
      döntéseket hozni és fenntartható növekedést elérni.
    `.trim(),
    getStarted: "Kezdd el",
    schedule: "Időpont egyeztetése",
  },
  footer: {
    slogan: "Nagy felbontás a sztratoszférából",
    company: {
      header: "Cég",
      aboutUs: "Rólunk",
      careers: "Karrier",
      news: "Hírek",
      contact: "Kapcsolat",
    },
    solutions: {
      header: "Megoldásaink",
      fieldMonitoring: "Területfigyelés",
      yieldPrediction: "Terméshozam-előrejelzés",
      damageAssessment: "Kárfelmérés",
      precisionFarming: "Precíziós gazdálkodás",
    },
    for: {
      header: "Kinek",
      farmers: "Gazdáknak",
      agribusinesses: "Mezőgazdasági vállalkozásoknak",
      insuranceCompanies: "Biztosítótársaságoknak",
      governmentAgencies: "Állami intézményeknek",
    },
    resources: {
      header: "Források",
      blog: "Blog",
      caseStudies: "Esettanulmányok",
      privacyPolicy: "Adatvédelmi irányelvek",
      termsOfService: "Felhasználási feltételek",
    },
  },
};

export default hu;
