
import { Inter } from 'next/font/google'
import NameHeader from './ui/name-header'
import './globals.css'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata = {
  title : "MyBroker",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontHeading.className} antialiased`}>
      <div className="flex flex-col min-h-[100dvh]">
            <NameHeader/>

            <main className="flex-1 bg-muted">
                <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 py-12 sm:px-4 lg:px-8">
        
                    {children}
                    
                </div>
            </main>

        </div>
      </body>
    </html>
  );
}