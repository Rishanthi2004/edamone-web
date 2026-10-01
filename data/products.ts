export interface Product {
  id: string;
  slug: string;
  code: string;
  name: string;
  koreanName?: string;
  category: 'hair-clips' | 'bows' | 'scrunchies' | 'hair-bands' | 'korean-hair-accessories';
  categoryName: string;
  description: string;
  shortDescription: string;
  features: string[];
  materials: string;
  moq: string;
  wholesalePrice: string;
  wholesalePriceRange: string;
  colors: {
    name: string;
    hex: string;
    class?: string;
  }[];
  images: string[];
  isNewArrival?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  dimensions?: string;
  packaging?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'hair-clips',
    slug: 'hair-clips',
    name: 'Hair Clips & Claws',
    subtitle: 'Matte, Daisy & Geometric Claws',
    description: 'Minimalist and floral clips crafted for effortless all-day hold with high-grade soft-touch matte finish and reinforced alloy springs.',
    image: '/images/category-hair-clips.jpg',
    itemCount: 18,
  },
  {
    id: 'bows',
    slug: 'bows',
    name: 'Silk & Chiffon Bows',
    subtitle: 'Soft Organza, Velvet & Satin',
    description: 'Graceful bows designed with romantic silhouettes, delicate ribbon tails, and durable French barrette closures.',
    image: '/images/category-bows.jpg',
    itemCount: 14,
  },
  {
    id: 'scrunchies',
    slug: 'scrunchies',
    name: 'Premium Scrunchies',
    subtitle: 'Mulberry Silk, Linen & Cloud Organza',
    description: 'Gentle on all hair types with premium anti-snag elastic, sumptuous fabrics, and contemporary oversized drape.',
    image: '/images/category-scrunchies.jpg',
    itemCount: 16,
  },
  {
    id: 'hair-bands',
    slug: 'hair-bands',
    name: 'Hair Bands & Headpieces',
    subtitle: 'Padded Velvet, Pleated & Wire Bands',
    description: 'Statement headbands engineered for ergonomic comfort, elevated textures, and modern Korean luxury appeal.',
    image: '/images/category-hair-bands.jpg',
    itemCount: 12,
  },
  {
    id: 'korean-hair-accessories',
    slug: 'korean-hair-accessories',
    name: 'Korean Signature Edit',
    subtitle: 'Seoul Street & Runway Trends',
    description: 'Curated direct from Seoul fashion trends—featuring pastel matte accents, tortoiseshell barrettes, and subtle gold pearl details.',
    image: '/images/category-korean-signature.jpg',
    itemCount: 20,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'korean-pearl-hair-clip',
    code: 'EDG-HC-001',
    name: 'Korean Pearl Hair Clip',
    koreanName: '진주 헤어 클립',
    category: 'hair-clips',
    categoryName: 'Hair Clips',
    shortDescription: 'Lustrous faux pearl barrette with gold-tone alloy back for an effortless Korean chic look.',
    description: 'A timeless staple of modern Korean fashion. Featuring hand-set lustrous resin pearls on an ultra-smooth gold-tone alloy base, the EDG-HC-001 delivers secure grip without pulling or creasing delicate hair.',
    features: [
      'Hand-finished pearl setting with anti-tarnish finish',
      'Ergonomic spring clip mechanism',
      'Lightweight and comfortable for extended wear',
      'Ideal for bridal boutiques, premium salons and lifestyle stores'
    ],
    materials: 'High-grade resin pearls, Hypoallergenic gold-tone alloy',
    moq: '50 Pcs (Mix Colors)',
    wholesalePrice: '₹35 / pc',
    wholesalePriceRange: '₹30 - ₹45 / pc',
    colors: [
      { name: 'Ivory Pearl / Gold', hex: '#FDFBF7' },
      { name: 'Champagne Pearl / Gold', hex: '#EBE2D0' },
      { name: 'Blush Pearl / Rose Gold', hex: '#F3DBD8' }
    ],
    images: [
      '/images/product-pearl-clip.jpg',
      '/images/brand-intro-clips.jpg'
    ],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    dimensions: '8.5 cm length × 2.2 cm width',
    packaging: 'Individual branded backing card, 10 pcs polybag'
  },
  {
    id: '2',
    slug: 'soft-ribbon-bow',
    code: 'EDG-BW-002',
    name: 'Soft Ribbon Bow',
    koreanName: '소프트 리본 바레트',
    category: 'bows',
    categoryName: 'Bows',
    shortDescription: 'Double-layered soft Korean chiffon ribbon with elegant trailing streamers.',
    description: 'Crafted with premium flowing Korean chiffon, this ribbon bow adds instant romantic elegance to low ponytails, half-up styles, or chignons. Features a durable metal French spring barrette.',
    features: [
      'Double-tier draped bow silhouette with cascading tails',
      'Smooth French barrette clasp',
      'Wrinkle-resistant luxury chiffon fabric',
      'Popular with boutique retail and Instagram curators'
    ],
    materials: 'Korean Silk Chiffon, Stainless steel barrette',
    moq: '30 Pcs',
    wholesalePrice: '₹48 / pc',
    wholesalePriceRange: '₹40 - ₹60 / pc',
    colors: [
      { name: 'Warm Cream', hex: '#FAF6EE' },
      { name: 'Muted Rose', hex: '#B87D86' },
      { name: 'Deep Burgundy', hex: '#5A1F28' },
      { name: 'Midnight Black', hex: '#1C1917' }
    ],
    images: [
      '/images/category-bows.jpg',
      '/images/brand-intro-clips.jpg'
    ],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    dimensions: '14 cm width × 18 cm total drape length',
    packaging: 'Individual cellophane sleeve with premium card backing'
  },
  {
    id: '3',
    slug: 'premium-satin-scrunchie',
    code: 'EDG-SC-003',
    name: 'Premium Satin Scrunchie',
    koreanName: '프리미엄 새틴 곱창',
    category: 'scrunchies',
    categoryName: 'Scrunchies',
    shortDescription: 'High-density mulberry finish satin scrunchie designed to prevent frizz and breakage.',
    description: 'Designed for hair health without sacrificing style. Generously gathered satin fabric encases high-elasticity reinforced rubber, giving voluminous body to hair buns and ponytails while protecting cuticles.',
    features: [
      '19-Momme equivalent ultra-smooth satin lustre',
      'Extra-wide 5cm fabric gather for luxurious volume',
      'High-recovery core elastic that resists loosening over time',
      'Ideal gift-bundle item for cosmetic and hair retailers'
    ],
    materials: 'High-density satin weave polyester/silk blend',
    moq: '100 Pcs (Assorted)',
    wholesalePrice: '₹22 / pc',
    wholesalePriceRange: '₹18 - ₹28 / pc',
    colors: [
      { name: 'Pearl Ivory', hex: '#FDFBF7' },
      { name: 'Soft Sand Beige', hex: '#E2D7C7' },
      { name: 'Dusty Rose', hex: '#C9939B' },
      { name: 'Earthy Olive', hex: '#7A8068' },
      { name: 'Espresso', hex: '#3E2F28' }
    ],
    images: [
      '/images/category-scrunchies.jpg',
      '/images/hero-claw-clip.jpg'
    ],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    dimensions: '12 cm outer diameter, 5 cm ruffle width',
    packaging: 'Individual hang-tag or 5-pack wholesale bundles'
  },
  {
    id: '4',
    slug: 'minimal-hair-band',
    code: 'EDG-HB-004',
    name: 'Minimal Hair Band',
    koreanName: '미니멀 벨벳 헤어밴드',
    category: 'hair-bands',
    categoryName: 'Hair Bands',
    shortDescription: 'Ergonomic non-pinch padded headband wrapped in soft matte velvet.',
    description: 'A Seoul runway favorite, this padded headband features subtle 1.8cm crowning elevation with tapered end tips lined with soft grosgrain to ensure zero pain behind the ears during all-day wear.',
    features: [
      'Zero-pinch flexible inner core adapts to all head shapes',
      'Subtle cushioning provides instant height and face framing',
      'Anti-slip brushed inner lining',
      'High demand among fashion boutiques and bridal stylists'
    ],
    materials: 'Fine micro-velvet, flexible polymer band',
    moq: '40 Pcs',
    wholesalePrice: '₹55 / pc',
    wholesalePriceRange: '₹45 - ₹70 / pc',
    colors: [
      { name: 'Oatmeal Beige', hex: '#DED5C4' },
      { name: 'Muted Rosewood', hex: '#9E5A63' },
      { name: 'Champagne Taupe', hex: '#8F8175' },
      { name: 'Jet Onyx', hex: '#1C1917' }
    ],
    images: [
      '/images/category-hair-bands.jpg',
      '/images/brand-intro-clips.jpg'
    ],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    dimensions: '3.5 cm center width, 1.8 cm padding height',
    packaging: 'Individual dust bag with branded product tag'
  },
  {
    id: '5',
    slug: 'korean-matte-pastel-claw-clip',
    code: 'EDG-KC-005',
    name: 'Matte Pastel Geometric Claw Clip',
    koreanName: '매트 파스텔 집게핀',
    category: 'korean-hair-accessories',
    categoryName: 'Korean Hair Accessories',
    shortDescription: 'Curved matte finish French claw clip with high-tension spring for thick and fine hair.',
    description: 'The defining hair accessory of Korean street style. Crafted from shatter-resistant cellulose acetate with a tactile soft-touch matte finish and reinforced alloy spring.',
    features: [
      'Unbreakable flexible resin construction',
      'Double row interlaced interlocking teeth for full hold',
      'Matte soft-touch velvet-feel surface',
      'High volume turnover product for gift and accessory shops'
    ],
    materials: 'High-grade cellulose acetate, zinc alloy spring',
    moq: '60 Pcs (Mix Colors)',
    wholesalePrice: '₹28 / pc',
    wholesalePriceRange: '₹24 - ₹38 / pc',
    colors: [
      { name: 'Cream Butter', hex: '#F7E7CE' },
      { name: 'Dusty Peach', hex: '#F0C2B6' },
      { name: 'Sage Mint', hex: '#B2C2B0' },
      { name: 'Slate Lilac', hex: '#B8AFC2' },
      { name: 'Warm Mocha', hex: '#7D6456' }
    ],
    images: [
      '/images/product-matte-claw.jpg',
      '/images/hero-claw-clip.jpg',
      '/images/category-hair-clips.jpg'
    ],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    dimensions: '11 cm length × 4.5 cm height',
    packaging: '12 pcs per inner display carton'
  },
  {
    id: '6',
    slug: 'organza-oversized-cloud-bow',
    code: 'EDG-BW-006',
    name: 'Organza Oversized Cloud Bow',
    koreanName: '오간자 클라우드 리본',
    category: 'bows',
    categoryName: 'Bows',
    shortDescription: 'Airy sheer organza layered bow with subtle iridescent shimmer.',
    description: 'An ethereal accessory inspired by K-drama red carpet aesthetics. Multi-folded sheer organza captures sunlight with faint pearlescent radiance while feeling weightless in hair.',
    features: [
      'Multi-tiered voluminous airy form that never collapses',
      'Heavy-duty alloy automatic barrette closure',
      'Light-catching micro-sheen textile',
      'Very strong seller for wedding guests and celebratory styling'
    ],
    materials: 'Iridescent fine organza, steel spring barrette',
    moq: '30 Pcs',
    wholesalePrice: '₹52 / pc',
    wholesalePriceRange: '₹45 - ₹65 / pc',
    colors: [
      { name: 'Sheer Pearl White', hex: '#FAFAFA' },
      { name: 'Blush Champagne', hex: '#F5E6E0' },
      { name: 'Soft Mist Grey', hex: '#D8D8D8' }
    ],
    images: [
      '/images/category-bows.jpg',
      '/images/product-pearl-clip.jpg'
    ],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    dimensions: '16 cm width × 12 cm height',
    packaging: 'Clear presentation box with protective inner frame'
  },
  {
    id: '7',
    slug: 'tortoise-shell-french-barrette',
    code: 'EDG-HC-007',
    name: 'Tortoise Shell French Barrette',
    koreanName: '호피 아세테이트 바레트',
    category: 'hair-clips',
    categoryName: 'Hair Clips',
    shortDescription: 'Classic amber tortoiseshell pattern with polished hand-buffed edges.',
    description: 'Crafted from plant-derived eco cellulose acetate, polished by hand in a three-stage tumbling process for exceptional depth of color and glass-like shine.',
    features: [
      'Eco-friendly cellulose acetate with organic amber mottling',
      'Authentic French clip clasp mechanism with protective rubber sleeve',
      'Smooth edges prevent hair snagging',
      'Essential core item for classic fashion retailers'
    ],
    materials: 'Cellulose Acetate, Polished Brass Clasp',
    moq: '50 Pcs',
    wholesalePrice: '₹38 / pc',
    wholesalePriceRange: '₹32 - ₹48 / pc',
    colors: [
      { name: 'Amber Tortoise', hex: '#8B4513' },
      { name: 'Blonde Tokyo Tortoise', hex: '#C29B38' },
      { name: 'Rose Quartz Marble', hex: '#E0A899' }
    ],
    images: [
      '/images/category-korean-signature.jpg',
      '/images/hero-claw-clip.jpg'
    ],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
    dimensions: '9.5 cm length × 1.5 cm width',
    packaging: 'Card mounted, 10 pcs bulk master bag'
  },
  {
    id: '8',
    slug: 'pleated-chiffon-hair-band',
    code: 'EDG-HB-008',
    name: 'Pleated Chiffon Twist Headband',
    koreanName: '플리츠 쉬폰 트위스트 밴드',
    category: 'hair-bands',
    categoryName: 'Hair Bands',
    shortDescription: 'Accordion pleated chiffon knotted at the crown with elastic back wrap.',
    description: 'Combines the softness of micro-pleated textile with a classic Korean central crossover knot. Flattering on both straight and textured hair.',
    features: [
      'Architectural knife-pleating detail that holds structure',
      'Comfort-padded ear protectors',
      'Transitional day-to-evening aesthetic',
      'High re-order rate from boutique apparel stores'
    ],
    materials: 'Micro-pleated georgette chiffon, flexible resin frame',
    moq: '40 Pcs',
    wholesalePrice: '₹58 / pc',
    wholesalePriceRange: '₹48 - ₹72 / pc',
    colors: [
      { name: 'Vanilla Cream', hex: '#F7F3E9' },
      { name: 'Dusty Rosewood', hex: '#A36870' },
      { name: 'Caramel Macchiato', hex: '#9C7A5B' },
      { name: 'Charcoal Black', hex: '#262424' }
    ],
    images: [
      '/images/category-hair-bands.jpg',
      '/images/hero-claw-clip.jpg'
    ],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    dimensions: '5 cm wide at apex, flexible sizing',
    packaging: 'Individual hang tags with barcode area'
  },
  {
    id: '9',
    slug: 'korean-crystal-bobby-pin-set',
    code: 'EDG-KC-009',
    name: 'Korean Crystal & Bead Bobby Pin Set',
    koreanName: '크리스탈 실핀 3종 세트',
    category: 'korean-hair-accessories',
    categoryName: 'Korean Hair Accessories',
    shortDescription: 'Trio of delicate gold-wire bobby pins accented with cubic zirconia and mini pearls.',
    description: 'A curated 3-piece styling set featuring complementary textures: faceted clear crystals, smooth seed pearls, and a hammered gold geometric bar.',
    features: [
      'Sold as pre-matched 3-piece carded set',
      'Fine gauge steel wire with rounded safety tips',
      'Perfect for stacking above ears or accenting updos',
      'High markup margin for retail checkouts'
    ],
    materials: 'Cubic zirconia, faux mini pearls, gold-plated spring steel',
    moq: '50 Sets',
    wholesalePrice: '₹45 / set',
    wholesalePriceRange: '₹38 - ₹55 / set',
    colors: [
      { name: 'Champagne & Clear Crystal', hex: '#F0EAD6' },
      { name: 'Blush & Rose Crystal', hex: '#E8CCD0' }
    ],
    images: [
      '/images/product-pearl-clip.jpg',
      '/images/category-korean-signature.jpg'
    ],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
    dimensions: '6.5 cm each pin',
    packaging: 'Custom 3-slot presentation backing card'
  },
  {
    id: '10',
    slug: 'cloud-organza-scrunchie-set',
    code: 'EDG-SC-010',
    name: 'Cloud Organza Scrunchie Duo',
    koreanName: '클라우드 오간자 곱창 세트',
    category: 'scrunchies',
    categoryName: 'Scrunchies',
    shortDescription: 'Pair of sheer voluminous organza scrunchies in harmonious tone pairings.',
    description: 'Ultra-lightweight cloud organza scrunchies with billowy gathers that provide maximum visual volume without weighing down fine hair.',
    features: [
      'Fluffy airy 6cm ruffles that maintain shape',
      'Includes 2 coordinating tonal shades per pack',
      'Gentle hold that leaves zero ponytail bends',
      'Popular in youth fashion, beauty boxes and gifting'
    ],
    materials: 'Featherlight sheer organza, reinforced braided elastic',
    moq: '60 Sets',
    wholesalePrice: '₹32 / duo pack',
    wholesalePriceRange: '₹26 - ₹40 / duo pack',
    colors: [
      { name: 'Cream + Ivory', hex: '#FAF7F0' },
      { name: 'Soft Rose + Blush', hex: '#EFCFD4' },
      { name: 'Sage + Mint', hex: '#D2DDD0' }
    ],
    images: [
      '/images/category-scrunchies.jpg',
      '/images/brand-intro-clips.jpg'
    ],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    dimensions: '14 cm diameter each',
    packaging: 'Tied with branded ribbon with wholesale barcode card'
  }
];

export const WHOLESALE_STEPS = [
  {
    step: '01',
    title: 'Browse Collection',
    description: 'Explore our latest Korean-inspired hair accessories across clips, bows, scrunchies, and headbands.',
  },
  {
    step: '02',
    title: 'Select Products',
    description: 'Note the product codes (e.g. EDG-HC-001) and estimated quantities your business requires.',
  },
  {
    step: '03',
    title: 'Send Enquiry',
    description: 'Submit our streamlined wholesale form or click directly to chat on WhatsApp for immediate response.',
  },
  {
    step: '04',
    title: 'Confirm Order',
    description: 'Receive our full wholesale catalog, custom tiered volume quotes, and color breakdown confirmation.',
  },
  {
    step: '05',
    title: 'Get Your Order Delivered',
    description: 'Your carefully inspected and packaged order is dispatched promptly to your boutique or warehouse.',
  },
];

export const WHOLESALE_CLIENTS = [
  {
    title: 'Fashion Boutiques',
    description: 'Curated accessory selections that complement high-end apparel collections and display cases.',
    tag: 'Retail & Concept Stores',
  },
  {
    title: 'Hair & Beauty Stores',
    description: 'Premium client checkout retail lines, bridal kits, and styling station accessories.',
    tag: 'Salons & Studios',
  },
  {
    title: 'Online Resellers',
    description: 'High-margin, photo-ready accessories ideal for standalone ecommerce and Shopify stores.',
    tag: 'E-commerce Brands',
  },
  {
    title: 'Instagram Sellers',
    description: 'Trendy Korean aesthetics engineered for social media live sales and visual feeds.',
    tag: 'Social Commerce',
  },
  {
    title: 'Retail Shops',
    description: 'High turnover hair accessories curated for high-street retail and specialty stores.',
    tag: 'Retail Outlets',
  },
  {
    title: 'Gift Stores',
    description: 'Elegantly packaged giftable hair accessories for lifestyle concept stores.',
    tag: 'Gift & Lifestyle',
  },
  {
    title: 'Wholesale Buyers',
    description: 'Multi-store distributors requiring bulk volume, consistent lead times, and quality control.',
    tag: 'Bulk Distributors',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: '/images/category-hair-clips.jpg',
    caption: 'Soft tones and morning light. Korean matte daisy & geometric claw clips.',
    tag: '#edamoneglint #clawclips',
  },
  {
    id: 'ig-2',
    image: '/images/category-bows.jpg',
    caption: 'The art of the chiffon streamer bow. New colorways now available.',
    tag: '#seoulstyle #boutiquewholesale',
  },
  {
    id: 'ig-3',
    image: '/images/category-scrunchies.jpg',
    caption: 'Mulberry sheen satin and organza scrunchies for everyday luxury.',
    tag: '#koreanfashion #scrunchies',
  },
  {
    id: 'ig-4',
    image: '/images/category-hair-bands.jpg',
    caption: 'Padded velvet headbands—elevating modern minimalist wardrobes.',
    tag: '#edamoneglint #headbands',
  },
  {
    id: 'ig-5',
    image: '/images/product-matte-claw.jpg',
    caption: 'Tactile pastel claws. Perfect grip with zero breakage.',
    tag: '#clawclip #koreanaesthetic',
  },
  {
    id: 'ig-6',
    image: '/images/hero-claw-clip.jpg',
    caption: 'French twist styling with Korean tortoiseshell claw clips.',
    tag: '#fashionwholesale #accessories',
  },
];
