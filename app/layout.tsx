import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import './globals.css'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: "MyBroker",
  manifest : "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      
      <body className={`${fontHeading.className} antialiased`}>
        <div className="flex flex-col min-h-[100dvh]">

          {children}

        </div>
      </body>
    </html>
    
  );
}