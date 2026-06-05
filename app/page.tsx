import { StaggeredMenu } from '@/components/StaggeredMenu';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';

const menuItems = [
  { label: 'Início', ariaLabel: 'Página inicial', link: '#' },
  { label: 'Filosofia', ariaLabel: 'Sobre o estúdio', link: '#sobre' },
  { label: 'Obras', ariaLabel: 'Nosso portfólio', link: '#portfolio' },
  { label: 'Método', ariaLabel: 'Como concebemos e criamos', link: '#metodo' },
  { label: 'Vozes', ariaLabel: 'Depoimentos e parcerias', link: '#depoimentos' },
];

const socialItems = [
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'Pinterest', link: 'https://pinterest.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-creme selection:bg-terracota/30">
       <StaggeredMenu 
         position="right"
         isFixed={true}
         logoText="MONTEIRO STUDIO"
         items={menuItems}
         socialItems={socialItems}
         displaySocials={true}
         displayItemNumbering={true}
         accentColor="#CA8B6E" // Beautiful Warm Ocre
         colors={['#A15C4C', '#6B8E23', '#2B3326']} // Staggered earth-tone layers (terracota, green oliva accent, deep moss)
       />
       <main className="flex-1">
          <Hero />
          <About />
          <Portfolio />
          <Process />
          <Testimonials />
       </main>
       <FloatingContact />
       <Footer />
    </div>
  );
}
