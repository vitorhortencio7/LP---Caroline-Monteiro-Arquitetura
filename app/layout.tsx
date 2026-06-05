import type { Metadata } from 'next';
import { Playfair_Display, Poppins, Caveat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const poppins = Poppins({ weight: ['300', '400', '500', '600'], subsets: ['latin'], variable: '--font-poppins' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-handwriting' });

export const metadata: Metadata = {
  title: 'Caroline Monteiro Arquitetura',
  description: 'Arquitetura que Conta Histórias: Criatividade que se Constrói.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable} ${caveat.variable}`}>
      <body className="antialiased selection:bg-terracota selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
