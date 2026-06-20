import type { ButtonLink } from '@/src/data/site';
import { SectionTitle } from '@/components/SectionTitle';

type Notice = {
  title: string;
  body: string;
  link?: ButtonLink;
};

export function NoticeSection({
  notices,
  section,
}: {
  notices: readonly Notice[];
  section: {
    title: string;
  };
}) {
  return (
    <section className="sec reveal">
      <div className="container">
        <SectionTitle>{section.title}</SectionTitle>
        <div className="grid g2">
          {notices.map((notice) => (
            <article className="card notice-card" key={notice.title}>
              <h3>{notice.title}</h3>
              <p>{notice.body}</p>
              {notice.link ? (
                <a className={`btn ${notice.link.variant ?? 'outline'}`} href={notice.link.href}>
                  {notice.link.label}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
