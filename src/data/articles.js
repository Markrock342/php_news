import { STOCK_PHOTOS } from '../utils/images';

export const CATEGORIES = ['Headline', 'Movement', 'Insight', 'People', 'Lifestyle'];

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Headline', path: '/headline' },
  { label: 'Movement', path: '/movement' },
  { label: 'Insight', path: '/insight' },
  { label: 'People', path: '/people' },
  { label: 'Lifestyle', path: '/lifestyle' },
  { label: 'Contact', path: '/contact' },
];

export const CATEGORY_SLUGS = {
  headline: 'Headline',
  movement: 'Movement',
  insight: 'Insight',
  people: 'People',
  lifestyle: 'Lifestyle',
};

const AUTHORS = [
  'ณัฐวรรณ สุขสมบูรณ์',
  'พิชญา รัตนกุล',
  'ธเนศ วงศ์ประเสริฐ',
  'ศิริพร อินทรชัย',
  'กมลชนก แสงทอง',
  'วรเมธ จิตรประสงค์',
];

const photo = (index) => STOCK_PHOTOS[index % STOCK_PHOTOS.length];

const hasHeadlineTag = (article) => article.tags.includes('Headline');

export const headlineArticles = [
  {
    id: 1,
    title: 'กลยุทธ์แบรนด์ไทยในตลาดเอเชีย: จาก Local Hero สู่ Regional Player',
    excerpt:
      'แบรนด์ไทยหลายรายเริ่มขยายฐานลูกค้าไปยังตลาดอาเซียน ด้วยกลยุทธ์ที่เน้นความเป็นเอกลักษณ์และการสื่อสารที่เข้าใจวัฒนธรรมท้องถิ่น',
    category: 'Headline',
    author: AUTHORS[0],
    date: '13 มิ.ย. 2026',
    image: photo(0),
    tags: ['Headline'],
  },
  {
    id: 2,
    title: 'ผู้บริหารรุ่นใหม่กับการเปลี่ยนผ่านองค์กรในยุค Digital-First',
    excerpt:
      'CEO รุ่นใหม่หลายคนนำองค์กรเข้าสู่การปรับโครงสร้าง เน้นความคล่องตัวและการตัดสินใจจากข้อมูลมากกว่าลำดับชั้นแบบเดิม',
    category: 'People',
    author: AUTHORS[1],
    date: '13 มิ.ย. 2026',
    image: photo(1),
    tags: ['Headline'],
  },
  {
    id: 3,
    title: 'Insight ธุรกิจค้าปลีกปี 2026: Omnichannel ไม่ใช่ทางเลือก แต่เป็นสิ่งจำเป็น',
    excerpt:
      'รายงานเชิงลึกชี้ว่าผู้บริโภคไทยคาดหวังประสบการณ์ที่ seamless ทั้งออนไลน์และออฟไลน์ แบรนด์ที่ล่าช้าจะเสียโอกาสทันที',
    category: 'Insight',
    author: AUTHORS[2],
    date: '12 มิ.ย. 2026',
    image: photo(2),
    tags: ['Headline'],
  },
  {
    id: 4,
    title: 'Movement: แบรนด์ใหญ่เปิดตัวแคมเปญใหม่ เน้น Storytelling ที่เชื่อมโยงชุมชน',
    excerpt:
      'แคมเปญล่าสุดจากแบรนด์ชั้นนำใช้เรื่องราวจากผู้คนในชุมชนเป็นหัวใจ สะท้อนเทรนด์ Purpose-driven Marketing ที่เติบโตต่อเนื่อง',
    category: 'Movement',
    author: AUTHORS[3],
    date: '12 มิ.ย. 2026',
    image: photo(3),
    tags: ['Headline'],
  },
  {
    id: 5,
    title: 'Lifestyle ของคนทำงานยุคใหม่: Work-Life Integration แทน Work-Life Balance',
    excerpt:
      'พฤติกรรมคนทำงานรุ่นใหม่ไม่แยกชีวิตส่วนตัวกับการทำงานอีกต่อไป แต่มองหาวิธีผสานทั้งสองให้เกิดประสิทธิภาพ',
    category: 'Lifestyle',
    author: AUTHORS[4],
    date: '12 มิ.ย. 2026',
    image: photo(4),
    tags: ['Headline'],
  },
  {
    id: 6,
    title: 'เทรนด์ผู้บริโภคในเอเชียตะวันออกเฉียงใต้: Value Seeking แต่ไม่ลดคุณภาพ',
    excerpt:
      'ผู้บริโภคในอาเซียนยังคงใส่ใจราคา แต่พร้อมจ่ายเพิ่มเมื่อเห็นคุณค่าชัดเจน โดยเฉพาะด้านสุขภาพและความยั่งยืน',
    category: 'Insight',
    author: AUTHORS[5],
    date: '11 มิ.ย. 2026',
    image: photo(5),
    tags: ['Headline'],
  },
  {
    id: 7,
    title: 'ธุรกิจสื่อออนไลน์กับการเปลี่ยนพฤติกรรมผู้อ่าน: จาก Scroll สู่ Deep Read',
    excerpt:
      'สื่อออนไลน์ที่รอดต้องสร้างเนื้อหาที่มีคุณภาพพอให้ผู้อ่านหยุด scroll และอ่านจนจบ ไม่ใช่แค่หัวข้อ clickbait',
    category: 'Headline',
    author: AUTHORS[0],
    date: '11 มิ.ย. 2026',
    image: photo(6),
    tags: ['Headline'],
  },
  {
    id: 8,
    title: 'แบรนด์ไทยปรับตัวอย่างไรในยุค AI: โอกาสและความเสี่ยงที่ผู้บริหารต้องรู้',
    excerpt:
      'AI เปลี่ยนวิธีการทำการตลาด การบริการลูกค้า และการสร้างเนื้อหา แบรนด์ไทยที่เริ่มเรียนรู้เร็วจะได้เปรียบ',
    category: 'Insight',
    author: AUTHORS[1],
    date: '11 มิ.ย. 2026',
    image: photo(7),
    tags: ['Headline'],
  },
  {
    id: 9,
    title: 'ตลาดอสังหาฯ กับผู้บริโภครุ่นใหม่: คอนโดไม่ใช่แค่ที่อยู่ แต่คือ Lifestyle Hub',
    excerpt:
      'Gen Y และ Gen Z มองคอนโดเป็นพื้นที่ใช้ชีวิตที่รวม co-working, wellness และ community ไว้ในที่เดียว',
    category: 'Movement',
    author: AUTHORS[2],
    date: '10 มิ.ย. 2026',
    image: photo(8),
    tags: ['Headline'],
  },
  {
    id: 10,
    title: 'เบื้องหลังแคมเปญการตลาดที่คนพูดถึง: วิเคราะห์กลไก Viral ที่ไม่ใช่เรื่องบังเอิญ',
    excerpt:
      'แคมเปญที่สร้าง engagement สูงมีองค์ประกอบร่วมกัน — ความจริงใจ, timing ที่เหมาะสม และช่องทางที่ตรงกลุ่มเป้าหมาย',
    category: 'Movement',
    author: AUTHORS[3],
    date: '10 มิ.ย. 2026',
    image: photo(9),
    tags: ['Headline'],
  },
  {
    id: 11,
    title: 'People: ผู้หญิงในตำแหน่ง C-Suite เพิ่มขึ้นในไทย สะท้อนการเปลี่ยนแปลงองค์กร',
    excerpt:
      'จำนวนผู้หญิงในตำแหน่งผู้บริหารระดับสูงเพิ่มขึ้นอย่างต่อเนื่อง องค์กรเริ่มให้ความสำคัญกับ diversity ในการตัดสินใจ',
    category: 'People',
    author: AUTHORS[4],
    date: '10 มิ.ย. 2026',
    image: photo(10),
    tags: ['Headline'],
  },
  {
    id: 12,
    title: 'Sustainability Marketing: แบรนด์ไทยเริ่ม Walk the Talk มากกว่า Greenwashing',
    excerpt:
      'ผู้บริโภครุ่นใหม่ตรวจสอบความจริงใจของแบรนด์มากขึ้น บริษัทที่ลงมือทำจริงได้รับความไว้วางใจและ loyalty',
    category: 'Insight',
    author: AUTHORS[5],
    date: '9 มิ.ย. 2026',
    image: photo(11),
    tags: ['Headline'],
  },
  {
    id: 13,
    title: 'FinTech ไทยเติบโต: การแข่งขันระหว่าง Bank ดั้งเดิมกับ Challenger รุ่นใหม่',
    excerpt:
      'ตลาดการเงินดิจิทัลในไทยร้อนแรง ผู้เล่นใหม่แข่งด้วย UX และความเร็ว ขณะที่ธนาคารดั้งเดิมพึ่งพา trust และ ecosystem',
    category: 'Headline',
    author: AUTHORS[0],
    date: '9 มิ.ย. 2026',
    image: photo(12),
    tags: ['Headline'],
  },
  {
    id: 14,
    title: 'Creator Economy ในไทย: จาก Influencer สู่ Business Owner ที่สร้างแบรนด์ของตัวเอง',
    excerpt:
      'ครีเอเตอร์หลายคนขยายจาก content creator เป็นเจ้าของธุรกิจจริง สร้างรายได้ที่มั่นคงกว่า sponsorship อย่างเดียว',
    category: 'People',
    author: AUTHORS[1],
    date: '9 มิ.ย. 2026',
    image: photo(13),
    tags: ['Headline'],
  },
  {
    id: 15,
    title: 'Luxury Market ในเอเชีย: ไทยเป็นจุดหมายสำคัญของแบรนด์ระดับโลก',
    excerpt:
      'แบรนด์ luxury ระดับโลกขยายร้านและ pop-up ในไทยมากขึ้น โดยเฉพาะกรุงเทพฯ ที่มีกำลังซื้อและนักท่องเที่ยวคุณภาพสูง',
    category: 'Movement',
    author: AUTHORS[2],
    date: '8 มิ.ย. 2026',
    image: photo(14),
    tags: ['Headline'],
  },
  {
    id: 16,
    title: 'Data-Driven Marketing: ทำไมแบรนด์ไทยหลายรายยังใช้ข้อมูลไม่เต็มศักยภาพ',
    excerpt:
      'แม้มีเครื่องมือ analytics มากมาย แต่การตัดสินใจทางการตลาดหลายครั้งยังอิง intuition มากกว่าข้อมูลจริง',
    category: 'Insight',
    author: AUTHORS[3],
    date: '8 มิ.ย. 2026',
    image: photo(15),
    tags: ['Headline'],
  },
  {
    id: 17,
    title: 'Lifestyle: Urban Wellness กลายเป็น Mega Trend ของคนเมืองไทย',
    excerpt:
      'สุขภาพจิตและกายเป็นหัวข้อที่แบรนด์ทุกประเภทหันมาเชื่อมโยง ตั้งแต่อาหาร เทคโนโลยี ไปจนถึงอสังหาริมทรัพย์',
    category: 'Lifestyle',
    author: AUTHORS[4],
    date: '8 มิ.ย. 2026',
    image: photo(16),
    tags: ['Headline'],
  },
  {
    id: 18,
    title: 'Supply Chain หลังโควิด: แบรนด์ไทยเรียนรู้การจัดการความเสี่ยงแบบใหม่',
    excerpt:
      'การพึ่งพา supply chain เดียวพิสูจน์แล้วว่าเสี่ยง องค์กรเริ่ม diversify แหล่งวัตถุดิบและ logistics partners',
    category: 'Headline',
    author: AUTHORS[5],
    date: '7 มิ.ย. 2026',
    image: photo(17),
    tags: ['Headline'],
  },
  {
    id: 19,
    title: 'Employer Branding: สงครามแย่ง Talent ในตลาดงานไทยเข้มข้นขึ้น',
    excerpt:
      'บริษัทที่สร้าง employer brand ที่ชัดเจนได้เปรียบในการดึงดูดและรักษาคนเก่ง โดยเฉพาะในกลุ่ม tech และ creative',
    category: 'People',
    author: AUTHORS[0],
    date: '7 มิ.ย. 2026',
    image: photo(18),
    tags: ['Headline'],
  },
  {
    id: 20,
    title: 'Regional Expansion: บทเรียนจากแบรนด์ไทยที่ขยายไปตลาด CLMV สำเร็จ',
    excerpt:
      'การเข้าตลาดเพื่อนบ้านต้องเข้าใจกฎหมาย วัฒนธรรม และพฤติกรรมผู้บริโภคที่แตกต่าง ไม่ใช่แค่ copy-paste โมเดลจากไทย',
    category: 'Movement',
    author: AUTHORS[1],
    date: '7 มิ.ย. 2026',
    image: photo(19),
    tags: ['Headline'],
  },
];

/** ข่าวหมวดอื่นที่ไม่มี Tag Headline — จะไม่ขึ้นหน้า Home */
export const categoryOnlyArticles = [
  {
    id: 21,
    title: 'Movement: แบรนด์ F&B เปิด Pop-up ชั่วคราว ทดสอบตลาดก่อนลงทุนใหญ่',
    excerpt: 'กลยุทธ์ soft launch ผ่าน pop-up store ช่วยวัด demand จริงก่อนตัดสินใจเปิดสาขาถาวร',
    category: 'Movement',
    author: AUTHORS[2],
    date: '6 มิ.ย. 2026',
    image: photo(3),
    tags: [],
  },
  {
    id: 22,
    title: 'Movement: Retail Media Network กลายเป็นรายได้ใหม่ของห้างค้าปลีก',
    excerpt: 'ห้างสรรพสินค้าเปลี่ยน traffic ในร้านให้เป็นพื้นที่โฆษณาดิจิทัล สร้าง margin ใหม่นอกการขายสินค้า',
    category: 'Movement',
    author: AUTHORS[3],
    date: '5 มิ.ย. 2026',
    image: photo(9),
    tags: [],
  },
  {
    id: 23,
    title: 'Insight: 5 แรงกดดันตลาดโฆษณาดิจิทัลไทยที่ CMO ต้องเตรียมรับ',
    excerpt: 'ทั้ง cookie-less, ad fraud และ platform dependency บีบให้แบรนด์ก distrib งบและวัดผลให้แม่นขึ้น',
    category: 'Insight',
    author: AUTHORS[4],
    date: '6 มิ.ย. 2026',
    image: photo(15),
    tags: [],
  },
  {
    id: 24,
    title: 'Insight: ทำไม Brand Health Tracking กลับมาสำคัญในยุด ROI Marketing',
    excerpt: 'เมื่อ performance ads แข่งกันหนัก แบรนด์ที่ไม่วัด long-term equity เสี่ยงถูก commoditize',
    category: 'Insight',
    author: AUTHORS[5],
    date: '4 มิ.ย. 2026',
    image: photo(7),
    tags: [],
  },
  {
    id: 25,
    title: 'People: Chief Growth Officer บทบาทใหม่ที่องค์กรไทยเริ่มจ้างเพิ่ม',
    excerpt: 'CGO เชื่อม product, marketing และ sales ให้ growth ไม่แตก silo ในยุดที่ตลาดเปลี่ยนเร็ว',
    category: 'People',
    author: AUTHORS[0],
    date: '6 มิ.ย. 2026',
    image: photo(1),
    tags: [],
  },
  {
    id: 26,
    title: 'People: บทสัมภาษณ์ผู้ก่อตั้งสตาร์ทอัพไทยที่ pivot 3 ครั้งก่อน exit',
    excerpt: 'เส้นทาง pivot สะท้อนว่าความยืดหยุ่นและทีมที่แข็งแรงสำคัญกว่าไอเดียแรกเสมอ',
    category: 'People',
    author: AUTHORS[1],
    date: '3 มิ.ย. 2026',
    image: photo(10),
    tags: [],
  },
  {
    id: 27,
    title: 'Lifestyle: Quiet Luxury มาแรงในกลุ่มมือถือไทย แบรนด์เงียบแต่พรีเมียม',
    excerpt: 'ผู้บริโภครุ่นใหม่หันไปซื้อของที่ดูเรียบง่ายแต่คุณภาพสูง มากกว่า logo ที่โอ้อวด',
    category: 'Lifestyle',
    author: AUTHORS[2],
    date: '5 มิ.ย. 2026',
    image: photo(16),
    tags: [],
  },
  {
    id: 28,
    title: 'Lifestyle: Digital Detox Retreat ธุรกิจใหม่ที่โตตามความเหนื่อยของคนทำงาน',
    excerpt: 'แคมป์และรีสอร์ทที่ห้ามมือถือกลายเป็นจุดขายหลักสำหรับคนทำงานในเมืองที่ burnout',
    category: 'Lifestyle',
    author: AUTHORS[3],
    date: '2 มิ.ย. 2026',
    image: photo(4),
    tags: [],
  },
];

export const allArticles = [...headlineArticles, ...categoryOnlyArticles];

export function getHomeArticles() {
  return headlineArticles.filter(hasHeadlineTag);
}

export function getArticlesByCategory(categoryName) {
  return allArticles.filter((a) => a.category === categoryName);
}

export function getArticleById(id) {
  return allArticles.find((a) => a.id === Number(id));
}

export function getRelatedArticles(article, limit = 4) {
  return allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, limit);
}

export function getDefaultContent(article) {
  return [
    article.excerpt,
    'บทความนี้เป็นตัวอย่างเนื้อหาใน Mockup สำหรับ Marketimes Asia ระบบ WordPress จริงจะดึงเนื้อหาเต็มจาก Editor พร้อมรองรับ Guest Author และ Banner ระหว่างย่อหน้า',
    'แบรนด์และองค์กรที่ต้องการเข้าใจตลาดไทยและเอเชีย จำเป็นต้องติดตามทั้งมโนทัศน์เชิงกลยุทธ์และสัญญาณจากพฤติกรรมผู้บริโภคที่เปลี่ยนแปลงอย่างรวดเร็ว',
    'Marketimes Asia นำเสนอมุมมองที่เป็นกลาง อ่านง่าย และเชื่อมโยงเหตุการณ์ทางธุรกิจกับบริบทที่ผู้อ่านนำไปใช้ได้จริง',
  ];
}

export const ARTICLE_CONTENT = {
  1: [
    'ตลาดเอเชียกำลังกลายเป็นเวทีสำคัญที่สุดสำหรับแบรนด์ไทยที่ต้องการขยายฐานลูกค้า ด้วยกลุ่มประชากรวัยทำงานที่เติบโตอย่างต่อเนื่องและกำลังซื้อที่เพิ่มขึ้น หลายแบรนด์ไทยเริ่มมองว่าการเป็น Local Hero ในเมืองไทยไม่เพียงพออีกต่อไป',
    'กลยุทธ์ที่ประสบความสำเร็จมักเริ่มจากการทำความเข้าใจวัฒนธรรมท้องถิ่นอย่างลึกซึ้ง ไม่ใช่แค่แปลภาษาโฆษณา แต่ต้องปรับ insight ให้สอดคล้องกับค่านิยมและพฤติกรรมของผู้บริโภคในแต่ละประเทศ',
    'แบรนด์อาหารและเครื่องดื่มไทยหลายรายใช้จุดแข็งด้านรสชาติและความเป็นเอกลักษณ์เป็นฐาน แล้วค่อยๆ ปรับสูตรและ positioning ให้เหมาะกับตลาดเป้าหมาย โดยไม่สูญเสีย DNA ของแบรนด์',
    'ด้านการสื่อสาร การใช้ local influencer และ community marketing ช่วยสร้างความน่าเชื่อถือได้เร็วกว่าการทำ mass advertising แบบดั้งเดิม โดยเฉพาะใน Singapore, Vietnam และ Indonesia',
    'อย่างไรก็ตาม ความท้าทายยังคงมี — ตั้งแต่กฎหมายและข้อกำหนดด้านสินค้าในแต่ละประเทศ ไปจนถึงการแข่งขันกับแบรนด์ท้องถิ่นที่เข้าใจตลาดมานาน',
  ],
};

export function getArticleContent(article) {
  return ARTICLE_CONTENT[article.id] || getDefaultContent(article);
}

export const recentPosts = headlineArticles.slice(1, 6);
export const topPosts = [headlineArticles[0], headlineArticles[2], headlineArticles[7], headlineArticles[9], headlineArticles[12]];
export const featuredArticle = headlineArticles[0];
