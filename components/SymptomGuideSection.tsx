import { SectionTitle } from '@/components/SectionTitle';

type SymptomGuide = {
  title: string;
  items: readonly string[];
  links: readonly {
    label: string;
    href: string;
    icon: string;
  }[];
};

export function SymptomGuideSection({
  guides,
  section,
}: {
  guides: readonly SymptomGuide[];
  section: {
    titleLines: readonly string[];
    lead: string;
  };
}) {
  return (
    <section className="sec reveal">
      <div className="container">
        <SectionTitle>
          {section.titleLines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </SectionTitle>
        <p className="lead">{section.lead}</p>
        <div className="stack">
          {guides.map((guide) => (
            <article className="card trouble" key={guide.title}>
              <div className="trouble-left">
                <h3 className="trouble-head">{guide.title}</h3>
                <ul className="bul">
                  {guide.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="trouble-icons">
                {guide.links.map((link) => (
                  <a className="ico-link" href={link.href} key={link.label}>
                    <img className="dept-ico" src={link.icon} alt="" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
