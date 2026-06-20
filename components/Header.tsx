'use client';

import { useState } from 'react';
import type { NavItem } from '@/src/data/site';

type HeaderProps = {
  clinic: {
    name: string;
    logo: string;
    address: string;
    tel: string;
  };
  labels: {
    topPageSuffix: string;
    menuToggle: string;
  };
  nav: readonly NavItem[];
};

export function Header({ clinic, labels, nav }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const telHref = `tel:${clinic.tel.replaceAll('-', '')}`;

  return (
    <header className="wf-header">
      <div className="container row">
        <a href="/" className="logo" aria-label={`${clinic.name} ${labels.topPageSuffix}`}>
          <img className="mark" src={clinic.logo} alt="" />
          <span className="name">{clinic.name}</span>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label={labels.menuToggle}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`wf-nav ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <div className="nav-item" key={item.href}>
              <a href={item.href}>
                <span>{item.label}</span>
              </a>
              {item.children ? (
                <div className="sub-nav">
                  {item.children.map((child) => (
                    <a key={child.href} href={child.href}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="wf-contact">
          {clinic.address}
          <br />
          <a className="tel" href={telHref}>
            {clinic.tel}
          </a>
        </div>
      </div>
    </header>
  );
}
