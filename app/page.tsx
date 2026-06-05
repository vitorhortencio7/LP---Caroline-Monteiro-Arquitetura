'use client';

import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const StaggeredMenu = dynamic(() => import('@/components/StaggeredMenu'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false });
const Process = dynamic(() => import('@/components/Process'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const FloatingContact = dynamic(() => import('@/components/FloatingContact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

const menuItems = [
  { label: 'Início', ariaLabel: 'Página inicial', link: '#' },
  { label: 'Filosofia', ariaLabel: 'Sobre o estúdio', link: '#sobre' },
  { label: 'Obras', ariaLabel: 'Meu portfólio', link: '#portfolio' },
  { label: 'Método', ariaLabel: 'Como eu crio e executo', link: '#metodo' },
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
       <SmoothScroll />
       <StaggeredMenu 
         position="right"
         isFixed={true}
         logoText="CAROLINE MONTEIRO ARQUITETURA"
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
