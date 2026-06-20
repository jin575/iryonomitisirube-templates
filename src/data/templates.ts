export type SectionKey =
  | 'hero'
  | 'notices'
  | 'message'
  | 'services'
  | 'reasons'
  | 'symptomGuides'
  | 'gallery'
  | 'updates';

export type TemplateKey = 'trust';

export const templates: Record<TemplateKey, readonly SectionKey[]> = {
  trust: [
    'hero',
    'notices',
    'message',
    'services',
    'reasons',
    'symptomGuides',
    'gallery',
    'updates',
  ],
};
