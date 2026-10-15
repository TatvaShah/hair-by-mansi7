import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Mansi Langhnoja",
  tagline: "Hairstylist, makeup, colour, keratin, waxing and threading in Scarborough.",
  category: "Hair and beauty",
  schemaType: "BeautySalon",
  area: "Scarborough, ON",
  siteUrl: "https://hair-by-mansi7.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#b8956a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Scarborough, Toronto",
    headline: "Hair, colour, and beauty crafted for you",
    subhead:
      "Hairstylist, makeup artist, colourist, keratin, waxing, threading, and skincare. Book by Instagram DM or call.",
    images: [
      { src: "/images/post-1.jpg", alt: "Rich brunette colour with soft dimension" },
      { src: "/images/post-4.jpg", alt: "Keratin smooth hair transformation" },
      { src: "/images/post-5.jpg", alt: "Hair transformation by Mansi" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/hair_by_mansi7" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Cuts and colour",
    "Keratin and styling",
    "Makeup and waxing",
    "Book by Instagram DM",
  ],

  about: {
    title: "Hair and beauty in Scarborough",
    body: [
      "Mansi Langhnoja is a Scarborough hairstylist, makeup artist, and colourist offering cuts, colour, keratin treatments, waxing, threading, and skincare.",
      "Ready for your next look? Send a DM with your preferred date and service, or call 437-313-3704.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Keratin smooth hair finish" },
  },

  menu: {
    label: "Services",
    title: "What we offer",
    intro: "Popular services. Message for pricing on your look and date.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your look and date.",
    groups: [
      {
        title: "Hair and beauty",
        items: [
          { name: "Cuts and styling", description: "Fresh cuts, layers, and blowouts." },
          { name: "Colour", description: "Brunette tones, dimension, and glossy finishes." },
          { name: "Keratin", description: "Smoothing treatments for frizz-free shine." },
          { name: "Makeup", description: "Makeup looks for everyday and events." },
          { name: "Waxing and threading", description: "Facial and body grooming." },
          { name: "Skincare", description: "Skincare support alongside your beauty services." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1120,
        alt: "Rich brunette colour with soft dimension",
        caption: "Rich brunette tones",
        href: "https://www.instagram.com/p/DeR-1EGEfoC/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1920,
        alt: "Hair transformation still",
        caption: "Hair transformation",
        href: "https://www.instagram.com/p/Dd6ysSdRmtA/",
      },
      {
        src: "/images/post-3.jpg",
        width: 640,
        height: 1136,
        alt: "Layered cut and blowout",
        caption: "Fresh cut and volume",
        href: "https://www.instagram.com/p/DdNImJ2R6be/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1440,
        alt: "Keratin silky smooth hair",
        caption: "Keratin transformation",
        href: "https://www.instagram.com/p/Dc9cgs1PCWG/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1920,
        alt: "Hair colour and cut result",
        caption: "Colour and cut",
        href: "https://www.instagram.com/p/Dc5EA6as4bh/",
      },
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 1920,
        alt: "Makeup and hair look",
        caption: "Makeup and hair",
        href: "https://www.instagram.com/p/Dc4pNEhsBko/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1920,
        alt: "Trending haircut result",
        caption: "Trending haircut",
        href: "https://www.instagram.com/p/DccbRkfsD3Y/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1920,
        alt: "Scarborough salon hair finish",
        caption: "Salon finish",
        href: "https://www.instagram.com/p/DcXppVtRMip/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "hair_by_mansi7",
    embeds: [
      "https://www.instagram.com/p/DeR-1EGEfoC/",
      "https://www.instagram.com/p/Dc9cgs1PCWG/",
      "https://www.instagram.com/p/DdNImJ2R6be/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your appointment",
    intro:
      "Bookings are by Instagram DM or phone. Tap below to open a starter message with your date and service.",
    dmMessage:
      "Hi Mansi! I would love to book an appointment.\nPreferred date:\nService (cut, colour, keratin, makeup, waxing, threading):\nNotes or inspo:",
    links: [],
    note: "Serving Scarborough and the GTA. Call 437-313-3704 or message on Instagram.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Send an Instagram DM with your preferred date and service, or call 437-313-3704.",
    },
    {
      q: "Where are you based?",
      a: "Appointments are in Scarborough, Toronto. Details are shared when you book.",
    },
    {
      q: "What services do you offer?",
      a: "Cuts, colour, keratin, makeup, waxing, threading, and skincare. Message for pricing on your look and date.",
    },
    {
      q: "Do you do keratin treatments?",
      a: "Yes. Keratin smoothing is available. Share your hair goals in a DM.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough, Ontario",
    phone: "+1 437-313-3704",
    socials: [],
  },

  seo: {
    title: "Mansi Langhnoja | Hair and beauty in Scarborough",
    description:
      "Hairstylist, makeup, colour, keratin, waxing and threading in Scarborough, Toronto. Book with Mansi Langhnoja by Instagram DM or phone.",
    keywords: [
      "Scarborough hairstylist",
      "Toronto colourist",
      "keratin Scarborough",
      "makeup artist Scarborough",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
