import { SectionTitle } from '@/components/SectionTitle';

type Service = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function ServicesSection({
  section,
  services,
}: {
  section: {
    titleLines: readonly string[];
    moreLabel: string;
  };
  services: readonly Service[];
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
        <div className="grid g4">
          {services.map((service) => (
            <a className="card service-card center stack" href={service.href} key={service.title}>
              <img className="dept-ico" src={service.icon} alt="" />
              <strong>{service.title}</strong>
              <span className="wf-label">{service.description}</span>
              <span className="text-link">{section.moreLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
