const DashboardCard = ({
    children,
  }: {
    children: any;
  }) => {
    return ( 
        <div className="w-full h-full rounded-md relative p-8 bg-white shadow-md">
            {children}
        </div>
     );
}
 
export default DashboardCard;