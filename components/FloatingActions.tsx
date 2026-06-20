'use client';

type FloatingActionsProps = {
  tel: string;
  actions: {
    pageTopAriaLabel: string;
    pageTopLabelLines: readonly string[];
    tel: {
      labelLines: readonly string[];
    };
    reservation: {
      label: string;
      href: string;
    };
  };
};

export function FloatingActions({ actions, tel }: FloatingActionsProps) {
  const telHref = `tel:${tel.replaceAll('-', '')}`;

  return (
    <>
      <button
        type="button"
        className="pagetop"
        aria-label={actions.pageTopAriaLabel}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {actions.pageTopLabelLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </button>
      <a className="floating tel-floating" href={telHref}>
        {actions.tel.labelLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </a>
      <a className="floating reservation-floating" href={actions.reservation.href}>
        {actions.reservation.label.split(' ').map((text) => (
          <span key={text}>{text}</span>
        ))}
      </a>
    </>
  );
}
