const DashboardCard = ({
    children,
  }: {
    children: any;
  }) => {
    return ( 
        <div className="w-full h-full rounded-md flex flex-col relative p-8 bg-white shadow-md overflow-auto">
            {children}
        </div>
     );
}
 
export default DashboardCard;