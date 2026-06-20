import type { ReactNode } from 'react';

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className="sec-title">{children}</h2>
      <span className="divider" aria-hidden="true" />
    </>
  );
}
