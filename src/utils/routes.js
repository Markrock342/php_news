/** แมปชื่อผู้เขียน → slug สำหรับ URL */
export const AUTHOR_SLUGS = {
  'ณัฐวรรณ สุขสมบูรณ์': 'nattawan-suksomboon',
  'พิชญา รัตนกุล': 'pichaya-rattanagul',
  'ธเนศ วงศ์ประเสริฐ': 'thanat-wongprasert',
  'ศิริพร อินทรชัย': 'siriporn-intrachai',
  'กมลชนก แสงทอง': 'kamonchanok-saengthong',
  'วรเมธ จิตรประสงค์': 'woramet-jitprasong',
};

export const SLUG_TO_AUTHOR = Object.fromEntries(
  Object.entries(AUTHOR_SLUGS).map(([name, slug]) => [slug, name])
);

export const CATEGORY_TO_SLUG = {
  Headline: 'headline',
  Movement: 'movement',
  Insight: 'insight',
  People: 'people',
  Lifestyle: 'lifestyle',
};

export function getAuthorSlug(authorName) {
  return AUTHOR_SLUGS[authorName];
}

export function getCategoryPath(categoryName) {
  const slug = CATEGORY_TO_SLUG[categoryName];
  return slug ? `/${slug}` : '/articles';
}

export function getTagPath(tagName) {
  if (tagName === 'Headline') return '/headline';
  const slug = CATEGORY_TO_SLUG[tagName];
  return slug ? `/${slug}` : '/articles';
}
