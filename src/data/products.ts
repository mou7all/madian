export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  categoryAr: string;
  categoryEn: string;
  images: string[];
}

export interface FooterData {
  phoneAr: string;
  phoneEn: string;
  emailAr: string;
  emailEn: string;
  addressAr: string;
  addressEn: string;
  workingHoursAr: string;
  workingHoursEn: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    snapchat?: string;
    tiktok?: string;
  };
}

export const products: Product[] = [
  {
    id: "boxes",
    nameAr: "بوكسات",
    nameEn: "Boxes",
    descriptionAr: "بوكسات تغليف فاخرة بتصاميم مخصصة تناسب جميع المنتجات، بجودة طباعة عالية ولمسات نهائية احترافية",
    descriptionEn: "Premium packaging boxes with custom designs for all products, high print quality and professional finishes",
    categoryAr: "تغليف",
    categoryEn: "Packaging",
    images: [],
  },
  {
    id: "paper-bags",
    nameAr: "أكياس ورقية",
    nameEn: "Paper Bags",
    descriptionAr: "أكياس ورقية أنيقة بأحجام مختلفة مع طباعة احترافية لهويتك التجارية",
    descriptionEn: "Elegant paper bags in various sizes with professional printing for your brand identity",
    categoryAr: "تغليف",
    categoryEn: "Packaging",
    images: [],
  },
  {
    id: "fabric-bags",
    nameAr: "أكياس قماش",
    nameEn: "Fabric Bags",
    descriptionAr: "أكياس قماشية صديقة للبيئة بتصاميم عصرية ومتانة عالية",
    descriptionEn: "Eco-friendly fabric bags with modern designs and high durability",
    categoryAr: "تغليف",
    categoryEn: "Packaging",
    images: [],
  },
  {
    id: "business-cards",
    nameAr: "كروت شخصية",
    nameEn: "Business Cards",
    descriptionAr: "كروت شخصية فاخرة بتقنيات طباعة متعددة ولمسات نهائية مميزة",
    descriptionEn: "Premium business cards with multiple printing techniques and distinctive finishes",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "thank-cards",
    nameAr: "كروت شكر",
    nameEn: "Thank You Cards",
    descriptionAr: "كروت شكر أنيقة تعكس احترافية علامتك التجارية",
    descriptionEn: "Elegant thank you cards that reflect your brand professionalism",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "wedding-cards",
    nameAr: "كروت أفراح",
    nameEn: "Wedding Cards",
    descriptionAr: "كروت أفراح بتصاميم راقية ولمسات فاخرة تناسب أجمل المناسبات",
    descriptionEn: "Elegant wedding cards with premium designs for the most beautiful occasions",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "wrapping-paper",
    nameAr: "ورق تغليف",
    nameEn: "Wrapping Paper",
    descriptionAr: "ورق تغليف مخصص بتصاميم فريدة تعزز هوية علامتك التجارية",
    descriptionEn: "Custom wrapping paper with unique designs that enhance your brand identity",
    categoryAr: "تغليف",
    categoryEn: "Packaging",
    images: [],
  },
  {
    id: "labels",
    nameAr: "ليبلات",
    nameEn: "Labels",
    descriptionAr: "ليبلات احترافية لجميع أنواع المنتجات بمقاسات وخامات متنوعة",
    descriptionEn: "Professional labels for all product types with various sizes and materials",
    categoryAr: "ملصقات",
    categoryEn: "Stickers",
    images: [],
  },
  {
    id: "stickers",
    nameAr: "ستيكرات لاصقة",
    nameEn: "Adhesive Stickers",
    descriptionAr: "ستيكرات لاصقة عالية الجودة بأشكال وأحجام مختلفة",
    descriptionEn: "High-quality adhesive stickers in various shapes and sizes",
    categoryAr: "ملصقات",
    categoryEn: "Stickers",
    images: [],
  },
  {
    id: "paper-cups",
    nameAr: "أكواب ورقية",
    nameEn: "Paper Cups",
    descriptionAr: "أكواب ورقية مطبوعة بتصاميم جذابة وبمعايير صحية عالية",
    descriptionEn: "Printed paper cups with attractive designs and high health standards",
    categoryAr: "أكواب",
    categoryEn: "Cups",
    images: [],
  },
  {
    id: "plastic-cups",
    nameAr: "أكواب بلاستيك",
    nameEn: "Plastic Cups",
    descriptionAr: "أكواب بلاستيكية شفافة ومطبوعة بجودة عالية",
    descriptionEn: "Transparent and printed plastic cups with high quality",
    categoryAr: "أكواب",
    categoryEn: "Cups",
    images: [],
  },
  {
    id: "ceramic-cups",
    nameAr: "أكواب سيراميك",
    nameEn: "Ceramic Mugs",
    descriptionAr: "أكواب سيراميك مطبوعة بتصاميم مخصصة وهدايا مميزة",
    descriptionEn: "Printed ceramic mugs with custom designs and distinctive gifts",
    categoryAr: "أكواب",
    categoryEn: "Cups",
    images: [],
  },
  {
    id: "acrylic-works",
    nameAr: "أعمال الأكريليك",
    nameEn: "Acrylic Works",
    descriptionAr: "أعمال أكريليك احترافية للافتات والعروض المميزة",
    descriptionEn: "Professional acrylic works for signs and premium displays",
    categoryAr: "إعلانات",
    categoryEn: "Advertising",
    images: [],
  },
  {
    id: "id-cards",
    nameAr: "بطاقات آي دي",
    nameEn: "ID Cards",
    descriptionAr: "بطاقات هوية مهنية بتصاميم أنظمة وبلاستيك متين",
    descriptionEn: "Professional ID cards with elegant designs and durable plastic",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "signboards",
    nameAr: "لوحات إعلانية",
    nameEn: "Signboards",
    descriptionAr: "لوحات إعلانية داخلية وخارجية بخامات عالية الجودة",
    descriptionEn: "Indoor and outdoor signboards with high-quality materials",
    categoryAr: "إعلانات",
    categoryEn: "Advertising",
    images: [],
  },
  {
    id: "roll-up",
    nameAr: "رول أب",
    nameEn: "Roll-Up Banners",
    descriptionAr: "ستاندات رول أب سهلة الحمل والتركيب بجودة طباعة ممتازة",
    descriptionEn: "Easy-to-carry roll-up stands with excellent print quality",
    categoryAr: "إعلانات",
    categoryEn: "Advertising",
    images: [],
  },
  {
    id: "pop-up",
    nameAr: "بوب أب",
    nameEn: "Pop-Up Displays",
    descriptionAr: "عارضات بوب أب احترافية للمعارض والفعاليات",
    descriptionEn: "Professional pop-up displays for exhibitions and events",
    categoryAr: "إعلانات",
    categoryEn: "Advertising",
    images: [],
  },
  {
    id: "banners",
    nameAr: "بنرات",
    nameEn: "Banners",
    descriptionAr: "بنرات إعلانية بأحجام كبيرة وألوان زاهية ومقاومة للعوامل الجوية",
    descriptionEn: "Large-format advertising banners with vibrant colors and weather resistance",
    categoryAr: "إعلانات",
    categoryEn: "Advertising",
    images: [],
  },
  {
    id: "t-shirts",
    nameAr: "تيشيرتات",
    nameEn: "T-Shirts",
    descriptionAr: "تيشيرتات مطبوعة بتقنيات حديثة وألوان ثابتة وجودة عالية",
    descriptionEn: "T-shirts printed with modern techniques, fixed colors, and high quality",
    categoryAr: "ملابس",
    categoryEn: "Apparel",
    images: [],
  },
  {
    id: "flags",
    nameAr: "أعلام",
    nameEn: "Flags",
    descriptionAr: "أعلام وطنية وإعلانية بخامات متينة وألوان ثابتة",
    descriptionEn: "National and advertising flags with durable materials and fixed colors",
    categoryAr: "إعلانات",
    categoryEn: "Advertising",
    images: [],
  },
  {
    id: "invoices",
    nameAr: "فواتير",
    nameEn: "Invoices",
    descriptionAr: "دفاتر فواتير احترافية بتصاميم منظمة وأرقام متسلسلة",
    descriptionEn: "Professional invoice books with organized designs and sequential numbering",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "letterheads",
    nameAr: "ورق مراسلات",
    nameEn: "Letterheads",
    descriptionAr: "ورق مراسلات رسمي بتصميم أنيق يعكس احترافية شركتك",
    descriptionEn: "Official letterheads with elegant design reflecting your company professionalism",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "envelopes",
    nameAr: "مظاريف",
    nameEn: "Envelopes",
    descriptionAr: "مظاريف رسمية وتجارية بأحجام مختلفة وطباعة مخصصة",
    descriptionEn: "Official and commercial envelopes in various sizes with custom printing",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "brochures",
    nameAr: "بروشورات",
    nameEn: "Brochures",
    descriptionAr: "بروشورات دعائية بتصاميم إبداعية وطباعة ملونة عالية الجودة",
    descriptionEn: "Promotional brochures with creative designs and high-quality color printing",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
  {
    id: "catalogs",
    nameAr: "كتالوجات",
    nameEn: "Catalogs",
    descriptionAr: "كتالوجات منتجات احترافية بتجليد فاخر وطباعة مميزة",
    descriptionEn: "Professional product catalogs with premium binding and distinctive printing",
    categoryAr: "مطبوعات",
    categoryEn: "Prints",
    images: [],
  },
];

export const defaultFooter: FooterData = {
  phoneAr: "966554218410+",
  phoneEn: "+966 55 421 8410",
  emailAr: "info@printmadian.com",
  emailEn: "info@printmadian.com",
  addressAr: "المملكة العربية السعودية",
  addressEn: "Kingdom of Saudi Arabia",
  workingHoursAr: "السبت - الخميس: 9 صباحاً - 9 مساءً",
  workingHoursEn: "Saturday - Thursday: 9 AM - 9 PM",
  socialLinks: {
    instagram: "",
    twitter: "",
    snapchat: "",
    tiktok: "",
  },
};

export const categories = [
  { id: "all", nameAr: "الكل", nameEn: "All" },
  { id: "تغليف", nameAr: "تغليف", nameEn: "Packaging" },
  { id: "مطبوعات", nameAr: "مطبوعات", nameEn: "Prints" },
  { id: "ملصقات", nameAr: "ملصقات", nameEn: "Stickers" },
  { id: "أكواب", nameAr: "أكواب", nameEn: "Cups" },
  { id: "إعلانات", nameAr: "إعلانات", nameEn: "Advertising" },
  { id: "ملابس", nameAr: "ملابس", nameEn: "Apparel" },
];
