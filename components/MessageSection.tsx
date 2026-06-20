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
};

export function MessageSection({ message }: MessageSectionProps) {
  return (
    <section className="sec reveal">
      <div className="container message-grid">
        <figure className="doctor-photo">
          <img className="ph ph-portrait" src={message.image.src} alt={message.image.alt} />
          <figcaption>{message.caption}</figcaption>
        </figure>
        <div className="stack">
          <h2 className="sec-title ink left">{message.title}</h2>
          <p className="message-subtitle">{message.subtitle}</p>
          {message.body.map((paragraph) => (
            <p key={paragraph} className="message-text">
              {paragraph}
            </p>
          ))}
          <div className="button-row">
            {message.links.map((link) => (
              <a key={link.href} className={`btn ${link.variant ?? 'outline'}`} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
