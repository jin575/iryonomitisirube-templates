import { HoursTable } from '@/components/HoursTable';
import type { ImageItem } from '@/src/data/site';

type HeroProps = {
  hero: {
    title: readonly string[];
    lead: string;
    smallSlides: readonly ImageItem[];
    largeSlides: readonly ImageItem[];
  };
  hours: {
    heading: string;
    days: readonly string[];
    rows: readonly {
      label: string;
      note: string;
      marks: readonly string[];
    }[];
  };
};

export function Hero({ hero, hours }: HeroProps) {
  return (
    <section className="hero">
      <div className="container inner">
        <div className="hero-copy">
          <h1>
            {hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="sub">{hero.lead}</p>
          <CrossFadeImages images={hero.smallSlides} className="hero-sm" />
          <div className="hero-hours-inline">
            <HoursTable hours={hours} />
          </div>
        </div>
        <div className="hero-media">
          <CrossFadeImages images={hero.largeSlides} className="xfade-lg" />
        </div>
      </div>
    </section>
  );
}

function CrossFadeImages({
  images,
  className,
}: {
  images: readonly ImageItem[];
  className: string;
}) {
  return (
    <div className={`xfade ${className}`}>
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
