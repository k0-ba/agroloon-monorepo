"use client";

import { ScrollingGallery } from "@/components/scrolling-gallery"; // Adjust this import as necessary
import { Locale } from "@/utils/i18n";

interface GalleryImage {
  src: string;
  alt: { en: string; hu: string };
  note: { en: string; hu: string };
}

interface GallerySectionProps {
  locale: Locale;
}

export function GallerySection({ locale }: GallerySectionProps) {
  const topLayerImages: GalleryImage[] = [
    {
      src: "/upper-lake-tisza-scenic-view.jpg",
      alt: {
        en: "A breathtaking view of Lake Tisza with expansive, shimmering waters capturing its natural beauty",
        hu: "Lélegzetelállító kilátás a Tisza-tóra, kiterjedt, csillogó vizekkel, amelyek megmutatják a természet szépségét",
      },
      note: {
        en: "A stunning view of Lake Tisza with shimmering waters",
        hu: "Lenyűgöző kilátás a Tisza-tóra csillogó vízzel",
      },
    },
    {
      src: "/upper-infrared-water-mapping.jpg",
      alt: {
        en: "An infrared image that clearly distinguishes water bodies from the surrounding landscape",
        hu: "Infravörös kép, amely egyértelműen megkülönbözteti a vízfelületeket a környező tájtól",
      },
      note: {
        en: "Infrared imaging highlights water bodies distinctly",
        hu: "Az infravörös képek egyértelműen kiemelik a vízfelületeket",
      },
    },
    {
      src: "/upper-ndvi-visualization.jpg",
      alt: {
        en: "A data-driven visualization emphasizing the Normalized Difference Vegetation Index (NDVI) for assessing vegetation vigor",
        hu: "Adatközpontú vizualizáció, amely az NDVI-t emeli ki a növényesség értékeléséhez",
      },
      note: {
        en: "Visualizes NDVI to assess vegetation health",
        hu: "NDVI vizualizáció a növényzet egészségének értékeléséhez",
      },
    },
    {
      src: "/upper-cloud-identification.jpg",
      alt: {
        en: "A focused depiction of cloud formations, making it easy to identify individual clouds",
        hu: "A felhőformációk fókuszált ábrázolása, ami megkönnyíti az egyes felhők azonosítását",
      },
      note: {
        en: "Shows distinct cloud formations clearly",
        hu: "Egyértelműen mutatja a különálló felhőket",
      },
    },
    {
      src: "/upper-cloud-map-clarification.jpg",
      alt: {
        en: "A composite image using cloud mapping overlays to refine NDVI and other analyses for accurate data interpretation",
        hu: "Kompozit kép felhőtérképezési rétegekkel, amely finomítja az NDVI-t a pontos adatértelmezéshez",
      },
      note: {
        en: "Cloud maps refine NDVI and other data",
        hu: "A felhőtérképek finomítják az NDVI-t és más adatokat",
      },
    },
    {
      src: "/upper-false-color-analysis.jpg",
      alt: {
        en: "A vibrant false-colored image that enhances visual differences in the data for clearer analysis",
        hu: "Élénk, hamis színű kép, amely fokozza az adatok vizuális különbségeit a tisztább elemzés érdekében",
      },
      note: {
        en: "False-color imagery enhances data contrast",
        hu: "A hamis színű képek fokozzák az adatok kontrasztját",
      },
    },
    {
      src: "/upper-grvi-vegetation-health.jpg",
      alt: {
        en: "An analytical view that compares green and red spectral bands via GRVI to provide detailed insights into vegetation health",
        hu: "Analitikus nézet, amely összehasonlítja a zöld és piros sávokat a GRVI segítségével a növényzet egészségének értékeléséhez",
      },
      note: {
        en: "GRVI compares green and red bands for vegetation health",
        hu: "A GRVI összehasonlítja a zöld és piros sávokat a növényzet egészségéért",
      },
    },
  ];

  const bottomLayerImages: GalleryImage[] = [
    {
      src: "/lower-villages-north-heves.jpg",
      alt: {
        en: "An image showing three small villages located north of the town of Heves, highlighting their spatial layout and surrounding landscape",
        hu: "Kép három kis faluról Heves északi részén, kiemelve azok elrendezését és a környező tájat",
      },
      note: {
        en: "3 small villages north of Heves",
        hu: "3 kis falu Heves északi részén",
      },
    },
    {
      src: "/lower-nir-road-network.jpg",
      alt: {
        en: "An image captured in the near-infrared spectrum of the same area, clearly showing the road network and infrastructure details",
        hu: "Kép a közeli infravörös spektrumban, amely egyértelműen mutatja az úthálózatot és az infrastruktúrát",
      },
      note: {
        en: "NIR spectrum reveals the road network",
        hu: "A NIR spektrum feltárja az úthálózatot",
      },
    },
    {
      src: "/lower-ndvi-visualization.jpg",
      alt: {
        en: "A data-driven visualization emphasizing the Normalized Difference Vegetation Index (NDVI) for assessing vegetation vigor",
        hu: "Adatközpontú vizualizáció, amely az NDVI-t emeli ki a növényesség értékeléséhez",
      },
      note: {
        en: "Visualizes NDVI to assess vegetation health",
        hu: "NDVI vizualizáció a növényzet egészségének értékeléséhez",
      },
    },
    {
      src: "/lower-cloud-identification.jpg",
      alt: {
        en: "A focused depiction of cloud formations, making it easy to identify individual clouds",
        hu: "A felhőformációk fókuszált ábrázolása, ami megkönnyíti az egyes felhők azonosítását",
      },
      note: {
        en: "Shows distinct cloud formations clearly",
        hu: "Egyértelműen mutatja a különálló felhőket",
      },
    },
    {
      src: "/lower-cloud-map-clarification.jpg",
      alt: {
        en: "A composite image using cloud mapping overlays to refine NDVI and other analyses for accurate data interpretation",
        hu: "Kompozit kép felhőtérképezési rétegekkel, amely finomítja az NDVI-t a pontos adatértelmezéshez",
      },
      note: {
        en: "Cloud maps refine NDVI and other data",
        hu: "A felhőtérképek finomítják az NDVI-t és más adatokat",
      },
    },
    {
      src: "/lower-false-color-analysis.jpg",
      alt: {
        en: "A vibrant false-colored image that enhances visual differences in the data for clearer analysis",
        hu: "Élénk, hamis színű kép, amely fokozza az adatok vizuális különbségeit a tisztább elemzés érdekében",
      },
      note: {
        en: "False-color imagery enhances data contrast",
        hu: "A hamis színű képek fokozzák az adatok kontrasztját",
      },
    },
    {
      src: "/lower-grvi-vegetation-health.jpg",
      alt: {
        en: "An analytical view that compares green and red spectral bands via GRVI to provide detailed insights into vegetation health",
        hu: "Analitikus nézet, amely összehasonlítja a zöld és piros sávokat a GRVI segítségével a növényzet egészségének értékeléséhez",
      },
      note: {
        en: "GRVI compares green and red bands for vegetation health",
        hu: "A GRVI összehasonlítja a zöld és piros sávokat a növényzet egészségéért",
      },
    },
  ];

  return (
    <div className="py-16 overflow-hidden">
      <ScrollingGallery
        images={topLayerImages.map((img) => ({
          src: img.src,
          alt: img.alt[locale],
          note: img.note[locale],
        }))}
        direction="left"
        speed={0.5}
        notePosition="top"
        className="mb-8"
      />
      <ScrollingGallery
        images={bottomLayerImages.map((img) => ({
          src: img.src,
          alt: img.alt[locale],
          note: img.note[locale],
        }))}
        direction="right"
        speed={0.3}
        notePosition="bottom"
      />
    </div>
  );
}
