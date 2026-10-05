export interface HomeContent {
  announcementBar: {
    text: string;
  };
  hero: {
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    supportingCopy: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    heroImage: string;
    floatingBadgeSku: string;
    floatingBadgeTitle: string;
    floatingBadgeMoq: string;
    floatingCardTitle: string;
    floatingCardName: string;
    floatingCardImage: string;
    perks: { title: string; subtitle: string }[];
  };
  brandIntro: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    leadCopy: string;
    bodyCopy: string;
    buttonText: string;
    buttonLink: string;
    image: string;
  };
  collectionsSection: {
    badge: string;
    headline: string;
    buttonText: string;
    buttonLink: string;
  };
  wholesaleCta: {
    badge: string;
    headline: string;
    subheadline: string;
    body: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    whatsappButtonText: string;
  };
}

export interface CollectionsContent {
  header: {
    badge: string;
    title: string;
    subtitle: string;
  };
  categorySection: {
    title: string;
    subtitle: string;
  };
  productCatalogSection: {
    badge: string;
    title: string;
    priceSheetCtaText: string;
    priceSheetCtaLink: string;
  };
  customVolumeBox: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface NewArrivalsContent {
  header: {
    badge: string;
    title: string;
    subtitle: string;
  };
  releasesBar: {
    badge: string;
    description: string;
    whatsappButtonText: string;
    whatsappMessage: string;
  };
}

export interface WholesaleContent {
  header: {
    badge: string;
    title: string;
    subtitle: string;
  };
  advantageSection: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
    }[];
  };
  enquirySection: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

export interface AboutContent {
  header: {
    badge: string;
    title: string;
    subtitle: string;
  };
  storySection: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    headlineEnd: string;
    leadParagraph: string;
    bodyParagraph: string;
    koreanDesignTitle: string;
    koreanDesignText: string;
    wholesaleFirstTitle: string;
    wholesaleFirstText: string;
    image: string;
  };
  corePrinciplesSection: {
    badge: string;
    title: string;
    subtitle: string;
    principles: {
      title: string;
      description: string;
    }[];
    buttonText: string;
    buttonLink: string;
  };
}

export interface ContactContent {
  header: {
    badge: string;
    title: string;
    subtitle: string;
  };
  channels: {
    badge: string;
    whatsappCard: {
      title: string;
      tag: string;
      description: string;
      buttonText: string;
      whatsappMessage: string;
    };
    instagramCard: {
      title: string;
      description: string;
      buttonText: string;
      instagramUrl: string;
    };
    responseTime: {
      title: string;
      description: string;
    };
  };
  faqs: {
    badge: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  enquirySection: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

export interface WebsiteContentState {
  home: HomeContent;
  collections: CollectionsContent;
  newArrivals: NewArrivalsContent;
  wholesale: WholesaleContent;
  about: AboutContent;
  contact: ContactContent;
}

export const INITIAL_WEBSITE_CONTENT: WebsiteContentState = {
  home: {
    announcementBar: {
      text: 'Wholesale Orders Open • Rates from ₹22/pc • Low MOQs • Pan-India & Global Dispatch',
    },
    hero: {
      headlineStart: 'Korean Hair Accessories,',
      headlineHighlight: 'Made for Your',
      headlineEnd: 'Collection.',
      supportingCopy:
        'Curated hair accessories designed for boutiques, retailers and resellers. Thoughtful craftsmanship, soft Korean palettes, and effortless wholesale ordering.',
      primaryButtonText: 'Explore Collection',
      primaryButtonLink: '/collections',
      secondaryButtonText: 'Wholesale Enquiry',
      secondaryButtonLink: '/wholesale',
      heroImage: '/images/hero-claw-clip.jpg',
      floatingBadgeSku: 'EDG-KC-005',
      floatingBadgeTitle: 'Korean Tortoise Claw Clip (EDG-KC-005)',
      floatingBadgeMoq: 'MOQ 50',
      floatingCardTitle: 'Boutique Favourite',
      floatingCardName: 'Soft Chiffon Ribbon Bow',
      floatingCardImage: '/images/category-bows.jpg',
      perks: [
        { title: 'Low MOQ', subtitle: 'From 30-50 pcs' },
        { title: 'Seoul Trend', subtitle: 'Fresh New Edits' },
        { title: 'Direct Chat', subtitle: 'Instant WhatsApp' },
      ],
    },
    brandIntro: {
      badge: 'Brand Philosophy',
      headline: 'Beautiful Details.',
      headlineHighlight: 'Thoughtfully Curated.',
      leadCopy:
        'Edamoneglint brings together Korean-inspired hair accessories designed for modern boutiques, retailers, resellers and fashion businesses.',
      bodyCopy:
        'Inspired by the subtle refinement and romantic simplicity of Seoul street style, every piece in our collection is curated with texture, comfortable hold, and boutique resale value in mind. From effortless satin scrunchies to delicate pearl barrettes and architectural claws, we make wholesale stocking seamless.',
      buttonText: 'Discover Edamoneglint',
      buttonLink: '/about',
      image: '/images/brand-intro-clips.jpg',
    },
    collectionsSection: {
      badge: 'Wholesale Categories',
      headline: 'Explore Our Collections',
      buttonText: 'View All Collections',
      buttonLink: '/collections',
    },
    wholesaleCta: {
      badge: 'Wholesale Partnership',
      headline: 'Elevate Your Retail Assortment',
      subheadline: 'With Seoul-Inspired Hair Essentials',
      body: 'Get direct wholesale rates, customizable quantities, low MOQs, and dedicated support for your boutique or online store.',
      primaryButtonText: 'Submit Wholesale Enquiry',
      primaryButtonLink: '/wholesale#enquiry',
      whatsappButtonText: 'Chat on WhatsApp',
    },
  },
  collections: {
    header: {
      badge: 'Wholesale Catalog',
      title: 'Explore Our Collections',
      subtitle:
        'Curated Korean-inspired hair accessories designed for boutiques, retailers, and salons.',
    },
    categorySection: {
      title: 'Browse By Category',
      subtitle: 'Select a dedicated collection line to view all available SKUs.',
    },
    productCatalogSection: {
      badge: 'Full Product Line',
      title: 'All Wholesale Hair Accessories',
      priceSheetCtaText: 'Request Full Price Sheet →',
      priceSheetCtaLink: '/wholesale#enquiry',
    },
    customVolumeBox: {
      title: 'Looking for Custom Volume or Unlisted Variations?',
      description:
        'We source and produce seasonal Korean hair accessories on demand for qualified wholesale partners. Reach out to discuss tailor-made assortments.',
      buttonText: 'Submit Custom Wholesale Request',
      buttonLink: '/wholesale#enquiry',
    },
  },
  newArrivals: {
    header: {
      badge: 'Fresh Seoul Drops',
      title: 'New Arrivals',
      subtitle: 'Discover the latest additions to the Edamoneglint collection.',
    },
    releasesBar: {
      badge: 'Current Season Releases',
      description:
        'Curated directly from Seoul fashion week and current Asian street trends.',
      whatsappButtonText: 'Request New Line Sheet',
      whatsappMessage:
        'Hello Edamoneglint, please send the New Arrivals line sheet.',
    },
  },
  wholesale: {
    header: {
      badge: 'Partner With Us',
      title: 'Wholesale Made Simple',
      subtitle:
        'Curated Korean-inspired hair accessories designed for boutiques, retailers, resellers and salons.',
    },
    advantageSection: {
      badge: 'Why Retailers Choose Edamoneglint',
      title: 'The Wholesale Advantage',
      subtitle:
        'We make it effortless for independent boutiques and retail chains to introduce bestselling Korean accessory designs.',
      cards: [
        {
          title: 'Low Starting MOQs',
          description:
            'Test new product categories with minimum order quantities starting from just 30 to 50 pieces per style with mixed colorways.',
          bullet1: 'Color mix permitted within MOQ',
          bullet2: 'Sample orders for qualified stores',
        },
        {
          title: 'Curated Seoul Aesthetics',
          description:
            'Directly inspired by modern Korean trends: soft neutral palettes, matte resin textures, sheer organzas, and pearl inlays.',
          bullet1: 'High retail markup potential (2.5x - 4x)',
          bullet2: 'Photogenic social media lookbooks',
        },
        {
          title: 'Direct WhatsApp Support',
          description:
            'Zero complicated portal logins. Connect with our wholesale rep via WhatsApp for prompt PDF catalogs, quotes, and dispatch updates.',
          bullet1: 'Fast responses within business hours',
          bullet2: 'Custom packaging options available',
        },
      ],
    },
    enquirySection: {
      badge: 'Get Wholesale Pricing',
      title: 'Let’s Build Your Collection',
      subtitle:
        'Fill in your boutique requirements below to receive our full line sheet, volume discount tiers, and stock availability.',
    },
  },
  about: {
    header: {
      badge: 'Our Heritage & Vision',
      title: 'About Edamoneglint',
      subtitle:
        'Curated Collections. Beautiful Details. Wholesale Made Simple.',
    },
    storySection: {
      badge: 'The Edamoneglint Story',
      headline: 'Bringing Seoul’s Refined',
      headlineHighlight: 'Hair Accessory Culture',
      headlineEnd: 'to Modern Retail.',
      leadParagraph:
        'Edamoneglint was founded on a singular belief: hair accessories should not be an afterthought. They are the crowning touch of personal style—a subtle punctuation mark of elegance.',
      bodyParagraph:
        'We draw our design inspiration directly from the vibrant street fashion, luxury boutiques, and subtle minimalist salons of Seoul. From muted pastel claw clips and hand-finished pearl barrettes to luxurious Mulberry-finish satin scrunchies and plush velvet headbands, every accessory in our wholesale edit is selected with an uncompromising eye for aesthetics, durability, and commercial appeal.',
      koreanDesignTitle: 'Korean Design',
      koreanDesignText:
        'Contemporary cuts, tactile matte finishes & soft neutral tones.',
      wholesaleFirstTitle: 'Wholesale First',
      wholesaleFirstText:
        'Engineered for retail markup, boutique displays & low initial risk.',
      image: '/images/brand-intro-clips.jpg',
    },
    corePrinciplesSection: {
      badge: 'Our Core Principles',
      title: 'What Sets Our Collections Apart',
      subtitle:
        'We curate accessories that elevate customer perception and generate consistent repeat orders for your store.',
      principles: [
        {
          title: 'Hair-Conscious Engineering',
          description:
            'Smooth hand-buffed acetate edges, non-snag French barrettes, and gentle high-recovery elastics that protect client hair from breakage.',
        },
        {
          title: 'Editorial Visual Presentation',
          description:
            'Clean neutral tones and premium product proportions that stand out on boutique countertops, Instagram stories, and display trays.',
        },
        {
          title: 'Transparent Wholesale Service',
          description:
            'Direct WhatsApp communications, clear volume tier pricing, honest stock reporting, and reliable dispatch handling.',
        },
      ],
      buttonText: 'Explore Wholesale Program',
      buttonLink: '/wholesale',
    },
  },
  contact: {
    header: {
      badge: 'Get In Touch',
      title: 'Connect With Edamoneglint',
      subtitle:
        'Have questions about minimum order quantities, tiered pricing, or custom boutique requests? We are here to help.',
    },
    channels: {
      badge: 'Wholesale Channels',
      whatsappCard: {
        title: 'WhatsApp Direct',
        tag: 'Fastest',
        description:
          'Connect directly with our wholesale representative for immediate price lists and availability.',
        buttonText: 'Start WhatsApp Chat',
        whatsappMessage:
          'Hello Edamoneglint, I would like to start a wholesale enquiry.',
      },
      instagramCard: {
        title: 'Official Instagram',
        description:
          'Follow our visual feed for styling inspiration, new collections drops, and boutique features.',
        buttonText: 'Follow @edamoneglint',
        instagramUrl: 'https://instagram.com/edamoneglint',
      },
      responseTime: {
        title: 'Response Time',
        description:
          'Inquiries are typically answered within 2 to 4 business hours.',
      },
    },
    faqs: {
      badge: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is the Minimum Order Quantity (MOQ)?',
          answer:
            'Most hair clips and accessories start at 30 to 50 pieces per style with mixed color options allowed.',
        },
        {
          question: 'Do you provide sample orders?',
          answer:
            'Yes, starter sample packs are available for verified boutique and salon businesses prior to bulk orders.',
        },
        {
          question: 'How are wholesale orders fulfilled?',
          answer:
            'Once quantities and pricing are finalized over WhatsApp/Email, orders are packaged with protective branded cards and dispatched promptly.',
        },
      ],
    },
    enquirySection: {
      badge: 'Send Your Requirements',
      title: 'Wholesale Enquiry Form',
      subtitle:
        'Submit your details below and our team will get back to you with the latest catalogue and tiered rates.',
    },
  },
};
