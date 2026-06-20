import { ClientEffects } from '@/components/ClientEffects';
import { FloatingActions } from '@/components/FloatingActions';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SectionRenderer } from '@/components/SectionRenderer';
import { site } from '@/src/data/site';
import { templates } from '@/src/data/templates';

export default function Home() {
  const sections = templates[site.template];

  return (
    <>
      <Header clinic={site.clinic} labels={site.labels} nav={site.nav} />
      <main>
        <SectionRenderer sections={sections} site={site} />
      </main>
      <Footer site={site} />
      <FloatingActions actions={site.floatingActions} tel={site.clinic.tel} />
      <ClientEffects />
    </>
  );
}
