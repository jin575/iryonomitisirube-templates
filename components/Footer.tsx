import { HoursTable } from '@/components/HoursTable';
import type { SiteData } from '@/src/data/site';

export function Footer({ site }: { site: SiteData }) {
  return (
    <footer className="wf-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info stack">
            <a href="/" className="logo">
              <img className="mark" src={site.clinic.footerLogo} alt="" />
              <span className="name">{site.clinic.name}</span>
            </a>
            <p className="wf-label">{site.clinic.departments}</p>
            <p className="footer-address">
              〒{site.clinic.postalCode}
              <br />
              {site.clinic.address}
              <br />
              <a className="footer-tel" href={`tel:${site.clinic.tel.replaceAll('-', '')}`}>
                {site.clinic.tel}
              </a>
            </p>
            <HoursTable hours={site.hours} />
          </div>
          <div className="footer-side stack">
            <div className="calendar-box">
              <span className="wf-tag">{site.calendar.heading}</span>
              <ul>
                {site.calendar.days.map((day) => (
                  <li key={day.date}>
                    <span>{day.date}</span>
                    <strong>{day.label}</strong>
                  </li>
                ))}
              </ul>
              <p>{site.calendar.note}</p>
            </div>
            <div className="map-box">
              <iframe
                src={site.access.mapEmbedUrl}
                title={`${site.clinic.name} ${site.labels.googleMapSuffix}`}
                width="100%"
                height="280"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        {site.labels.copyrightPrefix} {site.clinic.name} {site.labels.copyrightSuffix}
      </div>
    </footer>
  );
}
