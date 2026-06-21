import type { ButtonLink, ImageItem } from '@/src/data/site';

type MessageSectionProps = {
  message: {
    title: string;
    subtitle: string;
    body: readonly string[];
    image: ImageItem;
    caption: string;
    links: readonly ButtonLink[];
  };
  tel: string;
};

export function MessageSection({ message, tel }: MessageSectionProps) {
  const telHref = `tel:${tel.replaceAll('-', '')}`;

  return (
    <section className="sec message-section reveal">
      <div className="container message-shell">
        <div className="message-copy stack">
          <h2 className="sec-title ink left">{message.title}</h2>
          <p className="message-subtitle">{message.subtitle}</p>
          {message.body.map((paragraph) => (
            <p key={paragraph} className="message-text">
              {paragraph}
            </p>
          ))}
        </div>
        <figure className="doctor-photo message-doctor-photo">
          <img className="ph ph-portrait" src={message.image.src} alt={message.image.alt} />
          <figcaption>{message.caption}</figcaption>
        </figure>
        <div className="message-cta-panel">
          <a className="message-cta-tel" href={telHref}>
            <span>TEL</span>
            <strong>{tel}</strong>
          </a>
          <div className="message-cta-links">
            {message.links.map((link, index) => (
              <a
                key={link.href}
                className={`btn message-cta-link message-cta-link-${index + 1}`}
                href={link.href}
              >
                {link.label}
                <span className="message-cta-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
