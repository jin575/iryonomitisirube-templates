import { SectionTitle } from '@/components/SectionTitle';

type UpdateItem = {
  date: string;
  text: string;
};

export function UpdatesSection({
  section,
  updates,
}: {
  section: {
    title: string;
    archiveLink: {
      label: string;
      href: string;
    };
  };
  updates: readonly UpdateItem[];
}) {
  return (
    <section className="sec reveal">
      <div className="container">
        <SectionTitle>{section.title}</SectionTitle>
        <div className="updates-list">
          {updates.map((update) => (
            <article className="update-row" key={`${update.date}-${update.text}`}>
              <time>{update.date}</time>
              <p>{update.text}</p>
            </article>
          ))}
          <div className="center">
            <a className="btn outline" href={section.archiveLink.href}>
              {section.archiveLink.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
