import type { ImageItem } from '@/src/data/site';
import { SectionTitle } from '@/components/SectionTitle';

export function GallerySection({
  gallery,
  section,
}: {
  gallery: readonly ImageItem[];
  section: {
    title: string;
    ariaLabel: string;
  };
}) {
  const loopItems = [...gallery, ...gallery];

  return (
    <section className="sec reveal top-view">
      <div className="container">
        <SectionTitle>{section.title}</SectionTitle>
      </div>
      <div className="gallery-scroll" aria-label={section.ariaLabel}>
        <div className="gallery-track">
          {loopItems.map((image, index) => (
            <img key={`${image.src}-${index}`} className="ph" src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
