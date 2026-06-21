import { GallerySection } from '@/components/GallerySection';
import { Hero } from '@/components/Hero';
import { MessageSection } from '@/components/MessageSection';
import { NoticeSection } from '@/components/NoticeSection';
import { ReasonsSection } from '@/components/ReasonsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { SymptomGuideSection } from '@/components/SymptomGuideSection';
import { UpdatesSection } from '@/components/UpdatesSection';
import type { SectionKey } from '@/src/data/templates';
import type { SiteData } from '@/src/data/site';

type SectionRendererProps = {
  sections: readonly SectionKey[];
  site: SiteData;
};

export function SectionRenderer({ sections, site }: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section) {
          case 'hero':
            return <Hero hero={site.hero} hours={site.hours} key={section} />;
          case 'notices':
            return (
              <NoticeSection
                key={section}
                notices={site.notices}
                section={site.sections.notices}
              />
            );
          case 'message':
            return <MessageSection key={section} message={site.message} tel={site.clinic.tel} />;
          case 'services':
            return (
              <ServicesSection
                key={section}
                section={site.sections.services}
                services={site.services}
              />
            );
          case 'reasons':
            return (
              <ReasonsSection
                clinicName={site.clinic.name}
                key={section}
                reasons={site.reasons}
                section={site.sections.reasons}
              />
            );
          case 'symptomGuides':
            return (
              <SymptomGuideSection
                guides={site.symptomGuides}
                key={section}
                section={site.sections.symptomGuides}
              />
            );
          case 'gallery':
            return (
              <GallerySection
                gallery={site.gallery}
                key={section}
                section={site.sections.gallery}
              />
            );
          case 'updates':
            return (
              <UpdatesSection
                key={section}
                section={site.sections.updates}
                updates={site.updates}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
