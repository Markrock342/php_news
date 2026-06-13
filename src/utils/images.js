/** Unsplash — ใช้สำหรับ Mockup เท่านั้น (แทนที่ด้วยรูปจริงตอน WordPress) */
const UNSPLASH = 'https://images.unsplash.com';

export const STOCK_PHOTOS = [
  { id: 'photo-1486406146926-c627a92ad1ab', alt: 'ตึกระฟ้าเมืองธุรกิจเอเชีย' },
  { id: 'photo-1560472354-b33ff0c44a43', alt: 'ผู้บริหารในห้องประชุม' },
  { id: 'photo-1441986300917-64674bd600d8', alt: 'ร้านค้าปลีกสมัยใหม่' },
  { id: 'photo-1552664730-d307ca884978', alt: 'ทีมงานการตลาดระดมสมอง' },
  { id: 'photo-1497366216548-37526070297c', alt: 'ออฟฟิศคนทำงานยุคใหม่' },
  { id: 'photo-1556742049-0cfed4f6a45d', alt: 'ผู้บริโภคช้อปปิ้งออนไลน์' },
  { id: 'photo-1504711434969-e33886168f5c', alt: 'สื่อดิจิทัลและการอ่านข่าวออนไลน์' },
  { id: 'photo-1677442136019-21780ecad995', alt: 'เทคโนโลยี AI และธุรกิจ' },
  { id: 'photo-1560518883-ce09059eeffa', alt: 'อสังหาริมทรัพย์และคอนโด' },
  { id: 'photo-1516321318423-f06f85e504b3', alt: 'แคมเปญการตลาดและโซเชียลมีเดีย' },
  { id: 'photo-1573496359142-b8d87734a5a2', alt: 'ผู้หญิงผู้บริหารมืออาชีพ' },
  { id: 'photo-1509391366360-2e959784a276', alt: 'ธุรกิจยั่งยืนและพลังงานสะอาด' },
  { id: 'photo-1551288049-bebda4e38f71', alt: 'FinTech และข้อมูลการเงิน' },
  { id: 'photo-1529626455594-4ff0802cfb7e', alt: 'ครีเอเตอร์และ Influencer' },
  { id: 'photo-1445205170230-053b83016050', alt: 'ตลาด Luxury และแบรนด์พรีเมียม' },
  { id: 'photo-1460925895917-afdab827c52f', alt: 'Data analytics และการตลาด' },
  { id: 'photo-1544367567-0f2fcb009e0b', alt: 'Urban wellness และไลฟ์สไตล์สุขภาพ' },
  { id: 'photo-1586528116311-ad8dd3c8310d', alt: 'คลังสินค้าและ Supply chain' },
  { id: 'photo-1522071820081-009f0129c71c', alt: 'ทีมงานสตาร์ทอัพและ Employer branding' },
  { id: 'photo-1524661135-423995f22d0b', alt: 'การขยายธุรกิจสู่ตลาดระดับภูมิภาค' },
];

export const INSTAGRAM_PHOTOS = STOCK_PHOTOS.slice(0, 6);

export function getImageUrl(photoId, width = 800, height = 500) {
  return `${UNSPLASH}/${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

export function getImageSrcSet(photoId, widths = [400, 600, 800, 1200]) {
  return widths.map((w) => `${getImageUrl(photoId, w, Math.round(w * 0.625))} ${w}w`).join(', ');
}
