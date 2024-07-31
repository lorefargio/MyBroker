import { Inter } from 'next/font/google'
import './globals.css'


const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})


export default async function RootLayout({
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