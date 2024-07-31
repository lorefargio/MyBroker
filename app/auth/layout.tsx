import NameHeader from '../ui/name-header'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    
        <>
            <NameHeader/>
            <div className="flex-1 bg-muted w-full">
                <div className="container w-full mx-auto flex h-full flex-col items-center justify-center px-4 py-12 sm:px-4 lg:px-8">
        
                    {children}
                    
                </div>
            </div>
        </>
    
  );
}