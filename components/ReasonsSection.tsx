import type { ButtonLink, ImageItem } from '@/src/data/site';
import { SectionTitle } from '@/components/SectionTitle';

type Reason = {
  title: string;
  body: string;
  image: ImageItem;
  link?: ButtonLink;
};

export function ReasonsSection({
  clinicName,
  reasons,
  section,
}: {
  clinicName: string;
  reasons: readonly Reason[];
  section: {
    connector: string;
    suffix: string;
  };
}) {
  return (
    <section className="sec reveal">
      <div className="container">
        <SectionTitle>
          {clinicName}
          {section.connector}
          <br />
          {section.suffix}
        </SectionTitle>
        <div className="stack">
          {reasons.map((reason, index) => (
            <article className="card reason-card" key={reason.title}>
              <div className={`reason-inner ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="reason-image">
                  <img className="ph ph-reason" src={reason.image.src} alt={reason.image.alt} />
                </div>
                <div className="stack">
                  <div className="reason-head">
                    <span className="num">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{reason.title}</h3>
                  </div>
                  <p>{reason.body}</p>
                  {reason.link ? (
                    <a className="btn outline fit" href={reason.link.href}>
                      {reason.link.label}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
