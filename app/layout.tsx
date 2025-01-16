import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'GM - Luca Moroni',
  description: 'Scacchista professionista',
};

const sfProDisplay = localFont({
  src: [
    {
      path: '../fonts/sf-pro-display/regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/sf-pro-display/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/sf-pro-display/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={sfProDisplay.className}>
      <body className="md:w-screen md:h-screen md:flex md:justify-center md:items-center bg-gradient-to-r from-[#040404] via-[#0A1535] to-[#1F2227]">
        <div className="bg-[#121212] text-white md:max-w-[600px] md:rounded-lg md:overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
