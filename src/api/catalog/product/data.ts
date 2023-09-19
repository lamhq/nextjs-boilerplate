import { Product } from '../types';

const products: Product[] = [
  {
    name: 'AirPods Pro',
    slug: 'airpods-pro',
    images: ['^1^', '^2^'],
    price: 249,
    description:
      'The ultimate wireless earbuds with active noise cancellation and customizable fit.',
  },
  {
    name: 'iPhone 13',
    slug: 'iphone-13',
    images: ['^3^', '^4^'],
    price: 799,
    description:
      'The most advanced iPhone ever with a stunning 6.1-inch Super Retina XDR display, A15 Bionic chip, and a new dual-camera system.',
  },
  {
    name: 'MacBook Air',
    slug: 'macbook-air',
    images: ['^5^', '^6^'],
    price: 999,
    description:
      'The thinnest and lightest notebook ever with a brilliant Retina display, M1 chip, and a silent, fanless design.',
  },
  {
    name: 'iPad Pro',
    slug: 'ipad-pro',
    images: ['^7^', '^8^'],
    price: 799,
    description:
      'The most powerful iPad ever with a stunning 11-inch Liquid Retina display, M1 chip, and a new ultra-wide camera with Center Stage.',
  },
  {
    name: 'Apple Watch Series 7',
    slug: 'apple-watch-series-7',
    images: ['^9^', '^10^'],
    price: 399,
    description:
      'The most advanced Apple Watch ever with a larger and more durable display, faster charging, and new health features.',
  },
  {
    name: 'Samsung Galaxy S21',
    slug: 'samsung-galaxy-s21',
    images: ['^11^', '^12^'],
    price: 699,
    description:
      'The ultimate smartphone with a stunning 6.2-inch Dynamic AMOLED display, Snapdragon 888 processor, and a pro-grade camera system.',
  },
  {
    name: 'Samsung Galaxy Buds Pro',
    slug: 'samsung-galaxy-buds-pro',
    images: ['^13^', '^14^'],
    price: 199,
    description:
      'The best wireless earbuds with immersive sound quality, intelligent noise control, and long-lasting battery life.',
  },
  {
    name: 'Samsung Galaxy Tab S7',
    slug: 'samsung-galaxy-tab-s7',
    images: ['^15^', '^16^'],
    price: 649,
    description:
      'The most versatile tablet with a stunning 11-inch LTPS TFT display, Snapdragon 865+ processor, and an included S Pen.',
  },
  {
    name: 'Samsung Galaxy Watch4',
    slug: 'samsung-galaxy-watch4',
    images: ['^17^', '^18^'],
    price: 249,
    description:
      'The smartwatch that helps you stay connected and healthy with a sleek design, advanced sensors, and Wear OS powered by Samsung.',
  },
  {
    name: 'Sony PlayStation 5',
    slug: 'sony-playstation-5',
    images: ['^19^', '^20^'],
    price: 499,
    description:
      'The next-generation console that delivers lightning-fast loading, stunning graphics, and immersive haptic feedback.',
  },
  {
    name: 'Sony WH-1000XM4',
    slug: 'sony-wh-1000xm4',
    images: ['^21^', '^22^'],
    price: 349,
    description:
      'The best noise-canceling headphones with exceptional sound quality, smart features, and up to 30 hours of battery life.',
  },
  {
    name: 'Sony Bravia XR A80J',
    slug: 'sony-bravia-xr-a80j',
    images: ['^23^', '^24^'],
    price: 1799,
    description:
      'The ultimate OLED TV with a stunning 55-inch 4K HDR display, XR processor, and Google TV.',
  },
  {
    name: 'Sony Alpha a7 III',
    slug: 'sony-alpha-a7-iii',
    images: ['^25^', '^26^'],
    price: 1999,
    description:
      'The full-frame mirrorless camera that delivers stunning image quality, fast autofocus, and impressive battery life.',
  },

  {
    name: 'Nike Air Force One',
    slug: 'nike-air-force-one',
    images: ['27', '28'],
    price: 120,
    description:
      'A classic sneaker with a leather upper, cushioned midsole, and durable rubber outsole.',
  },

  {
    name: 'Nike Air Max Plus',
    slug: 'nike-air-max-plus',
    images: ['29', '30'],
    price: 160,
    description: 'A stylish sneaker with a mesh upper, Tuned Air cushioning, and a wavy design.',
  },

  {
    name: 'Nike Air Zoom Pegasus',
    slug: 'nike-air-zoom-pegasus',
    images: ['31', '32'],
    price: 120,
    description:
      'A versatile running shoe with a breathable mesh upper, responsive foam midsole, and durable rubber outsole.',
  },

  {
    name: 'Nike React Infinity Run Flyknit',
    slug: 'nike-react-infinity-run-flyknit',
    images: ['33', '34'],
    price: 160,
    description:
      'A innovative running shoe with a Flyknit upper, React foam midsole, and a rocker-shaped outsole.',
  },

  {
    name: 'Adidas Stan Smith',
    slug: 'adidas-stan-smith',
    images: ['35', '36'],
    price: 80,
    description:
      'A timeless tennis shoe with a leather upper, perforated 3-Stripes, and a rubber cupsole.',
  },

  {
    name: 'Adidas Ultraboost',
    slug: 'adidas-ultraboost',
    images: ['37', '38'],
    price: 180,
    description:
      'A premium running shoe with a Primeknit upper, Boost foam midsole, and a Stretchweb outsole.',
  },

  {
    name: 'Adidas NMD',
    slug: 'adidas-nmd',
    images: ['39', '40'],
    price: 140,
    description: 'A modern lifestyle shoe with a knit upper, EVA plugs, and a Boost foam midsole.',
  },

  {
    name: 'Adidas Superstar',
    slug: 'adidas-superstar',
    images: ['41', '42'],
    price: 90,
    description:
      'A iconic basketball shoe with a leather upper, rubber shell toe, and a herringbone-pattern outsole.',
  },

  {
    name: 'Ray-Ban Aviator',
    slug: 'ray-ban-aviator',
    images: ['43', '44'],
    price: 154,
    description:
      'A classic sunglasses with a metal frame, teardrop-shaped lenses, and 100% UV protection.',
  },

  {
    name: 'Ray-Ban Wayfarer',
    slug: 'ray-ban-wayfarer',
    images: ['45', '46'],
    price: 144,
    description:
      'A popular sunglasses with a plastic frame, square-shaped lenses, and 100% UV protection.',
  },

  {
    name: 'Ray-Ban Clubmaster',
    slug: 'ray-ban-clubmaster',
    images: ['47', '48'],
    price: 150,
    description:
      'A retro sunglasses with a metal and plastic frame, round-shaped lenses, and 100% UV protection.',
  },

  {
    name: 'Ray-Ban Round',
    slug: 'ray-ban-round',
    images: ['49', '50'],
    price: 154,
    description: 'A trendy sunglasses with a metal frame, circular lenses, and 100% UV protection.',
  },
];

export default products;
